import React from "react";
import "./BannerTwo.css";

function BannerTwo(){
    return(
    <div className="banner-two-container" id="BannerTwo">
        <div className="banner-two-upside">
            <div className="banner-two-upside-img">
                <img 
                    src="../assets/images/banner-two/banner2-up.png"
                    alt="Banner2 desktop img"
                />
                <img
                    src="../assets/images/banner-two/40588-GWP-202304-Home-Hero-Short-Small.png"
                    alt="Banner2 mobile img"
                />
            </div>
            <div className="banner-two-upside-text">
                <p>Get a Flowerpot gift with purchases of £130 or more*</p>
                <a href="#BannerTwo">
                    <p>Shop now</p>
                    <img
                        src="../assets/images/hero-and-category-navbar/right-arrow.png"
                        alt="right-arrow"
                    />
                </a>
            </div>
        </div>
        <div className="banner-two-upside">
            <div className="banner-two-upside-img">
                <img 
                    src="../assets/images/banner-two/banner2-down.png"
                    alt="Banner2 desktop img"
                />
                <img
                    src="../assets/images/banner-two/downside-mobile.png"
                    alt="Banner2 mobile img"
                />
            </div>
            <div className="banner-two-downside-text">
                <p>
                    Get this Off-Road Ambulance gift with purchases over
                    £95*
                </p>
                <a href="#BannerTwo">
                    <p>Shop now</p>
                    <img
                        src="../assets/images/hero-and-category-navbar/right-arrow.png"
                        alt="right-arrow"
                    />
                </a>
            </div>
        </div>
    </div>
    )
}
export default BannerTwo;