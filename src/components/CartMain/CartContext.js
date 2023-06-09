import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase-config';

// Creating the Cart Context
export const CartContext = createContext();

// Creating the CartProvider component that will wrap around other components to provide the cart functionality
export const CartProvider = (props) => {
  // State to store the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // State to store all products available
  const [products, setProducts] = useState([]);

  // Using useEffect to fetch the list of products from Firestore when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      // Querying the "products" collection in Firestore
      const productsCollection = await getDocs(collection(db, 'products'));

      // Storing the fetched products in the state
      setProducts(productsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    // Calling the fetchProducts function
    fetchProducts();
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    console.log("addToCart function called with product:", product);

    // Check if the product is valid
    if (product) {
      // Updating the cartItems state
      setCartItems(prevCartItems => {
        const existingCartItem = prevCartItems.find(item => item.id === product.id);
        // If the product is already in the cart, increment its quantity
        if (existingCartItem) {
          return prevCartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        } else {
          // Otherwise, add the product to the cart with quantity 1
          return [...prevCartItems, { ...product, quantity: 1 }];
        }
      });
    } else {
      console.log("No product was passed to addToCart function");
    }
  };

  // Function to remove a product from the cart by its ID
  const removeFromCart = (id) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
  };

  // Function to update the quantity of a product in the cart
  const updateCartItem = (id, quantity) => {
    setCartItems(prevCartItems => prevCartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  // Function to get the total price of all items in the cart
  const getTotalPrice = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Providing all the cart functionalities and data to the children components
  return (
    <CartContext.Provider value={{ products, cartItems, addToCart, removeFromCart, updateCartItem, getTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
};
