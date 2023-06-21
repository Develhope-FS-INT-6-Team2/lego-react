

const User = require('../models/user');
const path = require('path');
const Wishlist = require('../models/wishlist');
const fs = require('fs');
const mongoose = require('mongoose');

const registerUser = async (req, res) => {
  try {
    // Extract user data from request body
    const { username, password, email } = req.body;
    console.log('Received user data:', { username, password, email });

    // Create a new user in the database with the plain text password
    const newUser = await User.create({
      username,
      password,
      email,
      wishlist: [], // Initialize the wishlist as an empty array
    });

    // Set the userID in the session
    req.session.userID = newUser._id;

    console.log('User registered successfully:', newUser);

    // Return the registered user data in the response
    res.json({
      message: 'User registered successfully',
      user: {
        username: newUser.username,
        email: newUser.email,
        wishlist: newUser.wishlist, // Include the wishlist in the response
        basket: newUser.basket,
        latestOrders: newUser.latestOrders
      },
    });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

// Login user
async function loginUser(req, res) {
  try {
    // Extract login credentials from request body
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });
    const userID = user._id; // Assign the user's ID to the userID variable

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the password with the password in the database
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Set the userID in the session
    req.session.userID = userID;

    console.log('User logged in successfully:', user);
    res.json({
      message: 'User logged in successfully',
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        wishlist: user.wishlist,
        basket: user.basket,
        latestOrders: user.latestOrders
      },
    });
  } catch (error) {
    console.error('Error logging in user', error);
    res.status(500).json({ error: 'Failed to log in user' });
  }
}



const addProductToWishlist = async (req, res) => {
  try {
    const { userID, productID } = req.body;

    if (!userID) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userID) });
    
    if (!user) {
      console.log("User not found:", userID);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);

    // Load the products data from the JSON file
    const productsFilePath = path.join(__dirname, '../components/FeaturedSets/featured-sets-components/Products.json');
    const productsData = fs.readFileSync(productsFilePath, 'utf8');
    const products = JSON.parse(productsData);
    console.log("Products:", products);
    const product = products.sets.find((item) => item._id === parseInt(productID));
    
    if (!product) {
      console.log("Product not found:", productID);
      return res.status(404).json({ message: "Product not found" });
    }

    if (!product._id) {
      console.log("Product ID is missing:", product);
      return res.status(500).json({ message: "Product ID is missing" });
    }


    await user.save();

    console.log("Product added to wishlist:", product);

    return res.status(200).json({ message: "Product added to wishlist" });
  } catch (error) {
    console.log("Error adding product to wishlist:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


// Get wishlist by user ID
async function getWishlistByUserID(req, res) {
  try {
    // Extract user ID from request parameters
    let { userID } = req.params;

    userID = userID.replace(':', ''); // Remove the colon from the userID

    console.log("User ID:", userID);

    if (!userID) {
      return res.status(400).json({ message: "User ID is missing" });
    }

    const user = await User.findOne({ _id: userID });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);

    // Retrieve the wishlist from the user object
    const wishlist = user.wishlist;

    console.log('Wishlist retrieved successfully:', wishlist);
    res.json(wishlist);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ message: 'Failed to fetch wishlist' });
  }
}


module.exports = {
  registerUser,
  loginUser,
  getWishlistByUserID,
  addProductToWishlist
};