import { withAuth } from "@/lib/withAuth";
import userController from "../../../../controllers/user.controller";

const controller = userController('user');

async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            controller.createUser(req, res);
            break;
        case 'GET':
            if (req.query.id) {
                controller.getSingleUser(req, res);
            } else {
                controller.getAllUser(req, res);
            }
            break;
        case 'PUT':
            controller.updateUser(req, res);
            break;
        case 'DELETE':
            controller.deleteUser(req, res);
            break;
        default:
            controller.getAllUser(req, res);
            break;
    }
}

export default withAuth(handler, 'USER');