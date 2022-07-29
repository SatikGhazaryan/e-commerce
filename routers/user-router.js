'use strict';

const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user-controller.js');
const { verifyTokenAuthorization } = require('../service/token-service.js');

userRouter.get('/login', UserController.getUserPage);
userRouter.post('/login', UserController.postLoginUser);
userRouter.post('/registration', UserController.registration);
userRouter.put('/edit/:id', verifyTokenAuthorization, UserController.putUser);
userRouter.delete('/delete/:id', verifyTokenAuthorization, UserController.deleteUser);

module.exports = userRouter;
