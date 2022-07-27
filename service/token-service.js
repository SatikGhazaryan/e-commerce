'use strict';

const jwt = require('jsonwebtoken');
const TokenUser = require('../schemas/user-token-schema.js');

class TokenService {
    static generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
        return {
            accessToken,
            refreshToken,
        };
    }
    static async saveToken(userId, refreshToken) {
        const tokenData = await TokenUser.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await TokenUser.create({ user: userId, refreshToken });
        return token;
    }
}

module.exports = { TokenService };
