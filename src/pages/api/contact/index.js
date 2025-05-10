import concatController from "../../../../controllers/contact.controller";

const controller = concatController("contact");

async function handler(req, res) {
  console.log(req.query.id, "req.query========");
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        controller.getSingleContact(req, res);
      } else {
        controller.getAllContact(req, res);
      }
      break;
    case "POST":
      controller.createContact(req, res);
      break;
    case "PUT":
      controller.updateContact(req, res);
      break;
    case "DELETE":
      controller.deleteContact(req, res);
      break;
    default:
      break;
  }
}

export default handler;
