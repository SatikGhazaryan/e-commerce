'use strict';

const express = require('express');
const productsRouter = express.Router();
const { ProductController } = require('../controllers/products-controller.js');
const { verifyTokenAuthAdmin } = require('../service/token-service.js');

productsRouter.post('/products',  ProductController.createProduct);
productsRouter.put('/:id', verifyTokenAuthAdmin, ProductController.putProduct);
productsRouter.delete('/:id', verifyTokenAuthAdmin, ProductController.createProduct);
productsRouter.get('/products', ProductController.getProductList);
productsRouter.get('/products', ProductController.getProduct);

module.exports = productsRouter;
