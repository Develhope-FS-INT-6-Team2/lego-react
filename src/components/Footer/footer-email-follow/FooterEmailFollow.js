import React from "react";


function FooterEmailFollow(){

    return(
        <div className="footer-sub-and-follow">
          <div className="footer-sub-email">
            <h3>SUBSCRIBE TO DIGITAL MARKETING EMAILS</h3>
            <div className="footer-email-input-area">
              <input
                type="email"
                className="footer-email"
                onclick="changeEmailInputValue('emailDesktop')"
                value="Your email adress"
              />
              <button
                className="email-button"
                onclick="addEmailtoContainer('emailDesktop')"
              >
                <img src="../assets/images/featured-sets/right-arrow.png" />
              </button>
            </div>
          </div>
          <div className="footer-follow-us">
            <div>
              <h3>FOLLOW US</h3>
              <div className="footer-follow-us-platforms">
                <img src="../assets/images/footer/facebook.svg" />
                <img src="../assets/images/footer/twitter.svg" />
                <img src="../assets/images/footer/instagram.svg" />
                <img src="../assets/images/footer/youtube.svg" />
              </div>
            </div>
          </div>
        </div>
    )
}
export default FooterEmailFollow;