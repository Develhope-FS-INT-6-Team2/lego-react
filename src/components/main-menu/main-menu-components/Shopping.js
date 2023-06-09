import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../CartMain/CartContext'; // Make sure to provide the correct path to CartContext

function Shopping() {
  const { cartItems } = useContext(CartContext);
  
  // Count the total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shopping-items">
      <div className="container">
        <div className="icon">
          <i className="search fa fa-search"></i>
        </div>
        <div className="input">
          <input type="text" placeholder="Search..." id="search" />
          <i className="clear fa fa-times"></i>
        </div>
      </div>
      <button className="account-btn">
        <img src="../assets/icons/header/account-icon.png" alt="Account" />
      </button>

      <button className="fav-btn">
        <img src="../assets/icons/main-menu/heart-icon.png" alt="Favorites" />
      </button>

      <div className="shopping">
        <Link to="/cart">
          <button className="shop-btn">
            <img src="../assets/icons/main-menu/shopping-bag.png" alt="Cart" />
          </button>
        </Link>

        <span>({totalItems})</span>
      </div>
    </div>
  );
}

export default Shopping;
