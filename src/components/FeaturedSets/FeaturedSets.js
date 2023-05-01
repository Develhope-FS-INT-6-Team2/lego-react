import React from "react";
import OneSet from "./OneSet";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "./FeaturedSets.css";
import "swiper/css/navigation";
import sets from"./FeaturedSetsProducts" ;

function FeaturedSets(){

     let products = sets.map(item =>(
        <SwiperSlide>
            <OneSet images={item.image} titles={item.title} prices={item.price} />
        </SwiperSlide>
    ))


    return(
    <div className="featured-sets">
        <h1>Featured Sets</h1>
        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode,Navigation]}
            navigation
            className="featured-sets-slider"
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
                0:{
                    slidesPerView:1.3,
                    spaceBetween:20
                },
                600:{
                    slidesPerView:2.3,
                    spaceBetween:20
                },
                
                1200:{
                    slidesPerView:4,
                    spaceBetween:30
                },
                
                
            }}
        >
              {products}
        </Swiper>
    </div>
    )
}
export default FeaturedSets;