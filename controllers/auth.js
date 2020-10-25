const {response} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {generateJWT} = require('../helpers/jwt'); 

//Register
const userRegister = async(req, res = response) => {
    const {username , password, email} = req.body;
    try {
        const usernameAlreadyExists = await User.findOne({username}) != null;
        const emailAlreadyExists = await User.findOne({email}) != null;

        if (usernameAlreadyExists || emailAlreadyExists) {
            return res.status(400).json({
                msg: 'The username or email is already in use, please choose another one.'
            })
        }
        
        const user = new User(req.body);

        //Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        //Generate token
        const token = await generateJWT(user.id, user.username);

        return res.status(201).json({
            msg: 'New user registered',
            uid: user.id,
            username: user.username,
            token: token
        });
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Something gone wrong, please contact the admin'
        });
    }
}

//Login
const userLogin = async(req, res = response) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        
        if(!user) {
            return res.status(400).json({
                msg: "There's no user with that email or password"
            });
        }

        //Password validation
        const passwordValidation = bcrypt.compareSync(password, user.password);

        if(!passwordValidation) {
            return res.status(400).json({
                msg: 'There is no user with that email or password'
            });
        }

        //Generate token
        const token = await generateJWT(user.id,user.username);

        return res.status(200).json({
            msg: `${user.username} logged in.`,
            uid: user.id,
            name: user.username,
            token: token
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).kson({
            msg: "There's no user with that email or password"
        })
    }
}

const tokenRenew = async(req, res = response) => {
    const {uid, username} = await req;

    //Generate a new token
    const token = await generateJWT(uid, username);

    return res.json({
        msg: 'Token renewed',
        token: token,
        uid: uid,
        username: username
    })
} 

module.exports = { userRegister, userLogin, tokenRenew };