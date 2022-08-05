'use strict';

const express = require('express');
const indexRouter = express.Router();

const adminRouter = require('./admin-router.js');
const userRouter = require('./user-router.js');
const categoriesRouter = require('./catagories-router');
const productRouter = require('./product-router.js');

indexRouter.use(adminRouter);
indexRouter.use(userRouter);
indexRouter.use(categoriesRouter);
indexRouter.use(productRouter);

module.exports = indexRouter;

