const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  wishlist: [{ id: String, date: String }],
  basket: [String],
  latestOrders: [String],
});

const User = mongoose.model('User', userSchema);

module.exports = User;