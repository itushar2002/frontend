import React from "react";
import "./footer.css";
import insta_icon from "../Assets/instagram_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
const Footer = () => {
  return (
    <div className="footer">
          <div className="logo">
              <h1>FasionVerse <span>•</span></h1>
          </div>
          <ul className="footer-links">
              <li>Company</li>
              <li>Product</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
          <div className="icons">
              <div className="insta">
                  <img src={insta_icon} alt="" />
              </div>
              <div className="whatsapp-logo">
                  <img src={whatsapp_icon} alt="" />
              </div>
              <div className="icons-container">
                  <img src={pinterest_icon} alt="" />
              </div>
          </div>
    </div>
  );
};
export default Footer;
