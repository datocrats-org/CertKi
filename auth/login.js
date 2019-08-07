const router = require('express').Router();
const userModel = require('../models/user');
const mongoose = require('mongoose');

router.post('/', (req, res) => {
    userModel.find({email: req.body.email}, (err, user) => {
        if (err) {return res.status(500).json({message: "Error getting user."})};
        
        let postPassword = req.body.password;
        let dbUser = user[0];

        dbUser.comparePassword(postPassword, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal error occured."});
            }
            else if (!result) {
                res.status(401).json({message: "Invalid username or password."});
            }
            let token = dbUser.generateToken();
            res.status(200).json({message: "Success", token: token});
        });

    })
})

module.exports = router;