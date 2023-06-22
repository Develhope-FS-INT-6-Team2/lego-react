import React, { useState, createContext } from 'react';
import productsData from './Products.json';
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const findProductById = (id) => {
        return productsData.sets.find(product => product.id === id);
    };

    const addToCart = (productId) => {
        const existingCartItem = cartItems.find(item => item.id === productId);

        if (existingCartItem) {
            setCartItems(cartItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            const product = findProductById(productId);
            if (product) {
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const updateCartItem = (productId, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === productId
                ? { ...item, quantity: newQuantity }
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
            {children}
        </CartContext.Provider>
    );
}
