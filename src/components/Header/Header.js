import React, { useContext } from 'react';
import "./Header.css";
import Playzone from "./Header-components/Playzone";
import HeaderSlider from "./Header-components/HeaderSlider";
import Account from "./Header-components/Account";
import { LoginContext } from '../context/LoginContext';


function Header() {
  

  const { isLoggedIn } = useContext(LoginContext);


  return (
    
      <div className="top-header-container">
        <Playzone />
        <HeaderSlider />
        <Account />
      </div>
    
  );
}

export default Header;