const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    time : { type : Date, default: Date.now }
})

const Todo1db = mongoose.model('tododb', schema)

module.exports = Todo1db