import React, { useContext } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import MainMenu from '../../main-menu/MainMenu';
import { LoginContext } from '../../context/LoginContext';
import "./AccountPage.css";

import { Outlet } from 'react-router-dom';
import AccounPageNavbar from '../../account-page-components/account-page-navbar/AccountPageNavbar';
// import { LoginProvider } from '../../context/LoginContext';


export default function AccountPage() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className='account-overview-page'>
      <Header isLoggedIn={isLoggedIn} />
      <MainMenu />
      
      <div className='account-page-main'>
        <AccounPageNavbar/>
        <Outlet/>
      </div>
      


      <Footer />
    </div>
  );
}