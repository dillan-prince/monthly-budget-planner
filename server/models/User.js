const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  authType: String,
  name: String
});

mongoose.model('users', userSchema);
