const express = require('express');

// Import all routers
const authenticationRoutes = require('./authentication/authenticationRoutes');

// Create a new router
const router = express.Router();

// Add all routes to router
authenticationRoutes(router);

// Export router
module.exports = router;
