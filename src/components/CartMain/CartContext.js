import React, { useState, createContext, useCallback } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(prevItem => prevItem.id === item.id);
      if (existingItem) {
        return prevItems.map(prevItem => 
          prevItem.id === item.id 
            ? { ...prevItem, quantity: prevItem.quantity + 1 } 
            : prevItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }, []);

  const updateCartItem = useCallback((itemId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => item.id === itemId ? { ...item, quantity } : item)
    );
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
