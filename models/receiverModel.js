const mongoose = require('mongoose');

const receiverSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
});

module.exports = mongoose.model('Receiver', receiverSchema);