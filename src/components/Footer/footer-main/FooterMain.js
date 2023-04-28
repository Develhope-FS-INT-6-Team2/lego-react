import {React, useRef} from "react";


function FooterMain() {

  //part for the email input
  const emailRef = useRef("");

  function takeEmail(){
    if (emailRef.current.value === "example@email.com"){
      console.log("email")
    }
    else{
      console.log({email: emailRef.current.value})
    }
    emailRef.current.value = ""
  }

  //part for the main sections ont he mobile version

  //variables for the main sections
  const list1Ref = useRef(null);
  const list2Ref = useRef(null);
  const list3Ref = useRef(null);
  const list4Ref = useRef(null);


  function handleButtonClick(buttonId) {
    // opening the correct list for each buttons
    if (window.innerWidth <= 900){
        switch (buttonId) {
        case "button1":
            list1Ref.current.classList.toggle("show");
            break;

        case "button2":
            list2Ref.current.classList.toggle("show");
            break;

        case "button3":
            list3Ref.current.classList.toggle("show");
            break;

        case "button4":
            list4Ref.current.classList.toggle("show");
            break;

        default:
            break;
        }
    }
}



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
                ref={emailRef}
                type="email"
                className="footer-email"
                defaultValue="example@email.com"
                onClick={takeEmail}
              />
              <button
                className="email-button"
                type="submit"
                onClick={takeEmail}
              >
                <img src="../assets/images/featured-sets/right-arrow.png" />
              </button>
            </div>
          </div>
          <div className="footer-main-sections">
            <div className="footer-main-about-us-section">
              <h4 id="button1" onClick={() => handleButtonClick("button1")}>
                ABOUT US
              </h4>
              <ul className="main-section-list1" ref={list1Ref}>
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
              <h4 id="button2" onClick={() => handleButtonClick("button2")}>
                SUPPORT US
              </h4>
              <ul className="main-section-list2" ref={list2Ref}>
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
              <h4 id="button3" onClick={() => handleButtonClick("button3")}>
                ATTRACTIONS
              </h4>
              <ul className="main-section-list3" ref={list3Ref}>
                <li><a href="#">LEGO® House</a></li>
                <li><a href="#">LEGOLAND® Parks</a></li>
                <li><a href="#">LEGOLAND Discovery Centers</a></li>
              </ul>
            </div>
            <div className="footer-main-made-from-us-section">
              <h4 id="button4" onClick={() => handleButtonClick("button4")}>
                MORE FROM US
              </h4>
              <ul className="main-section-list4" ref={list4Ref}>
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