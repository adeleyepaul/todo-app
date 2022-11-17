var Todo1db = require('../model/model')

// create and save new todo
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"})
    }

    // new todo
    const todo = new Todo1db({
        title:req.body.title,
        description:req.body.description
    })

    // save data
    todo
        .save(todo)
        .then(data=>{
            // res.send(data)
            res.redirect('/add_todo')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"some error occurred while creating operation"
            })
        })
}

// retrieve and return new todo/retrieve single tod
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id
        
        Todo1db.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "not found"})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:"error retrieving record" + id})
            })
    }else{
        Todo1db.find()
            .then(list=>{
                res.send(list)
            })
        .catch(err=>{ 
            res.status(500).send({message:err.message || "Error displaying data"})
        })
    }
}


// update a new identified specified by todo id
exports.update = (req,res)=>{
    if(!req.body){
        return res 
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Todo1db.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `cannot update record with ${id}. Maybe record is not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "error update record"})
        })
}

// delete a todo \ specified by todo id
exports.delete = (req,res)=>{
    const id = req.params.id

    Todo1db.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `cannot delete record with ${id}. Maybe record is not found`})
            }else{
                res.send({
                    message: "user was deleted successfully"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({message: "error update record"})
        })
}