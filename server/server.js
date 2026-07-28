const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB (gracefully handles offline mode)
connectDB();

// API Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/contact', require('./routes/contact'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    restaurant: 'Balana Inn Restaurant',
    location: 'Rabat, Timergara (Dir Lower), Pakistan',
    route: 'Grand Road / N-45 (Peshawar <-> Chitral / Kumrat)',
    timestamp: new Date(),
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`Balana Inn Restaurant Server running on port ${PORT}`);
  console.log(`Location: Rabat, Timergara (Dir Lower), Pakistan`);
  console.log(`API Health: http://localhost:${PORT}/api/health`);
  console.log(`Products Endpoint: http://localhost:${PORT}/api/products`);
  console.log(`====================================================`);
});
