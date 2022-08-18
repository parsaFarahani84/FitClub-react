import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const Length = testimonialsData.length;

  const fun = function () {
    return console.log(Length - 1);
  };
  fun();

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} />

        <div className="arrows">
          <FaArrowAltCircleLeft
            className="img"
            onClick={() => {
              selected === 0
                ? setSelected(Length - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <FaArrowAltCircleRight
            className="img"
            onClick={() => {
              selected === Length - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
