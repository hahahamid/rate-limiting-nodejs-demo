const rateLimit = require('express-rate-limit');
const rateLimitConfig = require('../config/rateLimit');

const apiLimiter = rateLimit(rateLimitConfig);

module.exports = apiLimiter;