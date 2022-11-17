const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)

/**
 * @description Add todo route
 * @method GET /
 */
route.get('/add_todo', services.add_todo)

/**
 * @description Update todo
 * @method GET /
 */
route.get('/update_todo', services.update_todo)

// API
route.post('/api/todo', controller.create)
route.get('/api/todo', controller.find)
route.put('/api/todo/:id', controller.update)
route.delete('/api/todo/:id', controller.delete)

module.exports = route