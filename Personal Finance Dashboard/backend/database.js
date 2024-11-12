const mongoose = require('mongoose');

module.exports.connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/personal_finance_dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB connected');
  }).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });
};
