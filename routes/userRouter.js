const express = require("express");
const userController = require("../controllers/userController");
const Router = express.Router();

Router.route("/").post(userController.saveUser);
Router.route("/signin").post(userController.signin);

module.exports = Router;
