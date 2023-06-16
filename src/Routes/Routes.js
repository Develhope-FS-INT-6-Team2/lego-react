const express = require("express");
const router = express.Router();

const {
  getUser,
  setUser,
  getProduct,
  setProduct,
  getOrder,
  setOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/goalController");


// user Routes
router.route("/").get(getUser);
router.route("/").post(setUser);

// product Routes
router.route("/").get(getProduct);
router.route("/").post(setProduct);

// order Routes
router.route("/").get(getOrder);
router.route("/").post(setOrder);
router.route("/:id").put(updateOrder);
router.route("/:id").delete(deleteOrder);


module.exports = router;