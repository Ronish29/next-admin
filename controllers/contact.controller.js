import {
  createContact,
  deleteContact,
  getAllContact,
  getSingleContact,
  updateContact,
} from "../services/contact.service";

const concatController = (modelName) => {
  const model = modelName;
  let controller = {};

  controller.getAllContact = (req, res) => {
    getAllContact(req, res, model);
  };
  controller.getSingleContact = (req, res) => {
    getSingleContact(req, res, model);
  };
  controller.createContact = (req, res) => {
    createContact(req, res, model);
  };
  controller.updateContact = (req, res) => {
    updateContact(req, res, model);
  };
  controller.deleteContact = (req, res) => {
    deleteContact(req, res, model);
  };

  return controller;
};

export default concatController;
