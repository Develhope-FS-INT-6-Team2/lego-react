const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add an order
router.get('/products',productController.getAllProducts);

// Cancel an order
router.get('/:productId', productController.getProductById);

module.exports = router;