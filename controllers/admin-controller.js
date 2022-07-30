'use strict';
const Admin = require('../schemas/admin-schema.js');

class AdminController {
    static async createAdmin(req, res) {
        const adminBody = req.body;
        try {
            const saveData = await Admin.create({
                name: adminBody.nameAdmin,
                password: adminBody.passwordAdmin,
            });

            return res.status(201).send({ data: saveData });
        } catch (error) {
            console.log('error', error);
            res.status(400).send({ message: 'Invalid data' });
        }
    }

    static async loginAdmin(req, res) {
        const user = await Admin.findOne({
            name: req.body.nameAdmin,
            password: req.body.passwordAdmin,
        });

        if (user) {
            return res.status(200).send({ data: user });
        }

        res.status(400).send({ message: 'username and password does not match' });
    }
}

module.exports = { AdminController };
