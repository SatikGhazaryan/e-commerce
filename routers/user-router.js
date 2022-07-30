'use strict';

const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user-controller.js');
const { verifyTokenAuthorization } = require('../service/token-service.js');

userRouter.get('/user/login', UserController.getUserPage);
userRouter.post('/user/login', UserController.postLoginUser);
userRouter.post('/user/registration', UserController.registration);
userRouter.put('/user/edit/:id', verifyTokenAuthorization, UserController.putUser);
userRouter.delete('/user/delete/:id', verifyTokenAuthorization, UserController.deleteUser);

module.exports = userRouter;
