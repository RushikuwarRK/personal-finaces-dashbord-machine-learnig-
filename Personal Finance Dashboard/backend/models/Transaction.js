const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  category: String,
  type: String,
  amount: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
