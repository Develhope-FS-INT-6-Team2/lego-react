import React from "react";

function PaymentDetails() {
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
            <button className="Payment-Button" type="submit">
              <span>Place order and pay</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentDetails;
