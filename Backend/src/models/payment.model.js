const mongoose = require("mongoose");

const manualPaymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageurl: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ManualPayment", manualPaymentSchema);