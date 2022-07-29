'use strict';

const  Admin = require('../schemas/admin-schema.js');
// const User = require('../schemas/user-schema.js');
// const CryptoJs = require('crypto-js');
// const jwt = require('jsonwebtoken');
// const { UserController } = require('../controllers/user-controller.js');

class AdminController {
    static async postAdmin(req, res) {
        const newAdmin = new Admin({
            nameAdmin: req.body.nameAdmin,
            passwordAdmin: req.body.passwordAdmin,
        });
        this; try {
            const saveAdmin = await newAdmin.save();
            res
                .status(201)
                .json(saveAdmin);
        } catch (error) {
            res
                .status(500)
                .json(error);
        }
    }
    // static async postLoginAdmin(req, res, next) {
    //     this; try {

    //     } catch (error) {

    //     }
    // }
    // static async postLogoutAdmin(req, res, next) {
    //     this; try {

    //     } catch (error) {

    //     }
    // }
    // static async getUser(req, res) {
    //     this; try {
    //         const userIs = await User.findById(req.params.id);
    //         res
    //             .status(200)
    //             .json({ user._doc });
    //     } catch (error) {
    //         res
    //             .status(500)
    //             .json(error);
    //     }
    // }
}

module.exports = { AdminController };
