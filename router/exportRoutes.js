const express = require('express');
const fs = require("fs");
const path = require('path');
const router = express.Router();
const models=require('../models/exportModels')
const forEach=require('foreach')
const ServerUp=path.resolve(__dirname,'../public/server.html');

let methods={};

fs.readdirSync(__dirname)
    .forEach(function(file) {
        if(file==='index.js') return;
        methods[file.replace('.js','')] = require(path.join(__dirname, file));
    });

router.get('/', (req, res) => {
    res.sendFile(ServerUp)
});


router.use('/api/:type', (req,res,next) => {
    if(!methods[req.params.type]){
        return res.json({error:'Unhandled api request'})
    }
    return next()
});

forEach(Object.keys(methods),function (method) {
    forEach(methods[method],function (route) {
        router[route.type](`/api/${method}`,(req,res)=>{
           return route.method(models[method],req,res)
        })
    })
})

module.exports = router;
