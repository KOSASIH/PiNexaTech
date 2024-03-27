const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const dataRoutes = require('./dataRoutes');

const router = express.Router();

// Mount authentication routes
router.use('/auth', authRoutes);

// Mount user routes
router.use('/users', userRoutes);

// Mount data routes
router.use('/data', dataRoutes);

module.exports = router;
