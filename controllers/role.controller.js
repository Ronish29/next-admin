import {
  createRole,
  deleteRole,
  getAllRole,
  getSingleRole,
  updateRole,
} from "../services/role.service";

const roleController = (modelName) => {
  const model = modelName;
  let controller = {};

  controller.getAllRole = (req, res) => {
    getAllRole(req, res, model);
  };
  controller.getSingleRole = (req, res) => {
    getSingleRole(req, res, model);
  };
  controller.createRole = (req, res) => {
    createRole(req, res, model);
  };
  controller.updateRole = (req, res) => {
    updateRole(req, res, model);
  };
  controller.deleteRole = (req, res) => {
    deleteRole(req, res, model);
  };

  return controller;
};

export default roleController;
