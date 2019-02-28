const config=require('./config/config');
const mongoose = require('mongoose');
const {dbHost,dbPort,database}=config
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connection
    .on('connected', (resp) => {
        console.log(`Database Connected : ${config.database}`);
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

const connection=mongoose.connect(`mongodb://${dbHost}:${dbPort}/${database}`,{useNewUrlParser:true});

module.exports=connection
