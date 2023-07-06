import React from "react";

function WishListItem(props){
    let{image, title, price, id} = props;

    return(
        <div className="wishlist-one-item">
            <a href={"/product/"+id} className="wishlist-one-item-img">
                <img src={image} className="wishlist-one-item-img"/>
            </a>
            <section className="wishlist-one-item-info">
                <h3>{title}</h3>
                <div>
                    <h3>{price}</h3>
                    <button>Delete</button>
                </div>
                
            </section>

        </div>
    )
}
export default WishListItem;