'use strict';

const Product = require('../schemas/product-schema.js');
// const path = require('path');

class ProductController {
    static async getProduct(req, res) {
        try {
            const product = await Product.find();

            return res.status(200).send({
                data: product });
        } catch (error) {
            console.log('get product list err', error);
            return res.status(500).send({ message: 'something went wrong' });
        }
    }
    static async createProduct(req, res) {
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            imgUrl: req.body.imgUrl,
            // categories: req.body.categories,
        });

        console.log(newProduct);
        try {
            const saveProduct = await newProduct.save();
            return res.status(201).send(saveProduct);
        } catch (error) {
            console.log('Product created error', error);
            return res.status(500).send({ message: 'something went wrong' });
        }
    }
    static async putProduct(req, res) {
        try {
            const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            return res.status(200).send(updateProduct);
        } catch (error) {
            console.log('Edit product error', error);
            return res.status(500).send('Product edit error');
        }
    }
    static async deleteProduct(req, res) {
        try {
            await Product.findByIdAndDelete(req.params.id);
            return res.status(200).send('Product has been deleted');
        } catch (error) {
            console.log('Product deleted error', error);
            return res.status(500).send('Product has not deleted');
        }
    }
}

module.exports = { ProductController };
