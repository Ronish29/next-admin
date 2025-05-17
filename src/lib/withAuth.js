import jwt from "jsonwebtoken";
import sendErrorResponse from "@/utils/sendErrorResponse";
import { parse } from "cookie";

export function withAuth(handler, requiredPermissions) {
    return async (req, res) => {
        const cookies = parse(req.headers.cookie || "");
        const token = cookies.authToken;

        console.log(token, "==authToken from cookies==");

        if (!token) {
            return sendErrorResponse(res,
                { error: "Unauthorized: Missing token, please login and try again." },
                400
            );
        }

        let user;

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

            if (typeof decoded === "string") {
                return sendErrorResponse(res,
                    { error: "Unauthorized: Token payload invalid format." },
                    400
                );
            }

            user = decoded;
        } catch (error) {
            console.log(error, "===err====");
            return sendErrorResponse(res, { error: "Unauthorized: Invalid Token" }, 400);
        }

        if (user.isSuperAdmin) {
            return handler(req, res);
        }

        const userPermissions = user.role?.permissions || [];

        if (!Array.isArray(userPermissions)) {
            return sendErrorResponse(res,
                { error: "Forbidden: Invalid permissions format" },
                400
            );
        }

        const hasPermission = userPermissions.some((permission) =>
            requiredPermissions.includes(permission)
        );

        if (hasPermission) {
            return handler(req, res);
        }

        return sendErrorResponse(res,
            { error: "Forbidden: Insufficient permissions" },
            400
        );
    };
}
