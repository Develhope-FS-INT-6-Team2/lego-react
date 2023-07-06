// Checkout.js

import React from "react";
import "./cartStyles/Checkout.css";
import InputField from "./InputField"; // Import InputField component
import CartPageLeft from "./CartPageLeft";

function Checkout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the checkout logic (e.g., send data to the server)
    console.log("Handle checkout");
  };

  return (
    <>
      <div className="Checkout-Container">
        <div className="Checkout-Maxwidth">
          <div className="Checkout-Wrapper">
            <div className="Checkout-Content">
              <section className="Delivery-Details">
                <div className="Stepstyles-Container">
                  <div className="StepBadge-Wrap">
                    <div className="StepBadge-Icon">
                      <span color="white" className="StepBadge-Icon-Text">
                        1
                      </span>
                    </div>
                    <h2 color="black" className="StepBadge-Title">
                      Delivery
                    </h2>
                  </div>
                </div>
                <hr className="HorizontalSeparator"></hr>
                <div className="Delivery-Details-Wrapper">
                  <h3>Enter delivery details</h3>
                  <form className="address-form" onSubmit={handleSubmit}>
                    <InputField
                      label="First Name"
                      id="firstName"
                      type="text"
                      tabIndex={-1}
                    />
                    <InputField
                      label="Last Name"
                      id="lastName"
                      type="text"
                      tabIndex={-1}
                    />
                    <InputField
                      label="Phone Number"
                      id="phoneNumber"
                      type="text"
                      tabIndex={-1}
                    />
                    <InputField
                      label="House Number/Address"
                      id="houseNumberAddress"
                      type="text"
                      tabIndex={-1}
                    />
                    <InputField
                      label="Flat (optional)"
                      id="flat"
                      type="text"
                      tabIndex={-1}
                      isRequired={false}
                    />
                    <InputField
                      label="Company Name (optional)"
                      id="companyName"
                      type="text"
                      tabIndex={-1}
                      isRequired={false}
                    />
                    <InputField
                      label="City"
                      id="city"
                      type="text"
                      tabIndex={-1}
                    />
                    <InputField
                      label="Postcode"
                      id="postcode"
                      type="text"
                      tabIndex={-1}
                    />
                    <div className="AddressForm-Footer">
                      <div className="AddressForm-Button-Container">
                        <div className="AddressForm-Button-Wrapper">
                          <button className="AddressForm-Button" type="submit">
                            <span>Use this address</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
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
                      <button className="Payment-Button" type="submit">
                        <span>Place order and pay</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="Checkout-Sidebar">
              <div className="Loading-Wrapper">
                <div className="SidebarSummary">
                  <h2>Order Summary</h2>
                  <div className="LineText">
                    <span className="LineText-Title">Subtotal</span>
                    <span className="LineText-Title">£10.99</span>
                  </div>
                  <div className="LineText">
                    <span className="LineText-Title">Standard delivery</span>
                    <span className="LineText-Title">£3.95</span>
                  </div>
                  <div className="LineText">
                    <span
                      className="LineText-Title"
                      style={{ fontWeight: "bold" }}
                    >
                      Order Total
                    </span>
                    <span className="LineText-Title">£14.94</span>
                  </div>
                </div>
                <div className="SidebarSummary">
                  <h2>Order Details</h2>
                  <div className="OrderItems">
                    <div className="Product-Container">
                      <div className="Product-Wrapper">
                        <div className="Product-Image">
                          <img
                            className="Product-Image-Style"
                            src="https://d9hhrg4mnvzow.cloudfront.net/www.develhope.co/tr/sign-up/cbc5069c-develhope11.svg"
                            alt="Product Image"
                          />
                        </div>
                        <div className="Product-Info">
                          <div className="Product-Name">
                            <h3 className="Product-Name-Style">Product Name</h3>
                          </div>
                          <div className="Product-Price">
                            <div className="Product-Price-Style">
                              <span>£10.99</span>
                              <p>Qty: 1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
