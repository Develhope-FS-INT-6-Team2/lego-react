import React, { useContext } from "react";
import "./CartMain.css"
import CartPageLeft from "./CartPageLeft";
import CartPageRight from "./CartPageRight";
import AllProductsPage from "./AllProductsPage";
import { CartContext } from "./CartContext"; // the path may be different based on your project structure

function CartMain(){
    const { cartItems, removeFromCart, updateCartItem } = useContext(CartContext);
    
    return(
        <div className="cart-main-container">
            <CartPageLeft/>
            <CartPageRight/>
            
        </div>
    )
}
export default CartMain;
