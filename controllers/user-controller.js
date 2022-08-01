/* eslint-disable max-len */
'use strict';

const User = require('../schemas/user-schema.js');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const path = require('path');

class UserController {
    static async getUserPage(req, res) {
        try {
            res.sendFile(path.resolve('front/user/user.html'));
            // res.sendFile(path.resolve('front/user/user.css'));
            // res.sendFile(path.resolve('front/user/user.js'));
        } catch (error) {
            console.log('getUserPage err', error);
            return res.status(500).send({ message: 'something went wrong' });
        }
    }

    static async registration(req, res) {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: CryptoJs.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC,
            ).toString(),
        });
        // const userPassPattern = /(?!.* )(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        // if (req.body.password = '') {
        //     return res.send({ message: 'Password can\'t be blank' });
        // }
        // if (req.body.password.match(userPassPattern)) {
        //     return res.send({ message: 'pattern valid error' });
        // }
        // if ((req.body.password.length >= 8)  && (req.body.password.length <= 16)) {
        //     res.send({ message: 'password mast begreat than 8 and less than 16' });
        // } else {
        //     res.send({ message: 'password must be greater than 8 and less than 16' });
        // }
        console.log(newUser);

        try {
            const saveUser = await newUser.save();
            return res.status(201).send(saveUser);
        } catch (error) {
            console.log('Registration error', error);
            return res.status(500).send({ message: 'something went wrong' });
        }
    }

    static async loginUser(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).send('User not found');
            }
            const hashPassword = CryptoJs.AES.decrypt(
                user.password,
                process.env.PASS_SEC,
            );
            const password = hashPassword.toString(CryptoJs.enc.Utf8);

            if (password !== req.body.password) {
                return res.status(401).send('Wrong password');
            }
            const accessToken = jwt.sign(
                { id: user._id },
                process.env.JWT_ACCESS_SECRET, { expiresIn: '3d' },
            );
            return res.status(200).send({ data: user, accessToken });
        } catch (error) {
            console.log('User login error', error);
            return res.status(500).send('User Log In error');
        }
    }
    static async putUser(req, res) {
        if (req.body.password) {
            req.body.password = CryptoJs.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC,
            ).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            return res.status(200).send(updateUser);
        } catch (error) {
            console.log('Edit user error', error);
            return res.status(500).send('User edit error');
        }
    }
    static async deleteUser(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).send('User has been deleted');
        } catch (error) {
            console.log('User deleted error', error);
            return res.status(500).send('User has not deleted');
        }
    }
}

module.exports = { UserController };
