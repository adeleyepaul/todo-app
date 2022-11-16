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
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"some error occured while creating operation"
            })
        })
}

// retrieve and return new todo/retrieve single tod
exports.find = (req,res)=>{
    
}


// update a new identified specified by todo id
exports.update = (req,res)=>{

}


// delete a todo \ specified by todo id
exports.delete = (req,res)=>{
    
}