const Cart = require("../models/cart");

async function getCartByUserId(req, res) {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart.cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

async function updateUserCart(req, res) {
  const { userId } = req.params;
  const { cartItems } = req.body;

  console.log("Inside updateUserCart function");
  console.log("userId:", userId);
  // console.log("cartItems:", cartItems);

  try {
    let cart = await Cart.findOne({ userId });
    console.log("Cart:", cart);

    if (cart) {
      // If a cart is found, update it
      cart.cartItems = cartItems;
    } else {
      // If no cart is found, create a new one
      cart = new Cart({ userId, cartItems });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getCartByUserId,
  updateUserCart,
};
