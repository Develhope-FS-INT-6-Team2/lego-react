

export default function AccountOverview(){

    return( 
    
    
    <nav className="account-page-navbar" style={{width: "80%", backgroundColor: "green"}}>
        
        <h1>My Account</h1>
        <div className="vip-card-cont">

            <div className="vip-card-left">

                <div className="vip-card-img">
                    <img srcSet="../assets/images/account-page/VIP-Logged-Out-figure.png"></img>
                </div>

                <div className="free-vip-card">
                    <p>It's FREE to be VIP</p>
                    <p>More ways to earn points and get even more rewards.</p>
                    <img srcSet="../assets/images/account-page/VIP-logo.png"></img>
                </div>

            </div>
            <div className="vip-card-right">

                <span>Get rewarded with LEGO VIP</span>

                
            </div>
        </div>
        
    </nav>

    )
}