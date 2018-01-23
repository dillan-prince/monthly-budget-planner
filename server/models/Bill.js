const mongoose = require('mongoose');
const { Schema } = mongoose;

const billSchema = new Schema({
  value: {
    type: Number,
    validate: [
      (v) => {
        return v != 0;
      },
      'Value cannot be zero.'
    ]
  },
  date: { type: Number, min: 1, max: 31 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('users', billSchema);
