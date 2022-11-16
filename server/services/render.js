exports.homeRoutes = (req,res)=>{
    res.render('index')
}

exports.add_todo = (req,res)=>{
    res.render('add_todo')
}

exports.update_todo = (req, res)=>{
    res.render('update_todo')
}