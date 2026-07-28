const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const seedProducts = require('../data/seedData');
const { getIsConnected } = require('../config/db');

// @route   GET /api/products
// @desc    Get all products or filter by category / featured status
router.get('/', async (req, res) => {
  try {
    const { category, featured, search } = req.query;

    if (getIsConnected()) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }
      if (featured === 'true') {
        query.featured = true;
      }
      if (search) {
        query.name = { $regex: search, $options: 'i' };
      }
      const products = await Product.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: products.length, data: products });
    }

    // Fallback mode if DB is offline
    let filtered = [...seedProducts];
    if (category && category !== 'All') {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (featured === 'true') {
      filtered = filtered.filter((p) => p.featured === true);
    }
    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return res.json({
      success: true,
      count: filtered.length,
      mode: 'sample-data',
      data: filtered,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// @route   GET /api/products/:id
// @desc    Get single product details
router.get('/:id', async (req, res) => {
  try {
    if (getIsConnected()) {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Dish not found' });
      }
      return res.json({ success: true, data: product });
    }

    // Fallback mode
    const product = seedProducts.find((p) => p.id === req.params.id || p._id === req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Dish not found in sample data' });
    }
    return res.json({ success: true, mode: 'sample-data', data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// @route   POST /api/products
// @desc    Add new product (Admin route)
router.post('/', async (req, res) => {
  try {
    if (!getIsConnected()) {
      return res.status(400).json({
        success: false,
        message: 'Database connection required to add new dishes.',
      });
    }
    const newProduct = await Product.create(req.body);
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
