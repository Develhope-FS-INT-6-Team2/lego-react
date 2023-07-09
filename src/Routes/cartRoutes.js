// Routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Get the whole cart
router.get('/cart/:userId', cartController.getCartByUserId);


// Update an user's cart
router.put('/cart/:userId', (req, res, next) => {
    console.log("req.params:", req.params);
    console.log("req.body:", req.body);
    next();
  }, cartController.updateUserCart);
  

module.exports = router;
