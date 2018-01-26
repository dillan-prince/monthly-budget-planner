const mongoose = require('mongoose');

const Account = mongoose.model('accounts');

module.exports.get_accounts = async (req, res) => {
  try {
    const accounts = await Account.find(
      { _user: req.user._id },
      'name initialValue dateCreated events'
    ).exec();

    res.status(200).send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
};
