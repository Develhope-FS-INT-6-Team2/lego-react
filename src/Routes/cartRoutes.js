// Routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add an item to the cart
router.post('/cart/add', cartController.addItemToCart);

// Remove an item from the cart
router.delete('/cart/:itemId', cartController.removeItemFromCart);

module.exports = router;
