import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2023 Lego. All rights reserved.</p>
      </div>
    </footer>
  );
};
import React from "react";
import FooterMain from "./footer-main/FooterMain";
import FooterEmailFollow from "./footer-email-follow/FooterEmailFollow";
import FooterLinks from "./footer-links/FooterLinks";
import "./footer.css";

function Footer(){
    return(
        <footer className="footer-container">
            <FooterMain/>
            <FooterEmailFollow/>
            <FooterLinks/>
        </footer>
    )
}
export default Footer;