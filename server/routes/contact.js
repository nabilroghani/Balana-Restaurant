const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { getIsConnected } = require('../config/db');

// In-memory array fallback if MongoDB is not running locally
const memoryContactSubmissions = [];

// @route   POST /api/contact
// @desc    Submit traveler / visitor inquiry
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, travelerType, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, phone number, and message.',
      });
    }

    const payload = {
      name,
      phone,
      email: email || '',
      travelerType: travelerType || 'Traveler (Chitral/Kumrat)',
      message,
      createdAt: new Date(),
    };

    if (getIsConnected()) {
      const contactDoc = await Contact.create(payload);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received. Balana Inn management will contact you shortly.',
        data: contactDoc,
      });
    }

    memoryContactSubmissions.push(payload);
    console.log('In-memory Contact Submission:', payload);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received (Sample mode). Balana Inn looks forward to welcoming you.',
      data: payload,
    });
  } catch (error) {
    console.error('Contact submit error:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error processing contact request.',
      error: error.message,
    });
  }
});

// @route   GET /api/contact (for testing/admin overview)
router.get('/', async (req, res) => {
  try {
    if (getIsConnected()) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: contacts.length, data: contacts });
    }
    return res.json({
      success: true,
      count: memoryContactSubmissions.length,
      mode: 'sample-data',
      data: memoryContactSubmissions,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
