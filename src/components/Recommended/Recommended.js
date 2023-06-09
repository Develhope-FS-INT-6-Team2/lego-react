import { useState ,useEffect} from "react";
import axios from "axios";
import React  from "react";
import "./Recommended.css"

import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import Card from './Recommended-components/Card';

import RecommendedSetsLeftButton from './Recommended-components/RecommendedSetsLeftButton';
import RecommendedSetsRightButton from './Recommended-components/RecommendedSetsRightButton';


function Recommended() {
  let [data,setData] = useState([{id:"",image:"",price:"",title:""}])
    
  useEffect(() => {
      fetchData();
      
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3010/api/product/products');
        setData(response.data.slice(12,24));
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  const products = data.map(item => (
    <SwiperSlide>
      <Card image={item.image} title={item.title} price={item.price} id={item.id} />
    </SwiperSlide>
  ));

  return (
    <div className="recommended-sets">
      <h1>Recommended For You</h1>
      <div id="recommended-card-container" className="recommended-sets-slider">
        <Swiper
          freeMode={true}
          grabCursor={false}
          navigation={{
            nextEl: ".recommended-sets-right-arrow",
            prevEl: ".recommended-sets-left-arrow"
          }}
          modules={[FreeMode, Navigation]}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 20
            },
            600: {
              slidesPerView: 2.2,
              spaceBetween: 20
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 18
            }
          }}
        >
          {products}
          <RecommendedSetsLeftButton/>
          <RecommendedSetsRightButton/>
        </Swiper>
      </div>

    
    </div>
  );
}


export default Recommended;