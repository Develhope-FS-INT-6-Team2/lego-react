import React, { useContext } from "react";
import { CartContext } from '../../CartMain/CartContext';
import heart from "../images/icons8-favorite-48.png";

function Card(props) {
    const { image, title, price, id } = props;
    const { addToCart, products } = useContext(CartContext);

    console.log("Card component received product ID:", id);
    console.log("All products in context:", products);

    const product = products.find(product => String(product.id) === String(id));

    console.log("Product found in Card component with matching ID:", product);
    
    return (
        <div className="one-product">
            <a href={"/product/" + id} className="recommended-product-upper-section">
                <img src={heart} alt="wishlist-heart" className="product-icon" />
                <div className="img-sec">
                    <img src={image} alt="recommended-product-img" />
                </div>
                <p>New</p>
            </a>
            <h2>{title}</h2>
            <h2 className="price">{price}</h2>
            <input
                className="add-to-bag-button"
                type="button"
                value="Add to Bag"
                onClick={() => {
                    console.log("Attempting to add to cart with product:", product);
                    addToCart(product);
                }}
            />
        </div>
    );
}

export default Card;
