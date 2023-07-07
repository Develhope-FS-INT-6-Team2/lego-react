import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { LoginContext } from '../context/LoginContext'; // replace with the correct path to your LoginContext
import axios from "axios";

function PaymentDetails() {
  const { cartItems, createOrder } = useContext(CartContext);
  const { userId } = useContext(LoginContext);

  const handlePlaceOrder = async () => {
    try {
      console.log("Place Order button clicked");
  
      if (!userId) {
        console.error("User is not logged in");
        return;
      }
  
      if (cartItems.length === 0) {
        console.error("Cart is empty");
        return;
      }
  
      const email = userId;

      // Creating an array of product objects with productId and quantity
      const products = cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity,
      }));
  
      console.log(`Using email: ${email}`);
      console.log(`Products to be ordered: ${JSON.stringify(products)}`);
      console.log("Calling createOrder function with the gathered data...");
      console.log(products);
  
      const response = await axios.post(
        "http://localhost:3010/api/order/orders",
        {
          email,
          products,
        }
      );
  
      console.log("Order created successfully:", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  
  return (
    <section className="Payment-Details">
      <div className="Stepstyles-Container">
        <div className="StepBadge-Wrap">
          <div className="StepBadge-Icon">
            <span color="white" className="StepBadge-Icon-Text">
              2
            </span>
          </div>
          <h2 color="black" className="StepBadge-Title">
            Payment
          </h2>
        </div>
      </div>
      <hr className="HorizontalSeparator"></hr>
      <div className="Delivery-Details-Wrapper">
        <h3>Choose your method of payment</h3>
      </div>
      <div className="payment-accordion-wrapper">
        <div className="payment-accordion-header">
          <label className="radio-input-label">
            <div className="radio-input-container">
              <input
                type="radio"
                id="huseyinOmerCoin"
                name="payment"
                value="huseyinOmerCoin"
                className="radio-input"
              />
              <div className="radio-styled"></div>
            </div>
            <div className="payment-accordion-header-content">
              <span className="payment-accordion-header-title">
                Hüseyin Ömer Coin
              </span>
              <div className="payment-accordion-icon-container">
                <img
                  className="custom-coin-logo"
                  src="https://d9hhrg4mnvzow.cloudfront.net/www.develhope.co/tr/sign-up/cbc5069c-develhope11.svg"
                  alt="Hüseyin Ömer Coin"
                />
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="AddressForm-Footer">
        <div className="AddressForm-Button-Container">
          <div className="AddressForm-Button-Wrapper">
            <button className="Payment-Button" onClick={handlePlaceOrder}>
              <span>Place order and pay</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentDetails;
