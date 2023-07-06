const express = require('express');
const router = express.Router();


const session = require('express-session');



const {
  registerUser,
  loginUser,
  getWishlistByUserID,
  addProductToWishlist
} = require('../controllers/userController');

router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Register a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get wishlist by user ID
router.get('/wishlist/:email', getWishlistByUserID);

// Add a product to the wishlist
router.post('/wishlist/add', addProductToWishlist);

module.exports = router;