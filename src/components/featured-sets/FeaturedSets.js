import React from "react";
import FeaturedSetItem from "./featured-set-item/FeaturedSetItem";
import "./FeaturedSets.css"

function FeaturedSets(){

    return(
    <div className="featured-sets-container">
        <header>Featured Sets</header>

        <div className="featured-sets-scrollbar">
            <div className="featured-sets-buttons">
                <button id="featured-sets-left" className="featured-sets-arrow">
                    <img
                        src="../assets/images/featured-sets/left-arrow.png"
                        alt="left-arrow"
                    />
                </button>
            </div>

            <div className="featured-sets-scrollbar-items">
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
                <FeaturedSetItem/>
            </div>

            <div className="featured-sets-buttons">
                <button
                    id="featured-sets-right"
                    className="featured-sets-arrow"
                >
                    <img
                        src="../assets/images/featured-sets/right-arrow.png"
                        alt="left-arrow"
                    />
                </button>
            </div>
        </div>
    </div>
    )
}
export default FeaturedSets;