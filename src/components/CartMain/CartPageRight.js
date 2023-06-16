import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";



function CartPageRight(){

    
    return(
    

        <div className="cart-main-right">
            <div className="cart-right-items">

            
            <h1>Order Summary</h1>
            <h3>Add a promo / VIP discount code</h3>

            <div className="cart-info">
                <h3>Order value 3 items</h3>  {/* this number will be dynamic */}
                <h3>103.98$</h3> {/* this price will be dynamic */}
            </div>

            <div className="congrats-green-text">
                <h3>Congratulations you qualify for FREE delivery</h3>  
                <AiOutlineCheck/>
            </div>

            <div className="total-info">
                <h1>Order Total</h1>
                <h1>103.98$</h1> {/* this price will be dynamic */}
            </div>

            <Link to="/LoginPage" className="checkout">
                <button>
                    <BsCheckCircle className="checkout-icon"/>
                    <h1>Checkout Securely</h1>
                    
                </button>
                
            </Link>

            <h1>Express Checkout</h1>
            <p>All order details will be taken directly from your payment 
                provider, please ensure you select the correct addresses before submitting your order. 
                From the payment provider, you will be directed to the order confirmation page. If you 
                have a discount code, please choose 'Checkout Securely'.</p>

            <Link to="/LoginPage" className="checkout">
                <button className="paypal-button">
                <h1>Pay with Paypal</h1>
                <BsCheckCircle className="checkout-icon"/>
                </button>
            </Link>

             </div>

        </div>

      


    )
}
export default CartPageRight;