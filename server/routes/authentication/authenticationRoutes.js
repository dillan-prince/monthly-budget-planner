const authenticationController = require('../../controllers/authenticationController');

module.exports = (router) => {
  router.get('/authentication/user', authenticationController.get_user);
  router.get('/authentication/logout', authenticationController.log_out);
  router.get('/authentication/google', authenticationController.google_oauth);
  router.get(
    '/authentication/google/callback',
    authenticationController.google_oauth_callback,
    authenticationController.oauth_redirect
  );
  router.get('/authentication/facebook', authenticationController.facebook_oauth);
};
