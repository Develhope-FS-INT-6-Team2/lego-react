const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: String,
  userId: String,
  products: [String],
  productCounts: [Number],
  date: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;