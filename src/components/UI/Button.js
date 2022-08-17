import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={`${props.className} btn-o`}>{props.children}</button>
  );
}

export default Button;
