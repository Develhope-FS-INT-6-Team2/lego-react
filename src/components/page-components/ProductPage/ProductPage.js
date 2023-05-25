import { useParams, Link } from 'react-router-dom';
import "./ProductPage.css";

import data from "../../FeaturedSets/featured-sets-components/Products.json"
import Footer from '../../Footer/Footer';
import ProductPageItem from '../../product-page-item/ProductPageItem';
import Header from '../../Header/Header';
import MainMenu from '../../main-menu/MainMenu';
import Recommended from '../../Recommended/Recommended';
import {CookiePermission} from "../../cookie-permission/CookiePermission"


export default function ProductDetail() {
  let { id } = useParams();
  
  let foundItem = data.sets.find(item => item.id === Number(id));

  // console.log((foundItem));
  return (
    <div className='product-page'>
      <Header />
      <MainMenu />
      
      <ProductPageItem  image={foundItem.image} title={foundItem.title} price={foundItem.price} id={id} />
      <CookiePermission/>
      <Recommended image={foundItem.image} title={foundItem.title} price={foundItem.price} id={id}/>
      <Footer/>

    </div>
  );
}
