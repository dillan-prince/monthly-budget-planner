const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = require('./Event');

const accountSchema = new Schema({
  initialValue: Number,
  dateCreated: Date,
  events: [EventSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('accounts', accountSchema);
