import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
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
  
  return (
    <div className="cart-main-left">
      <div className="cart-items-wrapper">
        <div className="cart-items-header">
          <h2>Cart</h2>          
        </div>
        <div className="cart-items-body">
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              id={item.id}
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
