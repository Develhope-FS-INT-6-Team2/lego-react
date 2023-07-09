// Models/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: String, // change this from ObjectId to String
    ref: 'User',
    required: true,
  },
  cartItems: [{
    id: Number,
    image: String,
    title: String,
    price: Number,
    quantity: Number
  }],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
