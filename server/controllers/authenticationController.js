module.exports.google_oauth = (req, res) => {
  res.send({
    controller: 'authentication',
    method: 'google_oauth',
    status: 'not implemented'
  });
};

module.exports.facebook_oauth = (req, res) => {
  res.send({
    controller: 'authentication',
    method: 'facebook_oauth',
    status: 'not implemented'
  });
};
