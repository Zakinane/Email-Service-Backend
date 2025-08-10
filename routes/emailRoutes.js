const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/api/send', emailController.send);

module.exports = router;