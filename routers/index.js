'use strict';

const express = require('express');
const indexRouter = express.Router();

const adminRouter = require('./admin-router.js');
const userRouter = require('./user-router.js');
const categoriesRouter = require('./catagories-router');

indexRouter.use(adminRouter);
indexRouter.use(userRouter);
indexRouter.use(categoriesRouter);

module.exports = indexRouter;

