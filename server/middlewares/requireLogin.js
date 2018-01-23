module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).send('You must be logged in to use this feature.');
    res.redirect('/');
  }

  next();
};
