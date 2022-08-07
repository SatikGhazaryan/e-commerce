'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const CategoriesSchemas = new Schema({
    name: {
        type: String,
        required: true,
    },
});
const Categories = mongoose.model('categories', CategoriesSchemas);

module.exports = Categories;
