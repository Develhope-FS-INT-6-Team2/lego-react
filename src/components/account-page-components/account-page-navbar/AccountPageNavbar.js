import { Link } from "react-router-dom";

export default function AccounPageNavbar(){




    return( 
    
    
    <nav className="account-page-navbar" style={{width: "20%", backgroundColor: "yellow"}}>
        
        <Link to="../account">account overview</Link>
        <br/>
        <br/>
        <br/>
        <Link to="./wishlist">wishlist</Link>
        <p>other links</p>
        <p>other links</p>
        <p>other links</p>
        <p>other links</p>
        <p>other links</p>


    </nav>

    )
}