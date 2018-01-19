const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const routes = require('./routes/index');
const keys = require('./config/keys');

// database objects
require('./models/User');
mongoose.connect(keys.MONGO_CONNECTION_STRING);

// services
require('./services/passport');

const app = express();

// middlewares
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_SESSION_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// route handlers
app.use('/api', routes);

// set up express for production
if (process.env.NODE_ENV === 'production') {
  // express will serve production assets like main.js
  app.use(express.static('client/build'));

  // express will serve the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server listening on port ${PORT}.`);
});
