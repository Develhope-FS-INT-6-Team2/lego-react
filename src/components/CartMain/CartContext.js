import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase-config';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = await getDocs(collection(db, 'products'));
      setProducts(productsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    
    fetchProducts();
  }, []);
  
  const addToCart = (product) => {
    console.log("addToCart function called with product:", product);
    
    if (product) {
      setCartItems(prevCartItems => {
        const existingCartItem = prevCartItems.find(item => item.id === product.id);
        if (existingCartItem) {
          return prevCartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        } else {
          return [...prevCartItems, { ...product, quantity: 1 }];
        }
      });
    } else {
      console.log("No product was passed to addToCart function");
    }
  };
  
  const removeFromCart = (id) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
  };
  
  const updateCartItem = (id, quantity) => {
    setCartItems(prevCartItems => prevCartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };
  
  const getTotalPrice = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ products, cartItems, addToCart, removeFromCart, updateCartItem, getTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
};
