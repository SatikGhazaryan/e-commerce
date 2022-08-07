'use strict';
const Admin = require('../schemas/admin-schema.js');
const jwt = require('jsonwebtoken');

class AdminController {
    static async createAdmin(req, res) {
        try {
            const saveData = await Admin.create({
                name: req.body.name,
                password: req.body.password,
            });

            return res.status(201).send({ data: saveData });
        } catch (error) {
            console.log('error', error);
            res.status(400).send({ message: 'Invalid data' });
        }
    }

    static async loginAdmin(req, res) {
        const admin = await Admin.findOne({
            name: req.body.name,
            password: req.body.password,
        });

        const accessToken = jwt.sign(
            { id: admin._id },
            process.env.JWT_ACCESS_SECRET, { expiresIn: '3d' },
        );

        if (admin) {
            return res.status(200).send({ data: admin, accessToken });
        }

        res.status(400).send({ message: 'username and password does not match' });
    }
}

module.exports = { AdminController };
