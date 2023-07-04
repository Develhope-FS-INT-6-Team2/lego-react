
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../pop-up-login/popUp";
import { LoginContext } from '../../context/LoginContext';

function Account() {
  const { logout } = useContext(LoginContext);
  const[userId,setUserID] = useState(false);

  useEffect(()=>{
    const value = localStorage.getItem('userId');
    console.log(value);
    if(value != null){
      setUserID(value);
    }


 

  },[]);

  return (
    <div className="account-section">
      {!userId && <Popup />} {/* Display the Popup only if the user is not logged in */}

      {/* Display the dropdown only if the user is logged in */}
      {userId && (
        <div className="account">
         
        <img
          src="../assets/icons/header/account-icon.png"
          height="36"
          width="36"
          alt="Account"
        />
        <span className='span-open-button' onClick={()=>{logout(); setUserID(false);}}>Logout</span>
      
        {/* onClick={()=>{logout(); setUserID(false);}} */}
        </div>
      )}

        <img src="../assets/icons/header/vip-icon.png" height="18" width="26" alt="Vip"/>
        <Link to="/vip">VIP</Link>
</div>


  
  );
}

export default Account;