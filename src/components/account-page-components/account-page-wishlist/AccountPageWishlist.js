import React,{ useEffect, useState } from "react";
import axios from "axios";
import WishListItem from "./WishlistItem";

import "./AccountPageWishlist.css";
import OneSet from "../../FeaturedSets/featured-sets-components/OneSet";
export default function AccountPageWishlist(){
    
    const [data,setData] = useState([{id:"",image:"",price:"",title:""}])
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetchWishlist();
        console.log(data);
      }, []);

    
     const fetchWishlist = async () => {
        try {
        const response = await axios.get('http://localhost:3010/api/user/wishlist/nuritest123@gmail.com');
        // console.log(response.data);
        setData(response.data)
        console.log(data)
        
        
        setTimeout(() => {
            setProducts(response.data.map(item => (
              
                <WishListItem id={item.id} image={item.image} title={item.title} price={item.price} />
              
            )));
          }, 500);
        
        } catch (error) {
        console.error('Error fetching wishlist:', error);
        }
    };
    // let products= data.map((item) =>{
    //     <OneSet id={item.id} image={item.image} title={item.title} price={item.price} />
    // })
    console.log(data)

    return( 
    
    
    <nav className="account-page-wishlist">
        <div className="wish-list-cont">
        <h1 id="wish-head">Wish list</h1>
        <div className="create-wish-list-cont">
            
            {products}
            <div>

            </div>
        </div>
        <div className="wish-list-support-block">
            <img className="top-right-img" srcSet="../assets/images/account-page/supportImage_newSophia.png"></img>
            <span className="">Support</span>
            <div className="support-block-seperator"></div>
            <div className="support-block-cont">
                <div className="support-block-row">
                    <a href="">Deliveries and Returns</a>
                    <a href="">FAQs</a>
                </div>
                <div className="support-block-row">
                    <a href="">Contact</a>
                    <a href="">Replacement Parts and Instructions</a>
                </div>
            </div>
        </div>
        </div>
    </nav>

    )
}