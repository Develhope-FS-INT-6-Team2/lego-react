import React, { useState } from "react";
import "./InputField.css"; // Import CSS for the green checkmark

function InputField({ label, id, type, tabIndex, isRequired = true }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const isInputValid = () => inputValue.trim() !== '';

  return (
    <div className="FormInput-Wrapper">
      <div className="FormInput-Input-Wrapper">
        <div className="FormInput-Label">
          <label htmlFor={id} tabIndex={-1}>
            <input
              id={id}
              type={type}
              tabIndex={tabIndex}
              required={isRequired}
              onChange={handleChange}
              className={isInputValid() ? "input-has-value" : ""}
            />
            <span className="Inputstyles__LabelText-sc-12nwzc4-2 gbyBWq">
              {label}
            </span>
            {isInputValid() && <div className="checkmark"></div>}
          </label>
        </div>
      </div>
    </div>
  );
}

export default InputField;
