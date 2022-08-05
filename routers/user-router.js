'use strict';

const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user-controller.js');
const { verifyTokenAuthorization } = require('../service/token-service.js');

userRouter.post('/user/login', UserController.loginUser);
userRouter.post('/users', UserController.registration);
userRouter.get('/users', UserController.getUserPage);
userRouter.put('/:id', verifyTokenAuthorization, UserController.putUser);
userRouter.delete('/:id', verifyTokenAuthorization, UserController.deleteUser);

module.exports = userRouter;
