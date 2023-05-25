import React from "react";

function OneSet(props){
    let{image, title, price, id} = props;
    return(
        <div  className="one-product">
            <a href={"./product/"+id} className="product-upper-section">
                <p>Add to wish list</p>
                <div className="img-sec">
                <img 
                    src={image} 
                    alt="razor-crest"/>
                </div>
                <p>Hard to find</p>
            </a>
            <a className="product-title" href={"./product/:"+id}><h2>{title}</h2></a>
            <h2 className="price">{price}$</h2>
            <input
            className="add-to-bag-button"
            type="button"
            value="Add to Bag"
            />
        </div>
    );
}
export default OneSet;