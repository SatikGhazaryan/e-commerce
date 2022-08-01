'use strict';

const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')();

const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        hide: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.plugin(mongooseHidden);

const User = mongoose.model('users', UserSchema);
module.exports = User;
