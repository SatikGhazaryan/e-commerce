'use strict';

const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user-controller.js');

userRouter.post('/login', UserController.postLoginUser);
userRouter.post('/logout', UserController.postLogoutUser);
userRouter.post('registration', UserController.registration);
userRouter.get('/activate', UserController.getActivateUser);
userRouter.get('/refresh', UserController.getRefreshUser);

module.exports = userRouter;
