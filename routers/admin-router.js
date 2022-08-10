'use strict';

const express = require('express');
const adminRouter = express.Router();
const { AdminController } = require('../controllers/admin-controller.js');

adminRouter.post('../admin/create', AdminController.createAdmin);
adminRouter.post('../admin/login', AdminController.loginAdmin);

module.exports = adminRouter;
