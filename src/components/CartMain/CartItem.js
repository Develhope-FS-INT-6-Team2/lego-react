import React, { useState } from "react";
import "./CartItem.css";

const CartItem = ({
  image,
  title,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
  onAddToWishlist,
}) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const handleWishlistToggle = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
    if (onAddToWishlist) {
      onAddToWishlist();
    }
  };

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item" data-test="cart-item">
        <div className="item-image-container" data-test="item-image">
          <a>
            <img src={image} alt={title} className="item-image" />
          </a>
        </div>
        <div className="item-info">
          <h3 className="item-title" data-test="item-title">
            {title}
          </h3>
          <div className="seperator1"></div>
          <div className="item-details">
            <div className="action-wrapper" data-test="item-actions">
              <div className="price-wrapper" data-test="item-price">
                <span className="item-price" data-test="item-price">
                  {price}
                </span>
              </div>

              <div className="quantity-input" data-test="quantity-input">
                <button
                  className="quantity-btn decrease"
                  onClick={onDecrease}
                  aria-label="Decrease Quantity"
                  data-test="quantity-decrease"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="input-display-container">
                  <input
                    type="number"
                    className="quantity-display"
                    pattern="[0-9]*"
                    aria-label="Quantity"
                    value={quantity}
                    data-test="quantity-value"
                    readOnly
                  />
                </div>
                <button
                  className="quantity-btn increase"
                  onClick={onIncrease}
                  aria-label="Increase Quantity"
                  data-test="quantity-increase"
                >
                  +
                </button>
              </div>
              <div
                className="wishlist-btn-wrapper"
                data-test="wishlist-btn-wrapper"
              >
                <button
                  className={`wishlist-btn ${isAddedToWishlist ? "added" : ""}`}
                  onClick={handleWishlistToggle}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 40 40"
                    className="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX"
                  >
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path
                      d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126l8.22 8.117 8.223-8.116a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126"
                      fill={isAddedToWishlist ? "#006DB7" : "none"}
                      stroke="#006DB7"
                    ></path>
                  </svg>
                </button>
                <div className="wishlist-btn-text">Add to Wishlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="remove-from-cart-wrapper">
        <button className="remove-from-cart-btn" onClick={onRemove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="22"
            viewBox="0 0 17 22"
            aria-hidden="true"
            className="Icon__StyledSVG-lm07h6-0 laCVNL"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="M.773 5.5h15.454A.762.762 0 0017 4.75a.762.762 0 00-.773-.75H.773A.762.762 0 000 4.75c0 .414.346.75.773.75z"></path>
              <path d="M5.744 4l.378-1.43c.08-.307.448-.607.742-.607h3.272c.294 0 .661.3.742.606L11.256 4 13 4.46l-.378-1.43C12.32 1.88 11.24.673 10.136.673H6.864C5.76.673 4.681 1.881 4.378 3.03L4 4.46 5.744 4z"></path>
              <path d="M14.47 4.734l-.567 15.257a.515.515 0 01-.505.484H3.602a.516.516 0 01-.505-.484L2.53 4.734a.764.764 0 00-.793-.733.764.764 0 00-.736.79l.567 15.256A2.044 2.044 0 003.602 22h9.796c1.086 0 1.994-.87 2.034-1.953L16 4.791a.764.764 0 00-.736-.79.764.764 0 00-.793.733z"></path>
              <path d="M8 8.532v8.945c0 .29.224.526.5.526s.5-.235.5-.526V8.532a.514.514 0 00-.5-.526c-.276 0-.5.236-.5.526zm3-.006v8.948c0 .29.224.526.5.526s.5-.236.5-.526V8.526A.514.514 0 0011.5 8c-.276 0-.5.236-.5.526zm-6 0v8.948c0 .29.224.526.5.526s.5-.236.5-.526V8.526A.514.514 0 005.5 8c-.276 0-.5.236-.5.526z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
