const router = require('express').Router();
const userModel = require('../models/user');
const mongoose = require('mongoose');

router.post('/', (req, res) => {
    const user = new userModel({
        _id: mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password,
        creation_date: new Date()
    }).save((err) => {
        if (err) {console.log(err); return res.status(500).json({message: "Error creating new user."})}
        console.log("New user created.")
        res.status(201).json({message: "User created successfully."})
    })
})

module.exports = router;