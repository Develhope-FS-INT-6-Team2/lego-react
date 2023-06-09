import "./AccountPageWishlist.css";
export default function AccountPageWishlist(){
   
    
    return( 
    
    
    <nav className="account-page-navbar">
        <div className="wish-list-cont">
        <h1 id="wish-head">Wish list</h1>
        <div className="create-wish-list-cont">
            <img srcSet="../assets/images/account-page/fairy_girl.png"></img>
            <div className="create-wish-list">
                <div>
                    <h1>Your wish is our command</h1>
                    <p>Create a new wish list or manage your current lists here. 
                        You can add or remove products, name the lists to make it easier to track, 
                        and even create and save separate wish lists for different occasions or events.</p>
                </div>
                <button className="new-list-button">
                  + Create new list
                </button>
            </div>
        </div>
        <div className="wish-list-support-block">
            <img className="top-right-img" srcSet="../assets/images/account-page/supportImage_newSophia.png"></img>
            <span className="">Support</span>
            <div className="support-block-seperator"></div>
            <div className="support-block-cont">
                <div className="support-block-row">
                    <a href="">Deliveries and Returns</a>
                    <a href="">FAQs</a>
                </div>
                <div className="support-block-row">
                    <a href="">Contact</a>
                    <a href="">Replacement Parts and Instructions</a>
                </div>
            </div>
        </div>
        </div>
    </nav>

    )
}