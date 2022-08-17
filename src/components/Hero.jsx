import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import { CgGym } from "react-icons/cg";
import { GiStrongMan } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import Button from "./UI/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
        </div>
        <div>
          <span>
            In here we will help you to shape and build your ideal body
          </span>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <Button className="btn absolute">Join Now</Button>
        <img src={hero_image} className="hero-image"></img>
        <div className="border"></div>

        <img src={hero_image_back} className="hero-image-back"></img>
        <div className="icons">
          <span className="icon">
            <CgGym />
            <div>
              <p>+Best Equipments</p>
            </div>
          </span>
          <span className="icon left-min">
            <GiStrongMan />
            <div>
              <p>+Best Coatches</p>
            </div>
          </span>
          <span className="icon">
            <FaMoneyBillWave />
            <div>
              <p>+Best Price</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
