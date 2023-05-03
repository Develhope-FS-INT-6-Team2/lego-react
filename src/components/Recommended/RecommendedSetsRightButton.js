import React from "react";
import { useSwiper } from "swiper/react";



function RecommendedSetsRightButton(){
    const swiper = useSwiper();
    return(
        
                <button 
                    id="recommended-sets-right" 
                    class="recommended-sets-right-arrow"
                    onClick={()=>swiper.slideNext()}
                    >
                    <img
                        src="../assets/images/featured-sets/right-arrow.png"
                        alt="right-arrow"
                    />
                </button>
    )
}
export default RecommendedSetsRightButton;