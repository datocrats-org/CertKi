// Auth Controllers
const loginController = require('./auth/login');
const registerController = require('./auth/register');

// API Controllers
const certificateController = require('./api/certificate');

module.exports = app => {
    app.use('/auth/login', loginController);
    app.use('/auth/register', registerController);
    app.use('/api/certificate', certificateController);
}