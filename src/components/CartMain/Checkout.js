import React from "react";
import "./cartStyles/Checkout.css";
import DeliveryDetails from "./DeliveryDetails";
import PaymentDetails from "./PaymentDetails";
import OrderSummary from "./OrderSummary";
import CheckoutHeader from "./CheckoutHeader";

function Checkout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the checkout logic (e.g., send data to the server)
    console.log("Handle checkout");
  };

  return (
    <>
      <CheckoutHeader/>
      <div className="Checkout-Container">
        <div className="Checkout-Maxwidth">
          <div className="Checkout-Wrapper">
            <div className="Checkout-Content">

              {/* Delivery Details */}
              <DeliveryDetails handleSubmit={handleSubmit} />

              {/* Payment Details */}
              <PaymentDetails />

            </div>
            
            {/* Order Summary */}
            <OrderSummary />

          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
