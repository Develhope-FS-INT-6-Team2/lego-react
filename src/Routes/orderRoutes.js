const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Add an order
router.post('/orders', orderController.addOrder);

// Cancel an order
router.delete('/orders/:orderId', orderController.cancelOrder);

module.exports = router;