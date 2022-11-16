const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time : { type : Date, default: Date.now }
})

const Todo1db = mongoose.model('tododb', schema)

module.exports = Todo1db