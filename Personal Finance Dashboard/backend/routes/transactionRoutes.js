const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const { authenticate } = require('../middleware/auth');

// Get all transactions
router.get('/', authenticate, async (req, res) => {
  const transactions = await Transaction.find({ user: req.user.id });
  res.json(transactions);
});

// Add new transaction
router.post('/', authenticate, async (req, res) => {
  const { category, type, amount } = req.body;
  const newTransaction = new Transaction({
    category,
    type,
    amount,
    user: req.user.id,
  });
  await newTransaction.save();
  res.status(201).json(newTransaction);
});

// Update transaction
router.put('/:id', authenticate, async (req, res) => {
  const { category, type, amount } = req.body;
  const transaction = await Transaction.findByIdAndUpdate(req.params.id, {
    category,
    type,
    amount,
  });
  res.json(transaction);
});

// Delete transaction
router.delete('/:id', authenticate, async (req, res) => {
  const transaction = await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: 'Transaction deleted' });
});

module.exports = router;
