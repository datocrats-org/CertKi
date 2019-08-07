const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { default: false },
    creation_date: Date,
    last_login: Date
});

userSchema.pre('save', next => {
    let user = this;
    console.log(user);
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {return next(err)}
        this.password = hash;
        next()
    })
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, (err, res) => {
        if (err) {return cb(err, null);}
        cb(null, res);
    });
};

module.exports = mongoose.model('users', userSchema)