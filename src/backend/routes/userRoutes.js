const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming User model exists
const authMiddleware = require('../middleware/authMiddleware');

// Route: GET /api/users/:id
// Description: Get user by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the requested user ID matches the authenticated user
    if (userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Omit sensitive fields before sending response
    const { password, createdAt, updatedAt, ...userData } = user.toObject();

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route: PUT /api/users/:id
// Description: Update user profile
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the requested user ID matches the authenticated user
    if (userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Update user profile
    await User.findByIdAndUpdate(userId, req.body);

    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
