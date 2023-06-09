import React, { useContext, useState, useEffect } from 'react';
import "./ProductPage.css";
import Footer from '../../Footer/Footer';
import ProductPageItem from '../../product-page-item/ProductPageItem';
import Header from '../../Header/Header';
import MainMenu from '../../main-menu/MainMenu';
import Recommended from '../../Recommended/Recommended';
import { CookiePermission } from "../../cookie-permission/CookiePermission";
import { LoginContext } from '../../context/LoginContext';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase-config';

export default function ProductPage() {
  // Accessing the login context to check if the user is logged in
  const { isLoggedIn } = useContext(LoginContext);
  
  // Getting the product ID from the URL parameters
  let { id } = useParams();
  
  // State variables for the product data, loading status, and error message
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Using useEffect hook to fetch product data from Firestore when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Reference to the 'products' collection in Firestore
        const productsCollection = collection(db, 'products');
        
        // Fetching all documents from the 'products' collection
        const productsSnapshot = await getDocs(productsCollection);
        
        // Finding the product with the matching ID and storing it in state
        const foundItem = productsSnapshot.docs
          .map(doc => ({ ...doc.data(), id: doc.id }))
          .find(item => item.id === id);
        
        setProduct(foundItem);
      } catch (err) {
        // Storing error message in state if there's an issue fetching data
        setError(err);
      } finally {
        // Setting loading to false once data fetching is complete
        setLoading(false);
      }
    };

    // Calling the fetchProduct function to start fetching data
    fetchProduct();
  }, [id]);

  // Displaying a loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Displaying an error message if there was an issue fetching data
  if (error) {
    return <div>Error loading product</div>;
  }

  // Rendering the product page with fetched product data
  return (
    <div className='product-page'>
      <Header isLoggedIn={isLoggedIn} />
      <MainMenu />
      {/* Passing the fetched product data to the ProductPageItem component */}
      {product && (
        <ProductPageItem image={product.image} title={product.title} price={product.price} id={product.id} />
      )}
      <CookiePermission />
      {/* Passing the fetched product data to the Recommended component */}
      {product && (
        <Recommended image={product.image} title={product.title} price={product.price} id={product.id}/>
      )}
      <Footer />
    </div>
  );
}
