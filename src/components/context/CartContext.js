// CartContext.js
import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [products, setProducts] = useState([]);
  const { userId, isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (!isLoggedIn) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:3010/api/cart/${userId}`
          );
          setCartItems(response.data); // updated here
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      } else {
        const localCartItems =
          JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(localCartItems);
      }
    };

    fetchCartItems();
  }, [userId]);

  useEffect(() => {
    if (userId) {
      const updateCartItems = async () => {
        try {
          console.log("userId:", userId);
          console.log("cartItems:", cartItems);
          await axios.put(`http://localhost:3010/api/cart/${userId}`, {
            cartItems: cartItems,
          });
        } catch (error) {
          console.error("Error updating cart items:", error);
        }
      };

      updateCartItems();
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, userId]);

  useEffect(() => {
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
    if (!isLoggedIn) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const findProductById = (id) => {
    const product = products.find(
      (product) => String(product.id) === String(id) // kept as is
    );
    console.log("Product found by ID:", product);
    return product;
  };

  const addToCart = (productId) => {
    console.log("Adding product to cart with ID:", productId);

    const existingCartItem = cartItems.find(
      (item) => String(item.id) === String(productId) // kept as is
    );

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          String(item.id) === String(productId) // kept as is
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
        alert("Product added to cart:", product);
      } else {
        console.log("Product not found, cannot add to cart");
      }
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId)); // kept as is
    console.log("Product removed from cart with ID:", productId);
  };

  const updateCartItem = (productId, newQuantity) => {
    setCartItems(
      cartItems.map(
        (item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item // kept as is
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
        setCartItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
