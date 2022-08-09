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
        } catch (error) {
            console.log('getUserPage err', error);
            return res.status(500).send({ message: 'something went wrong' });
        }
    }
    static async getUserList(req, res) {
        try {
            const user = await User.find();

            return res.status(200).send({
                data: user });
        } catch (error) {
            console.log('get user list err', error);
            return res.status(500).send({ message: 'something went wrong' });
        }
    }

    static async registration(req, res) {
        const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (req.body.email.match(emailPattern)) {
            console.log('Email valid');
        } else {
            return res.status(500).send({ message: 'Email validation error' });
        }

        const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
        if (req.body.password.match(passwordPattern)) {
            console.log('Password valid');
        } else {
            return res.status(500).send({ message: 'Your password must be at least 6-16 characters as well as contain at least one uppercase,one lowercase,one number' });
        }

        const email = await User.findOne({ email: req.body.email });
        if (email) {
            return res.status(500).send({ message: 'Email address is already been registered' });
        }
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: CryptoJs.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC,
            ).toString(),

        });

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
