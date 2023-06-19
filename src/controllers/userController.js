

const User = require('../models/user');
const Wishlist = require('../models/wishlist');

// Register a new user
const registerUser = async (req, res) => {
    try {
      // Extract user data from request body
      const { username, password, email } = req.body;
  
      // Create a new user in the database
      const newUser = await User.create({ username, password, email });
  
      console.log('User registered successfully:', newUser);
      res.json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user', error);
      res.status(500).json({ error: 'Failed to register user' });
    }
  };

// User login
async function loginUser(req, res) {
  try {
    // Extract login credentials from request body
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    // Check if user exists and password is correct
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    console.log('User logged in successfully:', user);
    res.json({ message: 'User logged in successfully' });
  } catch (error) {
    console.error('Error logging in user', error);
    res.status(500).json({ error: 'Failed to log in user' });
  }
}

// Get wishlist by user ID
async function getWishlistByUserID(req, res) {
  try {
    // Extract user ID from request parameters
    const { userID } = req.params;

    // Fetch wishlist for the given user ID from the database
    const wishlist = await Wishlist.find({ userID });

    console.log('Wishlist retrieved successfully:', wishlist);
    res.json(wishlist);
  } catch (error) {
    console.error('Error fetching wishlist', error);
    res.status(500).json({ error: 'Failed to fetch wishlist' });
  }
}

// Add a product to the wishlist
async function addProductToWishlist(req, res) {
  try {
    // Extract product and user ID from request body
    const { productID, userID } = req.body;

    // Add the product to the wishlist in the database
    // Implement your logic here

    console.log('Product added to wishlist successfully');
    res.json({ message: 'Product added to wishlist successfully' });
  } catch (error) {
    console.error('Error adding product to wishlist', error);
    res.status(500).json({ error: 'Failed to add product to wishlist' });
  }
}

module.exports = {
  registerUser,
  loginUser,
  getWishlistByUserID,
  addProductToWishlist
};