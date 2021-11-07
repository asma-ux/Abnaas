const express = require('express');
const userController = require('../controllers/userController');
const Router = express.Router();

Router.route('/').post(userController.createUser).get(userController.finduser);

module.exports = Router;
