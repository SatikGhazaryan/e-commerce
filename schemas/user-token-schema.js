'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const TokenUserSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    },

});

const TokenUser = mongoose.model('tokenUser', TokenUserSchema);
module.exports = TokenUser;
