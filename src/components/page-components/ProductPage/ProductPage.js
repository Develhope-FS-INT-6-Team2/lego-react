import { useParams, Link } from 'react-router-dom';
import React, { useContext } from 'react';
import "./ProductPage.css";
import data from "../../FeaturedSets/featured-sets-components/Products.json";
import Footer from '../../Footer/Footer';
import ProductPageItem from '../../product-page-item/ProductPageItem';
import Header from '../../Header/Header';
import MainMenu from '../../main-menu/MainMenu';
import Recommended from '../../Recommended/Recommended';
import { CookiePermission } from "../../cookie-permission/CookiePermission";
import { LoginContext } from '../../context/LoginContext';

export default function ProductPage() {
  let { id } = useParams();
  let foundItem = data.sets.find(item => item.id === Number(id));
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className='product-page'>
      <Header isLoggedIn={isLoggedIn} />
      <MainMenu />
      <ProductPageItem image={foundItem.image} title={foundItem.title} price={foundItem.price} id={id} />
      <CookiePermission />
      <Recommended image={foundItem.image} title={foundItem.title} price={foundItem.price} id={id}/>
      <Footer />
    </div>
  );
}