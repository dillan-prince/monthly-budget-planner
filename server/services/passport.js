const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const existingUser = await User.findOne({ id: id });
  done(null, existingUser);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK_CLIENT_ID,
      clientSecret: keys.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/api/authentication/facebook/callback',
      profileFields: ['id', 'name']
    },
    (accessToken, refreshToke, profile, done) => authenticationCallback(profile, done, 'facebook')
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/authentication/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => authenticationCallback(profile, done, 'google')
  )
);

async function authenticationCallback(profile, done, authType) {
  const existingUser = await User.findOne({ id: profile.id, authType });

  if (existingUser) {
    return done(null, existingUser);
  }

  const newUser = await new User({
    id: profile.id,
    authType,
    name: profile.name.givenName
  }).save();

  done(null, newUser);
}
