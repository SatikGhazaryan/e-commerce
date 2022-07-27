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
    isActivated: {
        type: Boolean,
        default: false,
    },
    activationLink: {
        type: String,
        required: true,
    },

});

const User = mongoose.model('users', UserSchema);
module.exports = User;
