const mongoose = require('mongoose');

const Account = mongoose.model('accounts');

module.exports.get_accounts = async (req, res) => {
  try {
    const accounts = await Account.find(
      { _user: req.user._id },
      'name initialValue isDefault dateCreated events'
    ).exec();

    res.status(200).send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.insert_account = async (req, res) => {
  try {
    const { name, initialValue } = req.body;

    // Find the current default account
    const defaultAccount = await Account.findOne({ _user: req.user._id, isDefault: true });

    // If this user has no default account, make sure this new account is default
    if (!defaultAccount) {
      req.body.isDefault = true;
    } else {
      // If this new account should be default, mark the current default as not default
      if (req.body.isDefault) {
        defaultAccount.isDefault = false;
        await defaultAccount.save();
      }
    }

    await new Account({
      name,
      initialValue,
      dateCreated: new Date(),
      isDefault: req.body.isDefault,
      events: [],
      _user: req.user._id
    }).save();

    const accounts = await Account.find(
      { _user: req.user._id },
      'name initialValue dateCreated isDefault events'
    ).exec();

    res.status(200).send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.update_account = async (req, res) => {
  try {
    const { _id, name, initialValue, isDefault } = req.body;

    // Mark the old default account as no longer default
    if (isDefault) {
      const defaultAccount = await Account.findOne({ _user: req.user._id, isDefault: true });
      if (defaultAccount) {
        defaultAccount.isDefault = false;
        await defaultAccount.save();
      }
    }

    // Find the account to be updated
    const account = await Account.findById(_id);

    // Update the account values
    account.name = name;
    account.initialValue = initialValue;
    account.isDefault = isDefault;
    await account.save();

    // Retreive all accounts for this user
    const accounts = await Account.find(
      { _user: req.user._id },
      'name initialValue dateCreated isDefault events'
    ).exec();

    res.status(200).send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
};
