const mongoose = require('mongoose');
const { Schema } = mongoose;

const BillSchema = require('./Bill');

const accountSchema = new Schema({
  initialValue: Number,
  dateCreated: Date,
  bills: [BillSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('accounts', accountSchema);
