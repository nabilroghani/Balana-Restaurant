const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const seedProducts = require('./data/seedData');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/balana_inn';

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    await Product.deleteMany({});
    console.log('Existing products cleared.');

    const cleanProducts = seedProducts.map(({ id, ...rest }) => rest);
    await Product.insertMany(cleanProducts);
    console.log(`Successfully seeded ${cleanProducts.length} menu items into Balana Inn database.`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDB();
