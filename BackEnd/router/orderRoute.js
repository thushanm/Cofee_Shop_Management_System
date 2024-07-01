const express = require("express")
const orderController = require("../controller/orderController")
const orderRoutes = express.Router()

orderRoutes.route('/').post(orderController.placeOrder)



module.exports=orderRoutes;