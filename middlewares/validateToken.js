const {response} = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateToken = (req, res = response, next) => {
    const token = req.header('x-token');
    
    if(!token) {
        return res.status(401).json({
            msg:`There's no token in the request`
        });
    }

    try {
        const {uid, username} = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.username = username;

    } 
    catch (error) {
        return res.status(401).json({
            msg: "Invalid Token"
        });
    }

    next();
}


module.exports = {validateToken};