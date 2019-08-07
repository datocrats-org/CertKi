const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

// Server configuration
const app = express();
const PORT = process.env.PORT || 3000

// App middleware
app.use(bodyparser.json());

// API Router
require('./routes')(app);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {useNewUrlParser: true}, (err) => {
    console.log(err ? err : "Connected to MongoDB.");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});