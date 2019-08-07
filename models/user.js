const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JTW = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { default: false },
    creation_date: Date,
    last_login: Date
});

userSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {return next(err)}
        this.password = hash;
        next()
    })
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, res) => {
        if (err) {return cb(err, null);}
        cb(null, res);
    });
};

userSchema.methods.generateToken = function() {
    return JTW.sign({email: this.email, id: this._id}, process.env.JWT_SECRET_TOKEN, null);
}

module.exports = mongoose.model('users', userSchema)