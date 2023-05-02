import React from "react";

function OneSet(props){
    let{image, title, price} = props;
    return(
        <div className="one-product">
            <div className="product-upper-section">
                <p>Add to wish list</p>
                <div className="img-sec">
                <img 
                    src={image} 
                    alt="razor-crest"/>
                </div>
                <p>Hard to find</p>
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
export default OneSet;