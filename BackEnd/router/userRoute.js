const express =require('express')
const userController = require('../controller/userController')

console.log("Route Work")
const userRoute = express.Router();

userRoute.route('/').post(userController.addUser)
userRoute.route('/').get(userController.getAllUsers)

module.exports=userRoute;