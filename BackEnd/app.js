

const punycode = require('punycode');
const shecm = require('./config/schema')
const express = require('express');
const userRoute = require('./router/userRoute')
const supRoute = require('./router/supplierRoute')
const itRoute = require('./router/itemRoute')
const orderRoute = require('./router/orderRoute')

const app=express()
app.use(express.json())

app.use('/api/v1/user',userRoute)
app.use('/api/v1/sup',supRoute)
app.use('/api/v1/item',itRoute)
app.use('/api/v1/order',orderRoute)

module.exports = app;