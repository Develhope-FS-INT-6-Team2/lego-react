import React from "react";
import { useSwiper } from "swiper/react";

function RecommendedSetsLeftButton() {
  const swiper = useSwiper();

  return (
    <button
      id="recommended-sets-left"
      className="recommended-sets-left-arrow"
      onClick={() => swiper.slidePrev()}
    >
      <img src="../assets/images/featured-sets/left-arrow.png" alt="left-arrow" />
    </button>
  );
}

export default RecommendedSetsLeftButton;