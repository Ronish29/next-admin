import { withAuth } from "@/lib/withAuth";
import roleController from "../../../../controllers/role.controller";

const controller = roleController('role');

async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            controller.createRole(req, res);
            break;
        case 'GET':
            if (req.query.id) {
                controller.getSingleRole(req, res);
            } else {
                controller.getAllRole(req, res);
            }
            break;
        case 'PUT':
            controller.updateRole(req, res);
            break;
        case 'DELETE':
            controller.deleteRole(req, res);
            break;
        default:
            controller.getAllRole(req, res);
            break;
    }
}

export default withAuth(handler, 'ROLE');