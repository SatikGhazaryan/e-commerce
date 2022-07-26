'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const categoriesSchemas = new Schema(
    {
        nameCategorie: {
            type: String,
            // required: true,
        },
    },
    { collection: 'categories' },
);
const Categories = mongoose.model('categories', categoriesSchemas);
module.exports = Categories;
