import React from "react";
import Card from "./Card.js";
import "./Recommended.css";
import sets from"./RecommendedSetsProducts.js" ;

import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import RecommendedSetsLeftButton from "./RecommendedSetsLeftButton";
import RecommendedSetsRightButton from "./RecommendedSetsRightButton";


function Recommended(){

    let products = sets.map(item =>(
       <SwiperSlide>
           <Card image={item.image} title={item.title} price={item.price} />
       </SwiperSlide>
   ))


   return(
   <div className="recommended-sets">
       <h1>Recommended For You</h1>
       <Swiper
           freeMode={true}
           grabCursor={true}
           navigation={{
               nextEl:".recommended-sets-right-arrow",
               prevEl:".recommended-sets-left-arrow"
           }}
           modules={[FreeMode,Navigation]}
           className="recommended-sets-slider"
           slidesPerView={4}
           spaceBetween={10}
           breakpoints={{
               0:{
                   slidesPerView:1.3,
                   spaceBetween:20
               },
               600:{
                   slidesPerView:2.2,
                   spaceBetween:20
               },
               900:{
                   slidesPerView:2.5,
                   spaceBetween:30
               },
               
               1200:{
                   slidesPerView:4,
                   spaceBetween:18
               },
               
               
           }}
       >
             {products}
             
           
       </Swiper>
       <RecommendedSetsLeftButton />
           <RecommendedSetsRightButton />
   </div>
   )
}
export default Recommended;