module.exports=function (Users,req,res) {
    Users.find(req.query.filter,function (err,data) {
        return res.send(err?err.message:data)
    })
}
