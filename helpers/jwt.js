const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = {uid, name};

        jwt.sign( payload, process.env.SECRET_JWT_SEED, { expiresIn: '1h'},
            (error, token) => {
                if(error) {
                   reject(`The token couldn't be generated`);
                }
            resolve(token);
        });
    });
};


module.exports = {generateJWT};