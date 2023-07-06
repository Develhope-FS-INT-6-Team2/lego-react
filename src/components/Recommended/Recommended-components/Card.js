import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext'; // Provide the correct path to your CartContext.js file
import heart from "../images/icons8-favorite-48.png"

function Card(props){
    let { image, title, price, id } = props;
    const { addToCart } = useContext(CartContext); // Accessing addToCart function from context
    
    return(
        <div className="one-product">
            <a href={"http://localhost:3000/product/"+id} className="recommended-product-upper-section">
                <img src={heart} alt="wishlist-heart" className="product-icon"/>
                <div className="img-sec">
                <img 
                    src={image} 
                    alt="recommended-product-img"/>
                </div>
                <p>New</p>
            </a>
            <h2>{title}</h2>
            <h2 className="price">{price}</h2>
            <input
                className="add-to-bag-button"
                type="button"
                value="Add to Bag"
                onClick={() => addToCart(id)} // Adding product to cart on button click
            />
        </div>
    );
}
export default Card;
