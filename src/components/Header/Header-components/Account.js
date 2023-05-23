import { func } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Popup from "../../pop-up-login/popUp";

function Account() {
  return (
    <div className="account-section">
      <div className="account">
       
        <Popup/>
      </div>
      <img
        src="../assets/icons/header/vertical-divider-icon.png"
        height="26"
        width="26"
      />
      <div className="vip">
        <img src="../assets/icons/header/vip-icon.png" height="18" width="26" />
        <Link to="/vip">VIP</Link>
      </div>
    </div>
  );
}

export default Account;
