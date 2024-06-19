const express = require('express')
const itController = require('../controller/itemController')
const itRoute = express.Router();

itRoute.route('/').post(itController.addItem)
itRoute.route('/getAll').get(itController.getAllItem)
itRoute.route('/').get(itController.getItem)
itRoute.route('/').delete(itController.deleteItem)
itRoute.route('/').put(itController.updateItem)

module.exports=itRoute;

