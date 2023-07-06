//addOrder
//cancelOrder

const User = require("../models/user");

const Order = require("../models/order");

// Add an order
async function addOrder(req, res) {
  try {
    const { email, products, productCounts } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ message: "Missing email in the request body" });
    }

    // Find the corresponding user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new order instance
    const order = new Order({
      userID: user._id,
      products,
      productCounts,
    });

    // Save the order to the database
    await order.save();

    user.latestOrders.push(order._id);
    await user.save();

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
}

// Get all orders by Id

async function getAllOrdersByEmail(req, res) {
  try {
    const { email } = req.params;

    // Find the corresponding user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all orders for the user by userID
    const orders = await Order.find({ userID: user._id });

    res.status(200).json({ orders });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
}

// Get a single order by Id

async function getOrderById(req, res) {
  try {
    const { orderId } = req.params;

    // Find the order by ID in the database
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch order", error: error.message });
  }
}

// Update an order by Id

async function updateOrderById(req, res) {
  try {
    const { orderId } = req.params;
    const { products, productCounts } = req.body;

    // Find the order by ID in the database and update its fields
    const order = await Order.findByIdAndUpdate(
      orderId,
      { products, productCounts },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order updated successfully", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update order", error: error.message });
  }
}

// Cancel an order
async function cancelOrder(req, res) {
  try {
    const { orderId } = req.params;

    // Find the order by ID in the database and remove it
    const order = await Order.findByIdAndRemove(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete order", error: error.message });
  }
}

module.exports = {
  addOrder,
  getAllOrdersByEmail,
  getOrderById,
  updateOrderById,
  cancelOrder,
};
