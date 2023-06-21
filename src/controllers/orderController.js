//addOrder
//cancelOrder

const User = require('../models/user');

const Order = require('../models/order');

// Add an order
async function addOrder(req, res) {
  try {
    // Extract order data from request body
    const { orderId, userId, products, productCounts, date } = req.body;

    // Create a new order in the database
    const newOrder = await Order.create({ orderId, userId, products, productCounts, date });

    console.log('Order added successfully:', newOrder);

    // Find the user in the database and update the latestOrders array
    const user = await User.findOne({ _id: userId });
    user.latestOrders.push(newOrder._id);
    await user.save();

    res.json({ message: 'Order added successfully' });
  } catch (error) {
    console.error('Error adding order', error);
    res.status(500).json({ error: 'Failed to add order' });
  }
}

// Cancel an order
async function cancelOrder(req, res) {
  try {
    // Extract orderId from request parameters
    const { orderId } = req.params;

    // Find the order in the database and remove it
    const deletedOrder = await Order.findOneAndDelete({ orderId });

    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    console.log('Order canceled successfully:', deletedOrder);

    // Find the user in the database and remove the order ID from the latestOrders array
    const user = await User.findOne({ _id: deletedOrder.userId });
    user.latestOrders = user.latestOrders.filter(id => id.toString() !== deletedOrder._id.toString());
    await user.save();

    res.json({ message: 'Order canceled successfully' });
  } catch (error) {
    console.error('Error canceling order', error);
    res.status(500).json({ error: 'Failed to cancel order' });
  }
}

module.exports = {
  addOrder,
  cancelOrder,
};
