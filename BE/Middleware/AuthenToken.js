const createHttpError = require("http-errors");
const config = require("../Config/Config");
const db = require("../Model");
const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");

function authenToken(req, res, next) {
    const token = req.headers.authorization || req.headers.Authorization;
    if (!token?.startsWith('Bearer ')) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token.split(' ')[1], process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}

async function verifyToken(req, res, next) {
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            throw createHttpError.Unauthorized("Token not provided");
        }

        jwt.verify(token, config.secret, (error, decoded) => {
            if (error) {
                const message = error instanceof JsonWebTokenError ? "Unauthorized: Access Token was expired" : error.message;
                throw createHttpError.Unauthorized(message);
            }
            req.userId = decoded.id;
            next();
        });
    } catch (error) {
        next(error);
    }
}


module.exports = authenToken;