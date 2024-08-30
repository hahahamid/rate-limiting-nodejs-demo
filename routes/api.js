const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const rateLimiter = require('../middleware/rateLimiter');

router.get('/message', rateLimiter, apiController.getMessage);

module.exports = router;