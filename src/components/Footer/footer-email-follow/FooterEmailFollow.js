import {React, useRef} from "react";


function FooterEmailFollow(){
  const emailRef = useRef("");

  function takeEmail(){
    if (emailRef.current.value === "example@email.com"){
      console.log("not valid")
    }
    else{
      console.log({email: emailRef.current.value})
    }
    emailRef.current.value = ""
  }

    return(
        <div className="footer-sub-and-follow">
          <div className="footer-sub-email">
            <h3>SUBSCRIBE TO DIGITAL MARKETING EMAILS</h3>
            <div className="footer-email-input-area" >
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