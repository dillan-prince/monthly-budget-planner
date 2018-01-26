const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: {
    type: String,
    maxlength: [30, 'Name must be 30 characters or fewer.']
  },
  value: {
    type: Number,
    validate: [
      (v) => {
        return v != 0;
      },
      'Value cannot be zero.'
    ]
  },
  date: {
    type: Number,
    min: [1, 'Date must be between 1 and 31.'],
    max: [31, 'Date must be between 1 and 31.'],
    validate: [
      (v) => {
        return v % 1 === 0;
      },
      'Date must be a whole number'
    ]
  },
  recurring: Boolean,
  type: { type: String, enum: ['income', 'bill'] },
  _account: { type: Schema.Types.ObjectId, ref: 'Account' }
});

mongoose.model('events', eventSchema);
