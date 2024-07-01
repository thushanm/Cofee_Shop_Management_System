const { order, orderDetails, item, payment } = require("../config/schema");

exports.placeOrder = async (req, res) => {
    try {

        const {  payType, amount, orderDetails: orderDetailsArray } = req.body;


        const orderObj = {

            payType: payType,
            amount: amount
        };

        console.log("orderObj", orderObj);


        const createdOrder = await order.create(orderObj);


        for (const detail of orderDetailsArray) {
            const itemId = detail.item;
            const itemQty = detail.qty;

            const itemDoc = await item.findById(itemId);
            if (!itemDoc) {

                await order.findByIdAndDelete(createdOrder._id);
                return res.status(404).json({
                    message: `Item not found: ${itemId}`
                });
            }


            if (itemDoc.qty < itemQty) {

                await order.findByIdAndDelete(createdOrder._id);
                return res.status(404).json({
                    message: `Low stock for item: ${itemId}. Please restock.`
                });
            }


            itemDoc.qty -= itemQty;
            await itemDoc.save();


            const orderDetailsObj = {
                order: createdOrder._id,
                item: itemId,
                qty: itemQty
            };

            await orderDetails.create(orderDetailsObj);
        }


        const paymentObj = {
            order: createdOrder._id,
            date: createdOrder.date,
            amount: createdOrder.amount
        };
        await payment.create(paymentObj);


        res.status(201).json({
            status: "Order created successfully",
            data: {
                order: createdOrder,
            },
        });
    } catch (err) {
        console.error("Error occurred while creating order:", err);
        res.status(500).json({
            status: "Failed to create order",
            message: err.message,
        });
    }
};
