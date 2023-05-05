import React from "react";
import heart from "../images/icons8-favorite-48.png"

function Card(props){
    let{image, title, price} = props;
    return(
        <div className="one-product">
            <div className="recommended-product-upper-section">
                <img src={heart} alt="wishlist-heart" className="product-icon"/>
                <div className="img-sec">
                <img 
                    src={image} 
                    alt="recommended-product-img"/>
                </div>
                <p>New</p>
            </div>
            <h2>{title}</h2>
            <h2 className="price">{price}</h2>
            <input
            className="add-to-bag-button"
            type="button"
            value="Add to Bag"
            />
        </div>
    );

}
export default Card;