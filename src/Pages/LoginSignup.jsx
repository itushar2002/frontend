import React from "react";
import "./stylesheets/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="login-signup-page">
      <div className="login-signup-container">
        <h1>Sign up</h1>
        <div className="fields">
          <input type="text"  placeholder="Enter Your Name"/>
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button>Continue</button>
        </div>
      <p>Already have an account?<span>Login in here</span></p>
      </div>
    </div>
  );
};

export default LoginSignup;
