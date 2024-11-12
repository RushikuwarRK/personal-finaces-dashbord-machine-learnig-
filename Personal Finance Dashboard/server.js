const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000; // You can change the port if needed

// Body parser middleware to handle POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (if needed, for frontend assets like HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const authRoutes = require('./backend/routes/authRoutes');  // Adjust based on your structure
const transactionRoutes = require('./backend/routes/transactionRoutes');  // Adjust based on your structure

// Use routes in the app
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

// Test route to check if server is working
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
