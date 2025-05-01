const mongoose = require('mongoose');

// Define the Employee Schema
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 20,
    max: 70,
  },
  dateOfJoining: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    enum: ['Employee', 'Manager', 'Director', 'VP'], // Only these values are allowed
    required: true,
  },
  department: {
    type: String,
    enum: ['IT', 'Marketing', 'HR', 'Engineering'], // Only these values are allowed
    required: true,
  },
  employeeType: {
    type: String,
    enum: ['FullTime', 'PartTime', 'Contract', 'Seasonal'], // Only these values are allowed
    required: true,
  },
  currentStatus: {
    type: Boolean,
    default: true, // Default is "true" indicating the employee is active
  },
});

// Export the Employee model
module.exports = mongoose.model('Employee', employeeSchema);
