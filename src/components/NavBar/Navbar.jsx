import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const type = ["shop", "mens", "womens", "kids"];

  const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {type.map((item,index) => {
          return (
            <Link style={{textDecoration:'none'}} to={`/${item}`}>
            <li
              onClick={() => {
                setMenu(item);
              }}
            >
              {item}
              {menu === item ? <hr  /> : <></>}
            </li>
            </Link>
          );
        })}





       { /* old code below */}


        {/* <li
        onClick={() => {
          setMenu("shop");
        }}
      >
        <Link to="/">Shop</Link>
        {menu === "shop" ? <hr /> : <></>}{" "}
      </li>
        <li
        onClick={() => {
          setMenu("mens");
        }}
      >
        <Link to="/mens">Mens</Link>
        {menu === "mens" ? <hr /> : <></>}
      </li>
      <li
        onClick={() => {
          setMenu("womens");
        }}
      >
        <Link to="/womens">Womens</Link>
        {menu === "womens" ? <hr /> : <></>}
      </li>
      <li
        onClick={() => {
          setMenu("kids");
        }}
      >
        <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}{" "}
      </li> */}
      
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
}
