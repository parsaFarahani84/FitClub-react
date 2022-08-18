import React from "react";
import "./Programs.css";
import { ProgramsData } from "../../data/ProgramsData";
import { FaArrowRight } from "react-icons/fa";

function Programs() {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to Shape you</span>
      </div>

      <div className="program-category">
        {ProgramsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>
                Join Now <FaArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
