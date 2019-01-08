const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('User', user);
