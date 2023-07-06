const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Add an order
router.post("/orders", orderController.addOrder);

// get allOrders
router.get("/orders", orderController.getAllOrdersById);

// get a single order
router.get("/orders/:orderId", orderController.getOrderById);

// update an order
router.put("/orders/:orderId", orderController.updateOrderById);

// Cancel an order
router.delete("/orders/:orderId", orderController.cancelOrder);

module.exports = router;
