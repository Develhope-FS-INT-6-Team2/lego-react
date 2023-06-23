const Product = require('../models/product');

// Get all products
async function getAllProducts(req, res) {
  try {
    console.log('Received getAllProducts request');

    await Promise.all([Order.init(), Product.init(), User.init()]);
    
    // Your logic for fetching all products
    const result = await Product.find({});
    const products = result.map(item => item.toObject());

    console.log('Products retrieved successfully');
    res.json(products);
  } catch (error) {
    console.error('Error fetching products', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}

// Get a product by ID
async function getProductById(req, res) {
  try {
    console.log('Received getProductById request');
    
    await Promise.all([Order.init(), Product.init(), User.init()]);

    // Extract the product ID from the request parameters
    const productId = req.params.id;

    // Your logic for fetching a product by ID
    const result = await Product.find({ id: productId });
    const product = result.map(item => item.toObject());

    console.log('Product retrieved successfully');
    res.json(product);
  } catch (error) {
    console.error('Error fetching product', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
};