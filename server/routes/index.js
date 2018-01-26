const express = require('express');

// Import all routers
const authenticationRoutes = require('./authentication/authenticationRoutes');
const eventRoutes = require('./events/eventRoutes');

// Create a new router
const router = express.Router();

// Add all routes to router
authenticationRoutes(router);
eventRoutes(router);

// Export router
module.exports = router;
