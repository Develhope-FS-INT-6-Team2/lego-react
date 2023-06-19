const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getWishlistByUserID,
  addProductToWishlist
} = require('../controllers/userController');

// Register a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get wishlist by user ID
router.get('/wishlist/:userID', getWishlistByUserID);

// Add a product to the wishlist
router.post('/wishlist/add', addProductToWishlist);

module.exports = router;