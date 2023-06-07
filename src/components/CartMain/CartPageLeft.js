import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import "./CartMain.css";
import productData from "./Products.json"; // replace with the correct path to your JSON file

function CartPageLeft() {
  const { cartItems, removeFromCart, addToCart, updateCartItem } =
    useContext(CartContext);

  const handleIncreaseQuantity = (item) => {
    updateCartItem(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartItem(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
  };

  const addRandomProduct = () => {
    // Select a random product
    const randomProduct =
      productData.sets[Math.floor(Math.random() * productData.sets.length)];

    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === randomProduct.id);

    if (existingItem) {
      // If the product is already in the cart, increase its quantity
      updateCartItem(existingItem.id, existingItem.quantity + 1);
    } else {
      // If the product is not in the cart, add it
      addToCart({ ...randomProduct, quantity: 1 });
    }
  };

  return (
    <div className="cart-main-left">
      <div className="cart-items-wrapper">
        <div className="cart-items-header">
          <h2>Cart</h2>
          <button
            onClick={addRandomProduct}
            style={{
              backgroundColor: "#4CAF50" /* Green */,
              border: "none",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "15px",
              cursor: "pointer",
              height: "50px",
              width: "150px",
            }}
          >
            Add Random Product
          </button>
        </div>
        <div className="cart-items-body">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              onIncrease={() => handleIncreaseQuantity(item)}
              onDecrease={() => handleDecreaseQuantity(item)}
              onRemove={() => handleRemoveFromCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPageLeft;
