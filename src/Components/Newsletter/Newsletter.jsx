import React from "react";
import "./newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Subscribe to our newsletter to get updated</h1>
      <h5>Connect with us and get updated on mail</h5>
      <div className="email">
        <input type="email" placeholder="Enter your email" name="email" id="" />
        <button>Subscribe</button>
          </div>
    </div>
  );
};

export default Newsletter;
