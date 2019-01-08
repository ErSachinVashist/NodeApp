let express=require('express');
const config=require('./config');
const mongoose = require('mongoose');
const app=express(),
      port=config.port,
      router=require('./router')


mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.database}`,{useNewUrlParser:true});
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection open on ${config.database}`);
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

require('./models/user');
app.use('/',router)

app.listen(port,function () {
    console.log('Server Started')
})
