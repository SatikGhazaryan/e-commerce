'use strict';

const User = require('../schemas/user-schema.js');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

class UserController {
    static async getUserPage(req, res) {
        try {
            res.send('login Page');
        } catch (error) {
            console.log('getUserPage err', error);
            res.status(500).send({ message: 'something went wrong' });
        }
    }
    static async registration(req, res) {
        const newUser = new User({
            nameUser: req.body.nameUser,
            email: req.body.email,
            passwordUser: CryptoJs.AES.encrypt(
                req.body.passwordUser,
                process.env.PASS_SEC,
            ).toString(),
        });
        console.log(newUser);
        try {
            const saveUser = await newUser.save();
            res.status(201).send(saveUser);
        } catch (error) {
            console.log('registration err', error);

            res.status(500).send({ message: 'something went wrong' });
        }
    }

    static async postLoginUser(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json('User not found');
            }
            const hashPasswordUser = CryptoJs.AES.decrypt(
                user.passwordUser,
                process.env.PASS_SEC,
            );
            const passwordUser = hashPasswordUser.toString(CryptoJs.enc.Utf8);

            if (passwordUser !== req.body.passwordUser) {
                res
                    .status(401)
                    .json('Wrong password');
            }
            const accessToken = jwt.sign(
                { id: user._id },
                process.env.JWT_ACCESS_SECRET, { expiresIn: '3d' },
            );
            res.status(200)
                .send({ data: user, accessToken });
        } catch (error) {
            res
                .status(500)
                .json(error);
        }
    }
    static async putUser(req, res) {
        if (req.body.passwordUser) {
            req.body.passwordUser = CryptoJs.AES.encrypt(
                req.body.passwordUser,
                process.env.PASS_SEC,
            ).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res
                .status(200)
                .json(updateUser);
        } catch (error) {
            res
                .status(500)
                .json(error);
        }
    }
    static async deleteUser(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res
                .status(200)
                .json('User has been deleted');
        } catch (error) {
            res
                .status(500)
                .json(error);
        }
    }
}

module.exports = { UserController };
