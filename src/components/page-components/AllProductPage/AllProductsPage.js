
import React, { useContext } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import MainMenu from '../../main-menu/MainMenu';
import { LoginContext } from '../../context/LoginContext';
import "./AllProductsPage.css";
import ProductListMain from '../../ProductListMain/ProductListMain';

export default function AllProductsPage() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className='all-products-page'>
      <Header isLoggedIn={isLoggedIn} />
      <MainMenu />
      <ProductListMain/>
      <Footer />
    </div>
  );
}