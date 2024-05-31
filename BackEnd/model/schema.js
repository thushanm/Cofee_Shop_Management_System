
const mongoose =  require('mongoose')
mongoose.set('strictQuery', false);
const userSchema = new mongoose.Schema({
    uName: { type: String, required: true, minlength: 2, trim: true },
    pNumber: { type: Number, required: false },
    role: { type: String, required: true, minlength: 2 },
    pass: { type: String, required: true, minlength: 2 },
});

const supplierSchema = new mongoose.Schema({
    sName: { type: String, required: true, minlength: 2, trim: true },
    address: { type: String, required: true, minlength: 2, trim: true },
    pNumber: { type: Number, required: false },
});

const itemSchema = new mongoose.Schema({
    itName: { type: String, required: true, minlength: 2, trim: true },
    qty: { type: Number, required: true, min: 1, max: 9999 },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
});

const orderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    qty: { type: Number, required: true, min: 1, max: 9999 },
    // Add reference to items through a separate order_items schema
});

const paymentSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    amount: { type: Number, required: true },
});

const orderDetailsSchema = new mongoose.Schema({
    payType: { type: String, enum: ['CARD', 'CASH'], required: true },
    amount: { type: Number, required: true },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }, // Reference the order
});

const User = mongoose.model('User', userSchema);
const Supplier = mongoose.model('Supplier', supplierSchema);
const Item = mongoose.model('Item', itemSchema);
const Order = mongoose.model('Order', orderSchema);
const Payment = mongoose.model('Payment', paymentSchema);
const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);

module.exports = { User, Supplier, Item, Order, Payment, OrderDetails };
