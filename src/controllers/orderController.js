//addOrder
//cancelOrder

const User = require("../models/user");

const Order = require("../models/order");

// Add an order
async function addOrder(req, res) {
  try {
    const { userID, products, productCounts } = req.body;

    if (!userID) {
      return res
        .status(400)
        .json({ message: "Missing userID in the request body" });
    }

    // Create a new order instance
    const order = new Order({
      userID,
      products,
      productCounts,
    });

    // Save the order to the database
    await order.save();

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
}

// Get all orders by Id

async function getAllOrdersById(req, res) {
  try {
    const { userID } = req.params;

    // Fetch all orders for the specified userID from the database
    const orders = await Order.find({ userID });

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
  getAllOrdersById,
  getOrderById,
  updateOrderById,
  cancelOrder,
};
