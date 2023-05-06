import React from "react";
import "./CookiePermission.css";

export function CookiePermission() {
    return (
        <div id="cookie-permission-container" className="cookie-permission-container">
            <div className="cookie-permission-content">
                <div className="cookie-image">
                    <img src="../assets/images/cookie-permission/cookie-permission-left.png" alt="cookies"/>
                </div>
                <div className="cookie-permission-text-container">
                    <div className="cookie-permission-text-section">
                        <h2>Help us build the most incredible personalised experience for you</h2>
                        <p>Help us build the most amazing personalised experience for you! 
                            Give us your permission to use site cookies and we’ll create you an experience you’re sure to love!</p>
                        <div className="cookie-links">
                            <a href="cookie-permission-container">Let's do this</a>
                            <a href="cookie-permission-container">Tell me more</a>
                        </div>
                    </div>

                    <div id="cookie-img-left" className="cookie-image">
                        <img src="../assets/images/cookie-permission/cookie-permission-right.png" alt="cookies"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
