'use strict';

const express = require('express');
const categoriesRouter = express.Router();
const { CategoriesController } = require('../controllers/categories-controller');

categoriesRouter.get('/categories', CategoriesController.getCategories);
categoriesRouter.post('/categories', CategoriesController.createCategories);

module.exports = categoriesRouter;
