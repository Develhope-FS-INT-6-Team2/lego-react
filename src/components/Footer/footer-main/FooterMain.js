import React from "react";


function FooterMain() {

    return(
        <div className="footer-main">
          <div className="footer-main-part-logo">
            <img src="../assets/images/lego-logo.svg" alt="lego-logo" />
            <div className="footer-location"><a>United Kingdom</a></div>
            <ul>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">LEGO Catalogues</a></li>
              <li><a href="#">Find a LEGO Store</a></li>
            </ul>
          </div>
          <div className="footer-sub-email">
            <h3>SUBSCRIBE TO DIGITAL MARKETING EMAILS</h3>
            <div className="footer-email-input-area">
              <input
                type="email"
                className="footer-email"
                onclick="changeEmailInputValue('emailMobile')"
                value="Your email adress"
              />
              <button
                className="email-button"
                onclick="addEmailtoContainer('emailMobile')"
              >
                <img src="../assets/images/featured-sets/right-arrow.png" />
              </button>
            </div>
          </div>
          <div className="footer-main-sections">
            <div className="footer-main-about-us-section">
              <h4 id="button1" onclick="handleButtonClick('button1')">
                ABOUT US
              </h4>
              <ul className="main-section-list1">
                <li><a href="#">About the LEGO Group</a></li>
                <li><a href="#">LEGO® news</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Supply chain transparency statement</a></li>
                <li><a href="#">LEGO product certification</a></li>
                <li><a href="#">LEGO Jobs</a></li>
                <li><a href="#">LEGO Compliance Line</a></li>
              </ul>
            </div>
            <div className="footer-main-support-section">
              <h4 id="button2" onclick="handleButtonClick('button2')">
                SUPPORT US
              </h4>
              <ul className="main-section-list2">
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Find building instructions</a></li>
                <li><a href="#">Replacement parts</a></li>
                <li><a href="#">Deliveries and returns</a></li>
                <li><a href="#">Payment methods</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Product recalls</a></li>
              </ul>
            </div>
            <div className="footer-main-attractions-section">
              <h4 id="button3" onclick="handleButtonClick('button3')">
                ATTRACTIONS
              </h4>
              <ul className="main-section-list3">
                <li><a href="#">LEGO® House</a></li>
                <li><a href="#">LEGOLAND® Parks</a></li>
                <li><a href="#">LEGOLAND Discovery Centers</a></li>
              </ul>
            </div>
            <div className="footer-main-made-from-us-section">
              <h4 id="button4" onclick="handleButtonClick('button4')">
                MORE FROM US
              </h4>
              <ul className="main-section-list4">
                <li><a href="#">LEGO® LIFE</a></li>
                <li><a href="#">LEGO Education</a></li>
                <li><a href="#">LEGO Ideas</a></li>
                <li><a href="#">LEGO Foundation</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Student Offers</a></li>
                <li><a href="#">LEGO® Braille Bricks</a></li>
              </ul>
            </div>
          </div>
        </div>
    )
};
export default FooterMain;