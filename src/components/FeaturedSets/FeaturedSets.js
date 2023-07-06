import React, { useState ,useEffect, useContext} from "react";
import axios from "axios";
import "./FeaturedSets.css";

import OneSet from "./featured-sets-components/OneSet";
import FeaturedSetsLeftButton from "./featured-sets-components/FeaturedSetsLeftButton";
import FeaturedSetsRightButton from "./featured-sets-components/FeaturedSetsRightButton";
import { LoginContext } from '../context/LoginContext';
//library
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";


function FeaturedSets(){
    let [data,setData] = useState([{id:"",image:"",price:"",title:""}])
    const { userId } = useContext(LoginContext);
    useEffect(() => {
        fetchData();
        console.log(userId)
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3010/api/product/products');
          setData(response.data.slice(0,12));
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    let products = data.map(item =>(
        <SwiperSlide>
            <OneSet id={item.id} image={item.image} title={item.title} price={item.price} />
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