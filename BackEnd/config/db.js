
const mongoose =  require('mongoose')
const punycode = require('punycode');
const mongoURI= "mongodb://0.0.0.0:27017/jtm_coffee"
mongoose.connect(mongoURI, {useNewUrlparser: true, useUnifiedTopology: true}).then( () =>{
    mongoose.set('strictQuery', false);;
    // o
    console.log("Mongo db Connected")
})

module.exports = mongoose.connection;



