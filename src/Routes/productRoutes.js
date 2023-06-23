const express = require('express');
const router = express.Router();
const orderController = require('../controllers/productController');

// Add an order
router.get('/product',productController.getAllProducts);

// Cancel an order
router.get('/product/:productId', productController.getProductById);

module.exports = router;