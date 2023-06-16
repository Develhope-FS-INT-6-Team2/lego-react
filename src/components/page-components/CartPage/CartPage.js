import React, { useContext } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import MainMenu from '../../main-menu/MainMenu';
import { LoginContext } from '../../context/LoginContext';
import Recommended from '../../Recommended/Recommended';
import CartMain from '../../CartMain/CartMain';
import "./CartPage.css";


export default function CartPage() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className='all-products-page'>
      <Header isLoggedIn={isLoggedIn} />
      <MainMenu />
      <CartMain/>
      <Recommended/>
      <Footer />
    </div>
  );
}