'use strict';

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
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
                        .json('Token is not valid');
                }
                req.user = user;
                next();
            },
        );
    } else {
        return res
            .status(401)
            .json('You are not authenticated!');
    }
};

const verifyTokenAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id) {
            next();
        } else {
            res
                .atatus(403)
                .json('You are not alowed to do that');
        }
    });
};

module.exports = { verifyToken, verifyTokenAuthorization };
