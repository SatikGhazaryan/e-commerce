'use strict';

const express = require('express');
const adminRouter = express.Router();
// const { AdminController } = require('../controllers/admin-controller.js');
const dashboardRouter = express.Router();
const CategoriesController = require('../controllers/categories-controller.js');

dashboardRouter.get('/dashboard', CategoriesController.getCategoriesController);
// adminRouter.post('/post', AdminControllgit statuser.postAdmin);
// adminRouter.post('/login', AdminController.postLoginAdmin);
// adminRouter.post('/logout', AdminController.postLogoutAdmin);
// adminRouter.get('/userList', AdminController.getUserList);

module.exports = adminRouter, dashboardRouter;
