import React from "react";
import "./navbar.css";
import cart from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");

  return (
    <div className="navbar">
      <h1>
        FashionVerse <span>•</span>
      </h1>
      <div className="links">
        <h5
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black'}} to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </h5>
        <h5
          onClick={() => {
            setmenu("men");
          }}
        >
          <Link style={{ textDecoration: 'none' , color: 'black'}} to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </h5>
        <h5
          onClick={() => {
            setmenu("women");
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black'}} to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </h5>
        <h5
          onClick={() => {
            setmenu("kids");
          }}
        >
          <Link style={{ textDecoration: 'none',  color: 'black'}} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}
        </h5>
      </div>
      <div className="cart">
       <Link  to="/login"><button>Login</button></Link> 
       <Link to={"/cart"}><img src={cart} alt="cart_icon"/></Link>  
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
