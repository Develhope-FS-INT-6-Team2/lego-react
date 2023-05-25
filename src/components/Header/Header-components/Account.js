
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../pop-up-login/popUp";
import { LoginContext } from '../../context/LoginContext';

function Account() {
  const { isLoggedIn, logout } = useContext(LoginContext);
  const[userId,setUserID] = useState(false);
  useEffect(()=>{
    const value = localStorage.getItem('userID');
    if(value != null){
      setUserID(Number(value));
    }


  },[]);

  return (
    <div className="account-section">
      {!isLoggedIn && <Popup />} {/* Display the Popup only if the user is not logged in */}

      {/* Display the dropdown only if the user is logged in */}
      {isLoggedIn && (
        <div className="account">
          {/* Your dropdown content */}
          <button onClick={logout}>Logout</button> {/* Logout button */}
        </div>
      )}

        <img src="../assets/icons/header/vip-icon.png" height="18" width="26" alt="Vip"/>
        <Link to="/vip">VIP</Link>
</div>


  
  );
}

export default Account;