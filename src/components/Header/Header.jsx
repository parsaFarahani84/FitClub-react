import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo" />

      <ul className="header-menu">
        <a href="#home">
          {" "}
          <li className="list">Home</li>
        </a>
        <a href="#programs">
          <li className="list">Programs</li>
        </a>
        <a href="#why">
          <li className="list">Why Us</li>
        </a>
        <a href="#plan">
          <li className="list">Plans</li>
        </a>
        <a href="#testimonials">
          <li className="list">Testimonials</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
