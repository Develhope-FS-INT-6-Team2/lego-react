import React from "react";

function Shopping() {
  return (
    <div class="shopping-items">
      <div class="container">
        <div class="icon">
          <i class="search fa fa-search"></i>
        </div>
        <div class="input">
          <input type="text" placeholder="Search..." id="search" />
          <i class="clear fa fa-times"></i>
        </div>
      </div>
      <button class="account-btn">
        <img
          src="../assets/icons/header/account-icon.png"
          height="36"
          width="36"
        />
      </button>

      <button class="fav-btn">
        <img
          src="../assets/icons/main-menu/heart-icon.png"
          width="20"
          height="20"
        />
      </button>

      <div class="shopping">
        <button class="shop-btn">
          <img
            src="../assets/icons/main-menu/shopping-bag.png"
            width="20"
            height="20"
          />
        </button>

        <span>(0)</span>
      </div>
    </div>
  );
}

export default Shopping;
