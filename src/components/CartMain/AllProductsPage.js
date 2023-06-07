import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const AllProductsPage = () => {
  const { cartItems, removeFromCart, updateCartItem } = useContext(CartContext);

  // If cartItems is not defined, render null
  if (!cartItems) {
    return null;
  }

  return (
    <div className="all-products-page">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateCartItem={updateCartItem}
        />
      ))}
    </div>
  );
};

export default AllProductsPage;
