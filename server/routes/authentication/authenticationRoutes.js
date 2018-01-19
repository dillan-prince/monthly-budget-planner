const authenticationController = require('../../controllers/authenticationController');

module.exports = (router) => {
  router.get('/authentication/google', authenticationController.google_oauth);
  router.get('/authentication/facebook', authenticationController.facebook_oauth);
};
