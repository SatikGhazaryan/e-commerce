'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const CategoriesSchemas = new Schema(
    {
        nameCategorie: {
            type: String,
            // required: true,
        },
    },
    { collection: 'categories' },
);
const Categories = mongoose.model('categorie', CategoriesSchemas);

module.exports = Categories;
