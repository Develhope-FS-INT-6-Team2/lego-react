import { func } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="account-section">
      <div className="account">
        <img
          src="../assets/icons/header/account-icon.png"
          height="36"
          width="36"
        />
        <Link to="/LoginPage">Account</Link>
      </div>
      <img
        src="../assets/icons/header/vertical-divider-icon.png"
        height="26"
        width="26"
      />
      <div className="vip">
        <img src="../assets/icons/header/vip-icon.png" height="18" width="26" />
        <span>VIP</span>
      </div>
    </div>
  );
}

export default Account;
