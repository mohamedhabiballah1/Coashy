const express = require('express');
const dotenv = require('dotenv').config(); 
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
  
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connected to database");
    return sequelize.sync({ alter: true }); 
  })
  .then(() => {
    console.log("✅ Tables synced to database");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });