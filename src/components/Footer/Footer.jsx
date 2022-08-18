import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import wave from "../../assets/wave.svg";

function Footer() {
  return (
    <div className="footer-container">
      {/* <hr /> */}
      <div className="social-links">
        <div className="footer">
          <a href="https://github.com/parsaFarahani84">
            <BsGithub className="footer-l" />
          </a>
          <a href="https://www.instagram.com/parsadacoder/">
            <BsInstagram className="footer-l" />
          </a>
          <a href="https://www.linkedin.com/in/parsa-farahani-a006a91b2/">
            <BsLinkedin className="footer-l" />
          </a>
        </div>
      </div>
      <div className="logo-f">
        <img src={Logo} />
      </div>
      <img className="wave" src={wave} />
    </div>
  );
}

export default Footer;
