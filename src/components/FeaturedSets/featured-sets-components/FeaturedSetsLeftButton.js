import React from "react";
import { useSwiper } from "swiper/react";



function FeaturedSetsLeftButton(){
    const swiper = useSwiper();
    return(
        
                <button 
                    id="featured-sets-left" 
                    class="featured-sets-left-arrow"
                    onClick={()=>swiper.slidePrev()}
                    >
                    <img
                        src="../assets/images/featured-sets/left-arrow.png"
                        alt="left-arrow"
                    />
                </button>
    )
}
export default FeaturedSetsLeftButton;