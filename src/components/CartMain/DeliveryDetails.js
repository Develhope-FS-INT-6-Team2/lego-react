import React from 'react';
import InputField from "./InputField";

function DeliveryDetails({ handleSubmit }) {
  return (
    <section className="Delivery-Details">
      <div className="Stepstyles-Container">
        <div className="StepBadge-Wrap">
          <div className="StepBadge-Icon">
            <span color="white" className="StepBadge-Icon-Text">1</span>
          </div>
          <h2 color="black" className="StepBadge-Title">Delivery</h2>
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
  );
}

export default DeliveryDetails;
