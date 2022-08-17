'use strict';

const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user-controller.js');
const { verifyTokenAuthUser } = require('../service/token-service.js');
const { ProductController } = require('../controllers/products-controller.js');

userRouter.post('/user/login', UserController.loginUser);
userRouter.post('/users', UserController.registration);
userRouter.get('/users', ProductController.getProduct); // getProduct <-> getUserPage
userRouter.get('/usersList', UserController.getUserList);
userRouter.put('/:id', verifyTokenAuthUser, UserController.putUser);
userRouter.delete('/:id', verifyTokenAuthUser, UserController.deleteUser);

module.exports = userRouter;
