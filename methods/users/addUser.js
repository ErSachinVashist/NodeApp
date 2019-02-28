module.exports=function (Users,req,res) {
    Users.create(req.body,function (err,data) {
       return res.send(err?err.message:data)
    })
}
