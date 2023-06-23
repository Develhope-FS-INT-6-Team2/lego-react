const Product = require('../models/product');

// Get all products
async function getAllProducts(req, res) {
  try {
    console.log('Received getAllProducts request');

    await Product.init();
    
    // Your logic for fetching all products
    const products = await Product.find({}).lean();

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

    await Product.init();

    // Extract the product ID from the request parameters
    const productId = req.params.productId;

    // Your logic for fetching a product by ID
    const product = await Product.findOne({ id: productId }).lean();

    if (!product) {
      console.log('Product not found');
      return res.status(404).json({ error: 'Product not found' });
    }

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