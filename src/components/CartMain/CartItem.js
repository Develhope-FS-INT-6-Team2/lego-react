import React from 'react';
import './CartItem.css';

const CartItem = ({
  image,
  title,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
  onAddToWishlist,
}) => (
  <div className="cart-item" data-test="cart-item">
    <img src={image} alt={title} className="item-image" />
    <div className="item-info">
      <h3 className="item-title" data-test="item-title">
        {title}
      </h3>
      <div className="item-details">
        <div className="item-actions" data-test="item-actions">
          <span className="item-price" data-test="item-price">
            {price}
          </span>

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
            <input
              type="number"
              className="quantity-display"
              pattern="[0-9]*"
              aria-label="Quantity"
              value={quantity}
              data-test="quantity-value"
              readOnly
            />
            <button
              className="quantity-btn increase"
              onClick={onIncrease}
              aria-label="Increase Quantity"
              data-test="quantity-increase"
            >
              +
            </button>
          </div>

          {/* Remaining code */}
        </div>
      </div>
    </div>

    <button
      title="Remove from bag"
      className="remove-from-cart"
      onClick={onRemove}
      data-test="remove-from-cart"
    >
      X
    </button>
  </div>
);

export default CartItem;
