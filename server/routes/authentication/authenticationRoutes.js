const authenticationController = require('../../controllers/authenticationController');

module.exports = (router) => {
  router.get('/authentication/user', authenticationController.get_user);
  router.get('/authentication/logout', authenticationController.log_out);

  // Google OAuth
  router.get('/authentication/google', authenticationController.google_oauth);
  router.get('/authentication/google/callback', authenticationController.google_oauth_callback);

  // Facebook OAuth
  router.get('/authentication/facebook', authenticationController.facebook_oauth);
  router.get('/authentication/facebook/callback', authenticationController.facebook_oauth_callback);
};
