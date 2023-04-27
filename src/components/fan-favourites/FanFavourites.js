import React from "react";
import "./FanFavourites.css";

import castleBig from './images/castleBig.png';
import castleSmall from './images/castleSmall.png';
import landRoverBig from './images/landRoverBig.png';
import landRoverSmall from './images/landRoverSmall.png';

/* <img src={myImage} alt="My Image" /> */

function FanFavourites() {

    return(
    <div class="fan-favourites-container">
        <h1>Fan Favourites</h1>
        <div class="fan-favourites-items">
            <div class="fan-favourites-one-item">
                <a href="#"> 
                    <img 
                        src={castleBig}
                        alt="castle-desktop"/>
                    <img
                        src= {castleSmall}
                        alt="castle-mobile"
                    />
                    <div class="fan-favourites-item-text">
                        <h2>Go above and beyond</h2>
                        <p>
                            Build your sense of adventure with the new Land
                            Rover Classic Defender 90.
                        </p>
                        <h3>Shop now</h3>
                    </div>
                </a>
            </div>
            <div class="fan-favourites-one-item">
                <a class="fan-favourites-white-text" href="#">
                    <img
                        src={landRoverBig}
                        alt="land-rover-desktop"
                    />
                    <img
                        src={landRoverSmall}
                        alt="land-rover-mobile"
                    />
                    <div
                        class="fan-favourites-item-text"
                        id="fan-favourites-white-text"
                    >
                        <h2>Go above and beyond</h2>
                        <p>
                            Build your sense of adventure with the new Land
                            Rover Classic Defender 90.
                        </p>
                        <h3>Shop now</h3>
                    </div>
                </a>
            </div>
        </div>
    </div>
    )
}
export default FanFavourites;