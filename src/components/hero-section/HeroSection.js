import React from "react";
import "./HeroSection.css";
//images
import landRoverMobile from "./images/landRoverMobile.jpg";
import landRoverDesktop from "./images/landRoverDesktop.jpg";
import rightArrow from "./images/rightArrow.png";
import landRoverIcon from "./images/landRoverIcon.jpg";

function HeroSection(){
    return(
    <div class="hero-section-container">
        <div class="hero-section-img-container">
            <img
                class="small-img-hero-section"
                src={landRoverMobile}
                alt="hero-section-img"
            />
            <img
                class="big-img-hero-section"
                src={landRoverDesktop}
                alt="hero-section-img"
            />
        </div>

        <div class="hero-section-text">
            <img src={landRoverIcon}/>
            <h1>Go above and beyond</h1>
            <h2>
                Build your sense of adventure with the new Land Rover
                <br />
                Classic Defender 90.
            </h2>
            <div class="hero-section-buttons">
                <a href="#">
                    <p>Shop now</p>
                    <img
                        src={rightArrow}
                        alt="right-arrow"
                    />
                </a>
                <a href="#">
                    <p>Learn more</p>
                    <img
                        src={rightArrow}
                        alt="right-arrow"
                    />
                </a>
            </div>
        </div>   
    </div>
    )
}
export default HeroSection;