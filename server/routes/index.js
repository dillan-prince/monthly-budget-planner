const express = require('express');

// Import all routers
const accountRoutes = require('./accounts/accountRoutes');
const authenticationRoutes = require('./authentication/authenticationRoutes');
const eventRoutes = require('./events/eventRoutes');

// Create a new router
const router = express.Router();

// Add all routes to router
accountRoutes(router);
authenticationRoutes(router);
eventRoutes(router);

// Export router
module.exports = router;
