import React from "react";

function OneSet(props){
    let{images, titles, prices} = props;
    return(
        <div className="one-product">
            <div className="product-upper-section">
                <p>Add to wish list</p>
                <div className="img-sec">
                <img 
                    src={images} 
                    alt="razor-crest"/>
                </div>
                <p>Hard to find</p>
            </div>
            <h2>{titles}</h2>
            <h2 className="price">{prices}</h2>
            <input
            className="add-to-bag-button"
            type="button"
            value="Add to Bag"
            />
        </div>
    );

}
export default OneSet;