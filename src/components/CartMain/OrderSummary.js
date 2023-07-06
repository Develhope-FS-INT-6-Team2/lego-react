import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function OrderSummary() {
  const { cartItems } = useContext(CartContext);

  const calculateSubTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const orderTotal = calculateSubTotal() + 3.95; // 3.95 is the delivery charge

  return (
    <div className="Checkout-Sidebar">
      <div className="Loading-Wrapper">
        <div className="SidebarSummary">
          <h2>Order Summary</h2>
          <div className="LineText">
            <span className="LineText-Title">Subtotal</span>
            <span className="LineText-Title">£{calculateSubTotal().toFixed(2)}</span>
          </div>
          <div className="LineText">
            <span className="LineText-Title">Standard delivery</span>
            <span className="LineText-Title">£3.95</span>
          </div>
          <div className="LineText">
            <span className="LineText-Title" style={{ fontWeight: 'bold' }}>
              Order Total
            </span>
            <span className="LineText-Title">£{orderTotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="SidebarSummary">
          <h2>Order Details</h2>
          <div className="OrderItems">
            {cartItems.map(item => (
              <div className="Product-Container" key={item.id}>
                <div className="Product-Wrapper">
                  <div className="Product-Image">
                    <img
                      className="Product-Image-Style"
                      src={item.image}
                      alt="Product Image"
                    />
                  </div>
                  <div className="Product-Info">
                    <div className="Product-Name">
                      <h3 className="Product-Name-Style">{item.name}</h3>
                    </div>
                    <div className="Product-Price">
                      <div className="Product-Price-Style">
                        <span>£{item.price.toFixed(2)}</span>
                        <p>Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
