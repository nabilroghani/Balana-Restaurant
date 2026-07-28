const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide dish name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide dish description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide dish price'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: [
        'BBQ & Karahi',
        'Rice & Biryani',
        'Fast Food',
        'Desi Breakfast',
        'Drinks & Desserts',
      ],
    },
    imageUrl: {
      type: String,
      default: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    prepTime: {
      type: String,
      default: '20-25 mins',
    },
    servingSize: {
      type: String,
      default: '2-3 Persons',
    },
    isSpicy: {
      type: Boolean,
      default: false,
    },
    isSpecial: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
