

const User = require('../models/user');
const Wishlist = require('../models/wishlist');


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
    });

    console.log('User registered successfully:', newUser);

    // Return the registered user data in the response
    res.json({
      message: 'User registered successfully',
      user: {
        username: newUser.username,
        email: newUser.email,
        wishlist: newUser.wishlist,
        basket: newUser.basket,
        latestOrders: newUser.latestOrders
      },
    });
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

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the password with the password in the database
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

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
    // Implement  logic here

    // Find the user's wishlist based on the userID
    const wishlist = await Wishlist.findOne({ _id: userID });

    // Check if the product already exists in the wishlist
    const productExists = wishlist.wishlist.some(
      (item) => item.id.toString() === productID
    );

    if (productExists) {
      return res.status(400).json({ error: 'Product already exists in wishlist' });
    }

    // Add the product to the wishlist
    wishlist.wishlist.push({ id: productID });

    // Save the updated wishlist
    await wishlist.save();

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