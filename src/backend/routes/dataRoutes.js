const express = require('express');
const router = express.Router();
const Data = require('../models/Data'); // Assuming Data model exists
const authMiddleware = require('../middleware/authMiddleware');

// Route: GET /api/data
// Description: Get all data objects
router.get('/', authMiddleware, async (req, res) => {
  try {
    // Retrieve all data objects from the database
    const dataObjects = await Data.find({ userId: req.user.id });

    res.status(200).json(dataObjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route: POST /api/data
// Description: Create a new data object
router.post('/', authMiddleware, async (req, res) => {
  try {
    const newData = new Data({
      userId: req.user.id,
      ...req.body
    });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route: PUT /api/data/:id
// Description: Update a data object
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const dataId = req.params.id;

    const updatedData = await Data.findByIdAndUpdate(dataId, req.body, { new: true });

    res.status(200).json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route: DELETE /api/data/:id
// Description: Delete a data object
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const dataId = req.params.id;

    await Data.findByIdAndDelete(dataId);

    res.status(200).json({ message: 'Data object deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
