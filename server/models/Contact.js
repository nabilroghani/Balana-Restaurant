const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please enter your phone number'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: '',
    },
    travelerType: {
      type: String,
      enum: ['Traveler (Chitral/Kumrat)', 'Local Visitor', 'Family Group', 'Other'],
      default: 'Traveler (Chitral/Kumrat)',
    },
    message: {
      type: String,
      required: [true, 'Please enter your message'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
