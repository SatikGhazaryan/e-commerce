'use strict';

const User = require('../schemas/user-schema.js');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const { MailService } = require('../service/mail-service.js');
const { TokenService } = require('../service/token-service.js');
const { UserDto } = require('../dtos/user-dto');

class UserService {
    static async registration(email, passwordUser) {
        this; try {
            const candidate = await User.findOne({ email });
            if (candidate) {
                throw new Error(`A user with ${email}  address already exists`);
            }
            const hashPasswordUser = await bcrypt.hash(passwordUser, 3);
            const activationLink = uuid.v4();

            const user = await User.create({ email, passwordUser: hashPasswordUser, activationLink });
            await MailService.sendActivationMail(email, activationLink);
            const userDto = new UserDto(user);
            const tokens = TokenService.generateTokens({ ...userDto });
            await TokenService.saveToken(userDto.id, tokens.refreshToken);

            return { ...tokens, user: userDto };
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = { UserService };
