const passport = require('passport');

module.exports.google_oauth = passport.authenticate('google', { scope: ['profile', 'email'] });
module.exports.google_oauth_callback = passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
});

module.exports.facebook_oauth = passport.authenticate('facebook');
module.exports.facebook_oauth_callback = passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
});

module.exports.get_user = (req, res) => {
  res.send(req.user);
};

module.exports.log_out = (req, res) => {
  req.logout();
  res.redirect('/');
};
