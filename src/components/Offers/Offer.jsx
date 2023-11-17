import React from "react";
import "./Offer.css";
import exclusive_image from "../assets/exclusive_image.png";
import { Link } from "react-router-dom";

export default function Offer() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for U</h1>
        <p>Best Sellers</p>
        <Link to='/shop/offers'><button>Check now</button></Link> 
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}
