const express =require('express')
const userController = require('../controller/userController')

console.log("Route Work")
const userRoute = express.Router();

userRoute.route('/').post(userController.addUser)
userRoute.route('/').get(userController.getAllUsers)
userRoute.route(`/:id`).get(userController.getUser)
userRoute.route(`/:id`).put(userController.getUser)
userRoute.route(`/:id`).delete(userController.deleteUser)

module.exports=userRoute;