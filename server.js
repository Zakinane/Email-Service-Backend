const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes')
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
connectDB();

// Routes
app.use('/', emailRoutes);


// Erreur 404
app.use((req, res) => {
  res.status(404).send('Page introuvable dans la bibliothèque !');
});

app.listen(PORT, () => {
  console.log(`Email Service open on port ${PORT}`);
});