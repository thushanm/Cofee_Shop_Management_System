const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
const app = require('./app')
const punycode = require('punycode');

const localDB = process.env.DATABASE_LOCAL;
mongoose.connect(localDB).then(() =>console.log("MongoDB Data Base With Connected"));



const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App running on port ${port} ...... `)
})