'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    nameUser: {
        type: String,
        required: true,
    },
    passwordUser: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
