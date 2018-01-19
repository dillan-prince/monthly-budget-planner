const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  authType: String
});

mongoose.model('users', userSchema);
