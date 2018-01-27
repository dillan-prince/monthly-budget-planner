const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = require('./Event');

const accountSchema = new Schema({
  name: {
    type: String,
    maxlength: [25, 'Name must be 25 characters or fewer.']
  },
  initialValue: Number,
  dateCreated: Date,
  isDefault: { type: Boolean, default: false },
  events: [EventSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('accounts', accountSchema);
