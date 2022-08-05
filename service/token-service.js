'use strict';

const jwt = require('jsonwebtoken');

const verifyTokenUser = (req, res, next) => {
    const authUserToken = req.headers.token;
    if (authUserToken) {
        // eslint-disable-next-line prefer-destructuring
        const token = authUserToken.split(' ')[1];
        jwt.verify(
            token, process.env.JWT_ACCESS_SECRET,
            (error, user) => {
                if (error) {
                    res
                        .status(403)
                        .send('Token is not valid');
                }
                req.user = user;
                next();
            },
        );
    } else {
        return res
            .status(401)
            .send('You are not authenticated!');
    }
};
const verifyTokenAdmin = (req, res, next) => {
    const authAdminToken = req.headers.token;
    if (authAdminToken) {
        // eslint-disable-next-line prefer-destructuring
        const token = authAdminToken.split(' ')[1];
        jwt.verify(
            token, process.env.JWT_ACCESS_SECRET,
            (error, admin) => {
                if (error) {
                    res
                        .status(403)
                        .send('Token is not valid');
                }
                req.admin = admin;
                next();
            },
        );
    } else {
        return res
            .status(401)
            .send('You are not authenticated!');
    }
};

const verifyTokenAuthUser = (req, res, next) => {
    verifyTokenUser(req, res, () => {
        if (req.user.id === req.params.id) {
            next();
        } else {
            res
                .atatus(403)
                .send('You are not alowed to do that');
        }
    });
};

const verifyTokenAuthAdmin = (req, res, next) => {
    verifyTokenAdmin(req, res, () => {
        if (req.admin.id === req.params.id) {
            next();
        } else {
            res
                .atatus(403)
                .send('You are not alowed to do that');
        }
    });
};

module.exports = { verifyTokenUser, verifyTokenAuthUser, verifyTokenAdmin, verifyTokenAuthAdmin };
