import prisma from '@/lib/prisma';
import sendErrorResponse from '@/utils/sendErrorResponse';
import sendResponse from '@/utils/sendResponse';
import bcrypt from 'bcrypt';


const handler = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash('vivek', 10);

        const user = await prisma.user.create({
            data: {
                user_name: "vivek",
                email: "vivek2@gmail.com",
                name: "vivek",
                isSuperAdmin: true,
                password: hashedPassword,
            },
            include: {
                role: true
            }
        });

        return sendResponse(res, user, 201);
    } catch (err) {
        console.log(err, "error=========");
        return sendErrorResponse(res, err.message, 400);
    }
};

export default handler;