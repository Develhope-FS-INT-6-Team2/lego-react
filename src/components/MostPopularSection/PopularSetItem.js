// PopularSetItem.js

import React from 'react';

const PopularSetItem = (props) => {
  // Destructure any necessary props
  const { imageUrl, logo1, logo2, title, description } = props;

  return (
    <div className="popular-set-item">
      <div className="img-plus-logo">
        <img
          src={imageUrl}
          alt="img-plus logo"
          draggable="false"
        />
        <div className="img-logo">
          <img src={logo1} alt="img-logo" />
          <img src={logo2} alt="img-logo" />
        </div>
      </div>
      <div className="set-details">
        <h3 className="item-info-first-line">
          {title}
        </h3>
        <p className="item-desc sizeKeeperHere">
          {description}
        </p>
        <div className="shop-now-div">
          <span className="shop-now">Shop now</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 18 28"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="shop-now-arrow"
            data-di-res-id="6059deea-30faf678"
            data-di-rand="1677245236820"
          >
            <path
              d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PopularSetItem;
