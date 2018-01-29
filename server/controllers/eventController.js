const mongoose = require('mongoose');

const Event = mongoose.model('events');
const Account = mongoose.model('accounts');

module.exports.create_event = async (req, res) => {
  try {
    const { name, value, date, recurring, type, accountId } = req.body;

    const newEvent = await new Event({
      name,
      value,
      date,
      recurring,
      type,
      _account: accountId
    }).save();

    const account = await Account.findById(accountId);
    account.events.push(newEvent);

    const savedAccount = await account.save();

    res.status(200).send(savedAccount);
  } catch (error) {
    res.status(500).send(error);
  }
};
