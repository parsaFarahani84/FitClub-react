import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import Button from "../UI/Button";
import { FiArrowRightCircle } from "react-icons/fi";

function Plans() {
  return (
    <div className="plans-container" id="plan">
      <div
        className="programs-header"
        style={{ gap: "2rem", marginBottom: "0.5rem" }}
      >
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="rem">
              <span className="see-more">
                See more benefits <FiArrowRightCircle className="arrow" />
              </span>
            </div>
            <Button>Join now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
