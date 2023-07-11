const mongoose = require("mongoose");

mongoose.set("debug", true);

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const userRoutes = require("../Routes/userRoutes");
const productRoutes = require("../Routes/productRoutes");
const orderRoutes = require("../Routes/orderRoutes");
const cartRoutes = require('../Routes/cartRoutes');

const app = express();
const PORT = 3010;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://tester:1234@lego-db.lssxr4t.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false, // Disable the buffering of commands
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use('/api/', cartRoutes);

app.listen(PORT, () => {
  console.log(
    "Server has started at port",
    PORT,
    "you can Go to link from here " + `http://localhost:${PORT}`
  );
  connectToDatabase();
});

//register //post
//login    //post

//getWhishlistByUserID //get
//AddproductToWhishlist

//addOrder
//cancelOrder
