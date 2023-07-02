import { useParams, Link } from 'react-router-dom';
import React, { useContext,useEffect,useState } from 'react';
import axios from "axios";
import "./ProductPage.css";

import Footer from '../../Footer/Footer';
import ProductPageItem from '../../product-page-item/ProductPageItem';
import Header from '../../Header/Header';
import MainMenu from '../../main-menu/MainMenu';
import Recommended from '../../Recommended/Recommended';
import { CookiePermission } from "../../cookie-permission/CookiePermission";
import { LoginContext } from '../../context/LoginContext';

export default function ProductPage() {
  let { id } = useParams();
  // let foundItem = data.sets.find(item => item.id === Number(id));
  const { isLoggedIn } = useContext(LoginContext);

  let [foundItem,setFoundItem] = useState([{id:"",image:"",price:"",title:""}])
    
  useEffect(() => {
      fetchData();
      
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3010/api/product/${id}`);
        setFoundItem(response.data);
        console.log(foundItem)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <div className='product-page'>
      <Header isLoggedIn={isLoggedIn} />
      <MainMenu />
      <ProductPageItem image={foundItem.image} title={foundItem.title} price={foundItem.price} id={id} />
      <CookiePermission />
      <Recommended />
      <Footer />
    </div>
  );
}