let getUsers=require('../methods/users/getUsers');
let addUser=require('../methods/users/addUser');

module.exports=[
    {type:'get',route:'getUsers',method:getUsers},
    {type:'post',route:'adduser',method:addUser},
];
