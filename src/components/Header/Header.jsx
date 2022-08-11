import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo" />

      <ul className="header-menu">
        <li className="list">Home</li>
        <li className="list">Programs</li>
        <li className="list">Why Us</li>
        <li className="list">Plans</li>
        <li className="list">Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
