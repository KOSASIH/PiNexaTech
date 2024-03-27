// dataController.js

const Data = require('../models/Data');

// Get all data objects
exports.getAllData = async (req, res) => {
  try {
    // Find all data objects
    const data = await Data.find({ userId: req.user.id });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new data object
exports.createData = async (req, res) => {
  try {
    const { key, value } = req.body;

    // Create new data object
    const newData = new Data({
      userId: req.user.id,
      key,
      value,
    });

    // Save new data object to the database
    await newData.save();
    res.status(201).json({ message: 'Data object created successfully', data: newData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update an existing data object
exports.updateData = async (req, res) => {
  try {
    const dataId = req.params.id;

    // Find data object by ID
    const existingData = await Data.findById(dataId);
    if (!existingData) {
      return res.status(404).json({ message: 'Data object not found' });
    }

    // Check if the requested data object belongs to the authenticated user
    if (existingData.userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Update data object
    existingData.key = req.body.key || existingData.key;
    existingData.value = req.body.value || existingData.value;
    await existingData.save();

    res.status(200).json({ message: 'Data object updated successfully', data: existingData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a data object
exports.deleteData = async (req, res) => {
  try {
    const dataId = req.params.id;

    // Find data object by ID
    const existingData = await Data.findById(dataId);
    if (!existingData) {
      return res.status(404).json({ message: 'Data object not found' });
    }

    // Check if the requested data object belongs to the authenticated user
    if (existingData.userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Delete data object from the database
    await existingData.remove();

    res.status(200).json({ message: 'Data object deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
