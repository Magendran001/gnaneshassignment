const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'The name of the user is required.']
  },
  lastName: {
    type: String,
    required: [true, 'The last name of the user is required.']
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'The pasword of the user is required.']
  },

  bloodType: {
    type: String,
    enum: ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'],
    required: [true, 'Blood type is required.']
  },

  City: {
    type: String,
    required: [true, 'The last name of the city is required.']
  },
  State: {
    type: String,
    required: [true, 'The last name of the State is required.']
  },
  PhoneNumber: {
    type: Number,
    required: true

  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  locationLat: {
    type: String,
    required: false
  },
  locationlong: {
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: false
  },
  updated_at: {
    type: Date,
    required: Date.now(),
    required: false
  }
});

module.exports = mongoose.model('User', userSchema);