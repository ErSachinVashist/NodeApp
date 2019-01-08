const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    const User = mongoose.model('User');
    User.find().then(function (user) {
        res.json(user);
    })
});

module.exports = router;
