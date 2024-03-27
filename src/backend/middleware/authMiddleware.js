// authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = { id: decoded.id }; // Attach user ID to request object
    next();
  });
};

// Middleware to protect routes requiring authentication
exports.authenticate = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user; // Attach user object to request object
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
