const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const generateToken = require('../utils/generateToken')

exports.register = async (req, res) => {
    try {
        const {email, password, firstName, lastName, role} = req.body;
        const existing = await User.findOne({ where: { email } })
        if (existing) {
            return res.status(400).json({ message: "Email already in use"})
        }

        const user = await User.create({
            email,
            password,
            firstName,
            lastName,
            role: role || 'CLIENT'
        })
        const token = generateToken(user.id);
        res.status(201).json({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            token,
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ where: {email}})
        if (!user) {
            return res.status(401).json({ message: "Invaid credentials" });
        }

        const match = bcrypt.compare(user.password, password);
        if (!match) {
            return res.status(401).json({ message: "Invaid credentials" });
        }

        const token = generateToken(user.id)
        res.json({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            token,
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
}

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.body.id, {
            attributes: {exclude: ['password'], }
        })

        if (!user) return res.status(404).json({ message: 'User not found' });
        console.log(user);
        res.json(user);
    } catch (error) {
        console.error('Profile error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

