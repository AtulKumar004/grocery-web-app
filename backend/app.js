// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const { login } = require('./controllers/authController');

dotenv.config();
connectDB();

const app = express();



// Middleware
app.use(express.json()); // For parsing JSON requests
app.use('/api/auth', authRoutes);

// app.get("/login" , login)

// Routes
// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
