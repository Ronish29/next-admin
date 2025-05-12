import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../services/user.service";

const userController = (modelName) => {
  const model = modelName;
  let controller = {};

  controller.getAllUser = (req, res) => {
    getAllUser(req, res, model);
  };
  controller.getSingleUser = (req, res) => {
    getSingleUser(req, res, model);
  };
  controller.createUser = (req, res) => {
    createUser(req, res, model);
  };
  controller.updateUser = (req, res) => {
    updateUser(req, res, model);
  };
  controller.deleteUser = (req, res) => {
    deleteUser(req, res, model);
  };

  return controller;
};

export default userController;
