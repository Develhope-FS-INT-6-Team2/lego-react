import React from "react";

function Shopping() {
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
        <img src="../assets/icons/header/account-icon.png" />
      </button>

      <button className="fav-btn">
        <img src="../assets/icons/main-menu/heart-icon.png" />
      </button>

      <div className="shopping">
        <button className="shop-btn">
          <img src="../assets/icons/main-menu/shopping-bag.png" />
        </button>

        <span>(0)</span>
      </div>
    </div>
  );
}

export default Shopping;
