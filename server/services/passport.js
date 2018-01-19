const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/authentication/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ id: profile.id, authType: 'google' });

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new User({ id: profile.id, authType: 'google' }).save();
      done(null, newUser);
    }
  )
);
