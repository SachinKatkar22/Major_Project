const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    orderId: { type: String, required: true },
    paymentId: { type: String, required: true },
    year: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", paymentSchema);