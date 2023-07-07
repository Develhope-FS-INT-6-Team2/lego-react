//CartContext.js
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from API when component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3010/api/product/products"
        );
        console.log("Products fetched from API:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Save cartItems to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const createOrder = async (email, products, productCounts) => {
    try {
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productCount = productCounts[i];
  
        const response = await axios.post("http://localhost:3010/api/order/orders", {
          email,
          products: product,
          productCounts: productCount,
        });
  
        console.log("Order created successfully for product:", product, response.data);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  

  const findProductById = (id) => {
    const product = products.find(
      (product) => String(product.id) === String(id)
    );
    console.log("Product found by ID:", product);
    return product;
  };

  const addToCart = (productId) => {
    console.log("Adding product to cart with ID:", productId);

    const existingCartItem = cartItems.find(
      (item) => String(item.id) === String(productId)
    );

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          String(item.id) === String(productId)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      console.log("Product already in cart, increased quantity");
    } else {
      const product = findProductById(productId);
      if (product) {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        console.log("Product added to cart:", product);
      } else {
        console.log("Product not found, cannot add to cart");
      }
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    console.log("Product removed from cart with ID:", productId);
  };

  const updateCartItem = (productId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log(
      "Cart item updated with ID:",
      productId,
      "New Quantity:",
      newQuantity
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
