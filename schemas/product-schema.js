'use strict';

const mongoose = require('mongoose');
// const Categories = require('./categories-schema.js');

const { Schema } = mongoose;
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String,
    },
    // categories: {
    //     type: mongoose.Types.ObjectId,
    //     ref: Categories,
    //     // required: true,
    // },
    created: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;
