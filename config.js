let env = require('node-env');
let config = {
    local: {
        dbHost: 'localhost',
        dbPort: 27017,
        database : 'demoapp',
        env:'local',
        port:8080,
    }
};
module.exports=config['local'];
