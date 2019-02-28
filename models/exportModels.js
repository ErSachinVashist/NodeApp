const fs = require("fs");
const mongoose = require('mongoose');
const path = require("path");
const db = {};

fs.readdirSync(__dirname)
    .forEach(function(file) {
        if(file.endsWith('.js') ) return;
        let model = require(path.join(__dirname, file)),
            name=file.replace('.json','')
        db[name]=mongoose.model(name,mongoose.Schema(model))
});

module.exports = db;
