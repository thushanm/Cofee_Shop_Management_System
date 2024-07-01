
const mongoose =  require('mongoose')
mongoose.set('strictQuery', false);

const adminSchema = new mongoose.Schema({
    adName:{type: String, required: true, minlength: 2, trim: true},
    adPwd:{type: String, required: true, minlength: 2}

})
const userSchema = new mongoose.Schema({
    uName: { type: String, required: true, minlength: 2, trim: true },
    pNumber: { type: Number, required: false,maxLength:15,minLength:10 },
    role: { type: String, required: false, minlength: 2 },
    pass: { type: String, required: false, minlength: 2 },

});

const supplierSchema = new mongoose.Schema({
    sName: { type: String, required: true, minlength: 2, trim: true },
    address: { type: String, required: true, minlength: 2, trim: true },
    pNumber: { type: Number, required: false },
});

const itemSchema = new mongoose.Schema({
    itName: { type: String, required: true, minlength: 2, trim: true },
    qty: { type: Number, required: true, min: 1, max: 9999 },
    itImg: { type: String, required: false },
    supplierSchema: { type: mongoose.Schema.Types.ObjectId, ref: 'supplierSchema' },
});

const orderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    payType: { type: String,required:true},
    amount: { type: Number,required:true }

});
const orderDetailsSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' },
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'item' },
    qty: { type: Number, required: true, min: 1, max: 9999 }
});
const paymentSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' },
    amount: { type: Number, required: false },
});
const admin = mongoose.model('admin',adminSchema)
const user = mongoose.model('user', userSchema);
const supplier = mongoose.model('supplier', supplierSchema);
const item = mongoose.model('item', itemSchema);
const order = mongoose.model('order', orderSchema);
const payment = mongoose.model('payment', paymentSchema);
const orderDetails = mongoose.model('orderDetails', orderDetailsSchema);


console.log("I am Works database")

module.exports = {admin,user, supplier, item, order, payment, orderDetails };
