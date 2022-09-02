import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bar from "../../assets/bars.png";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="header">
      <img src={Logo} className="logo" />
      {mobile === true && menuOpened === false ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bar} style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <a href="#home">
            {" "}
            <li className="list" onClick={() => setMenuOpened(false)}>
              Home
            </li>
          </a>
          <a href="#programs">
            <li className="list" onClick={() => setMenuOpened(false)}>
              Programs
            </li>
          </a>
          <a href="#why">
            <li className="list" onClick={() => setMenuOpened(false)}>
              Why Us
            </li>
          </a>
          <a href="#plan">
            <li className="list" onClick={() => setMenuOpened(false)}>
              Plans
            </li>
          </a>
          <a href="#testimonials">
            <li className="list" onClick={() => setMenuOpened(false)}>
              Testimonials
            </li>
          </a>
        </ul>
      )}
    </div>
  );
}

export default Header;
