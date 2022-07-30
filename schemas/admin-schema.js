'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const AdminSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin;

