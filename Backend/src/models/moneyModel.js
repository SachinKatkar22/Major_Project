const mongoose = require('mongoose');

const moneySchema = new mongoose.Schema({
  year: { type: String, required: true },
  text: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MoneyHistory', moneySchema);