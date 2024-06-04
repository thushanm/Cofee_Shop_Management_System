const express = require('express')
const supController = require('../controller/supplierController')

const supRoute = express.Router();

supRoute.route('/').post(supController.addSupplier)
supRoute.route('/').get(supController.getAllSuppliers)
supRoute.route('/:id').get(supController.getSupplier)
supRoute.route('/:id').put(supController.updateSupplier)
supRoute.route('/:id').delete(supController.deleteSupplier)



module.exports=supRoute;