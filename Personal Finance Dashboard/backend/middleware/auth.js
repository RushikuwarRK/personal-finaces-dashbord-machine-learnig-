const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.authenticate = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};
