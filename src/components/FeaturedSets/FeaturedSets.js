import React from "react";
import "./FeaturedSets.css";

import OneSet from "./featured-sets-components/OneSet";
import FeaturedSetsLeftButton from "./featured-sets-components/FeaturedSetsLeftButton";
import FeaturedSetsRightButton from "./featured-sets-components/FeaturedSetsRightButton";
import data from"./featured-sets-components/Products.json" ;

//library
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";


function FeaturedSets(){

    let products = data.sets.map(item =>(
        <SwiperSlide>
            <OneSet image={item.image} title={item.title} price={item.price} />
        </SwiperSlide>
    ))


    return(
    <div className="featured-sets">
        <h1>Featured Sets</h1>
        <Swiper
            freeMode={true}
            grabCursor={true}
            navigation={{
                nextEl:".featured-sets-right-arrow",
                prevEl:".featured-sets-left-arrow"
            }}
            modules={[FreeMode,Navigation]}
            className="featured-sets-slider"
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
                    spaceBetween:10
                },
                
                
            }}
        >
              {products}
              
            <FeaturedSetsLeftButton />
            <FeaturedSetsRightButton />
        </Swiper>
    </div>
    )
}
export default FeaturedSets;