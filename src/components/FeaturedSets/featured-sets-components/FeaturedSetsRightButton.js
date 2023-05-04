import React from "react";
import { useSwiper } from "swiper/react";



function FeaturedSetsRightButton(){
    const swiper = useSwiper();
    return(
        
                <button 
                    id="featured-sets-right" 
                    class="featured-sets-right-arrow"
                    onClick={()=>swiper.slideNext()}
                    >
                    <img
                        src="../assets/images/featured-sets/right-arrow.png"
                        alt="right-arrow"
                    />
                </button>
    )
}
export default FeaturedSetsRightButton;