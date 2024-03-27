// Data.js

const mongoose = require('mongoose');

// Define data schema
const dataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  key: { type: String, required: true },
  value: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create Data model
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
