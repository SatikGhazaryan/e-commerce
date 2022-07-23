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
const categorie = mongoose.model('categorie', categoriesSchemas);

module.exports = categorie;
