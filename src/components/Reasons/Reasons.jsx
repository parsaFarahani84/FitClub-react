import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import ilu from "../../assets/i1.svg";

function Reasons() {
  return (
    <div className="Reasons" id="why">
      <div className="left-r">
        <div className="scale">
          <img src={image1} />
        </div>
        <div className="scale">
          <img src={image2} />
        </div>
        <div className="scale">
          <img src={image3} />
        </div>
        <div className="scale">
          <img src={image4} />
        </div>
      </div>

      <div className="right-r">
        <div className="to-right">
          <span>some reasons</span>
          <div className="text">
            <span className="stroke-text">Why</span>
            <span>Choose us?</span>
          </div>

          <div className="details-r">
            <div>
              <img src={tick} />
              <span>OVER 140+ EXPERT COACHS</span>
            </div>

            <div>
              <img src={tick} />
              <span>TRAIN SMARTER AND FASTER THAN BEFOR</span>
            </div>

            <div>
              <img src={tick} />
              <span>1 FREE PROGRAM FOR NRE MEMBER</span>
            </div>

            <div>
              <img src={tick} />
              <span>RELIABLE PARTNERS</span>
            </div>
          </div>
          <span
            className="p-text"
            style={{ color: "var(--gray)", fontWeight: "normal" }}
          >
            OUR PARTNERS:
          </span>
          <div className="partners">
            <img src={nb} />
            <img src={adidas} />
            <img src={nike} />
          </div>
        </div>
        <div className="ilu">
          <img src={ilu} />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
