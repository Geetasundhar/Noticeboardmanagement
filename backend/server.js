const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const noticeRoutes = require('./routes/noticeRoutes');
const authRoutes = require('./routes/authRoutes'); // Assuming you've set up auth routes

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes (signup, login)
app.use('/api/notices', noticeRoutes);  // Notice routes


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
