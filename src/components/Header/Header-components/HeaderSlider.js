import React from "react";
import Header from "../Header";

function HeaderSlider() {
  return (
    <div className="top-header-slider">
      <button className="top-header-prev-btn">
        <img src="../assets/icons/header/angel-left-icon.png" width="20" />
      </button>
      <p>
        Free delivery on orders above £50!* <a href="">Learn more</a>
      </p>
      <button className="top-header-next-btn">
        <img src="../assets/icons/header/angel-right-icon.png" width="20" />
      </button>
    </div>
  );
}

export default HeaderSlider;
