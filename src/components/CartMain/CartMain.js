import React from "react";
import "./CartMain.css"
import CartPageLeft from "./CartPageLeft";
import CartPageRight from "./CartPageRight";




function CartMain(){

    
    return(
    <div className="cart-main-container">

        <CartPageLeft/>

        <CartPageRight/>
        
    </div>
    )
}
export default CartMain;