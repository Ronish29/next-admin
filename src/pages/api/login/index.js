import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendErrorResponse from "@/utils/sendErrorResponse";
import sendResponse from "@/utils/sendResponse";
import { serialize } from "cookie";

async function handler(req, res) {
    try {

        if (req.method !== 'POST') {
            return sendErrorResponse(res, { message: "User not found" }, 404);

        }

        console.log(req.method, "==req===");


        const { user_name, password } = req.body;

        const existing = await prisma.user.findUnique({
            where: {
                user_name,
            },
            include: {
                role: true,
            },
        });

        if (!existing) return sendErrorResponse(res, { message: "User not found" }, 404);

        const valid = await bcrypt.compare(password, existing.password);

        if (!valid)
            return sendErrorResponse(res,
                { message: "user_name or password may be wrong" },
                404
            );

        const token = jwt.sign(
            {
                id: existing.id,
                email: existing.email,
                user_name: existing.user_name,
                name: existing.name,
                isSuperAdmin: existing.isSuperAdmin,
                roleId: existing.roleId,
                role: existing.role,
            },
            process.env.JWT_SECRET_TOKEN,
            {
                expiresIn: "1d",
            }
        );

        res.setHeader('Set-Cookie', serialize('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
        }));

        return sendResponse(res, { message: "user logged in successfully" }, 200);
    } catch (error) {
        console.log(error);

        return sendErrorResponse(res, { error: "Forbidden Error" }, 400);
    }
}

export default handler