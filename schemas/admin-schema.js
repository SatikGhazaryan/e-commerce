'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const AdminSchema = new Schema({
    nameAdmin: {
        type: String,
        unique: true,
        required: true,
    },
    passwordAdmin: {
        type: String,
        required: true,
    },
});

const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin;

