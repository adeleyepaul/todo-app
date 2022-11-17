const axios = require('axios')

exports.homeRoutes = (req,res)=>{
    // Make a get request to /api/todo
    axios.get('http://localhost:4500/api/todo')
        .then(function(response){
            console.log(response.data)
            res.render('index', {lists: response.data})
        })
        .catch(err=>{
            res.send(err)
        })
    // res.render('index', {data: "New Data"})
}

exports.add_todo = (req,res)=>{
    res.render('add_todo')
}


exports.update_todo = (req, res) =>{
    axios.get('http://localhost:4500/api/todo', {params:{id:req.query.id}})
        .then(function(userdata){
            res.render('update_todo', {lists:userdata.data})
        })
            .catch(err=>{
                res.send(err)
            })
}