const Users = require('../models/user');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const saltRounds = 8;
require('dotenv').config();
const secret = process.env.ACCESS_SECRET_TOKEN;

const register = async (req, res) => {
    try {
        const userExits = await Users.findOne({ username: req.body.username });
        if (userExits) {
            res.status(400).json({ message: "Username already exists" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;
        const userData = await Users.create(req.body);
        res.status(201).json(userData);
    } catch (error) {
        console.log("auth", error.message);
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({ username });
        const passOk = bcrypt.compareSync(password, user.password)
        if (user && passOk) {
            const token = jwt.sign({ username, id: user._id }, secret)
            res.cookie('token', token).status(200).json({ username });

        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ ERROR: 'Internal Server Error' });
    }
};

const logout = async (req, res) => {
    try {
        res.cookie('token', '').status(200).send('Logout successful')

    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { register, login , logout };