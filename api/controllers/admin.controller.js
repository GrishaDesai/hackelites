const mongoose = require('mongoose');
const Admin = require('../models/adminSchema.js');
const bcrypt = require('bcryptjs');

const getOneAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        console.log(email, password);

        if (!email || !password) {
            return res.send({ status: 400 });;
        }

        const ad = await Admin.findOne({ email: req.body.email });

        if (ad == null) {
            return res.send({ status: 400 });
        }

        // const isMatch = await bcrypt.compare(password, ad.password);

        // if (!isMatch) {
        if (ad.password != password) {
            return res.status(400).send({ message: 'Invalid details' });
        }

        console.log(ad);

        res.send(ad);
    }
    catch (err) {
        res.status(500).json({ err });
    }
}

const getAllAdmin = async (req, res) => {
    try {
        const allAdmin = await Admin.find();

        return res.status(200).json(allAdmin);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

module.exports = { getAllAdmin, getOneAdmin }