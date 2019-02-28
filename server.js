const express=require('express');
const colors = require('colors');
const bodyParser = require('body-parser')
const config=require('./config/config');
const app=express(),
      router=require('./router/exportRoutes');

app.use(bodyParser.json())
app.use('/',router);
app.use(express.static(__dirname + '/public'));

app.listen(config.port,function (resp) {
    console.log(('Server serving you on port '+config.port).bold.cyan)
    require('./connection');
})
    .on('error', function (e) {
    console.log('Couldnot start your server !!'.bold.red)
    console.log('Error : ',e.errno)
});
