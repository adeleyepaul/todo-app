const express = require('express')
const route = express.Router()

const services = require('../services/render')

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

module.exports = route