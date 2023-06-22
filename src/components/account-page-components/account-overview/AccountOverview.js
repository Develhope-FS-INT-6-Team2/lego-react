import "./AccountOverview.css";





export default function AccountOverview(){

    return( 
    
    
    <nav className="account-overview-container" >
        
        <h1>My Account</h1>
        <div className="vip-card-container">

            <div className="vip-card-left">
                <div className="vip-card-left-img">
                    <img srcSet="../assets/images/account-page/VIP-Logged-Out-figure.png"></img>
                </div>
                
                <div className="free-vip-card">
                    <h2>It's FREE to be VIP</h2>
                    <p>More ways to earn points and get even more rewards.</p>
                    <img srcSet="../assets/images/account-page/VIP-logo.png"></img>
                </div>

            </div>
            <div className="vip-card-right">

                <h2>Get rewarded with LEGO VIP</h2>
                <button className="account-vip-button">Join VIP</button>

                
            </div>
        </div>
        <h1>Latest Order</h1>
        <div className="order-container">
            <p>You currently have no open orders</p>
            <button className="order-start-shopping-button">Start Shopping</button>
        </div>
        
    </nav>

    )
}