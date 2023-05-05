import React from "react";
import "./ArrowButton.css";


const ArrowButton = ({ direction, onClick, hidden }) => {
    const arrowClass = `fas fa-angle-${direction}`;
  
    return (
      <i
        className={`arrow-button ${arrowClass} ${direction}`}
        onClick={onClick}
        style={{ display: hidden ? "none" : "block" }}
      ></i>
    );
  };
  
  

export default ArrowButton;
