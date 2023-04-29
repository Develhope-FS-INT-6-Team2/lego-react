import React from "react";

function FeaturedSetItem(){
    return(
        <div className="one-featured-set" id="one-featured-set">
            <div href="#one-featured-set" className="featured-sets-img-section">
                <div className="featured-sets-add-to-wish-list">
                    <img
                        src="../assets/images/featured-sets/blue-heart.png"
                        alt="blue-heart"/>
                    <p>Add to wish list</p>
                </div>
                <a href="#one-featured-set" className="featured-set-img">
                    <img 
                        src="../assets/images/featured-sets/the-razor-crest.png" 
                        alt="razor-crest"/>
                </a>

                <p className="featured-set-img-section-text">Hard to find</p>
            </div>
            <div className="featured-sets-under-img-text">
                <a href="#one-featured-set">Star Lord Helmet</a>
                <p>519.99€</p>
            </div>
            <input
                className="featured-sets-add-to-bag-button"
                type="button"
                value="Add to Bag"
            />
        </div>
    )
}
export default FeaturedSetItem;