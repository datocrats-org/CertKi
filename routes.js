const loginController = require('./auth/login');
const registerController = require('./auth/register');

module.exports = app => {
    app.use('/auth/login', loginController);
    app.use('/auth/register', registerController);
}