import { Link } from "react-router-dom";
import "./AccountPageNavbar.css";






export default function AccounPageNavbar(){




    return( 
    
    
    <nav className="account-page-navbar" >
        
        <Link className="account-category" to="../account">Account overview</Link>
        
        <Link className="account-category" to="./wishlist">Wishlist</Link>
        


    </nav>

    )
}