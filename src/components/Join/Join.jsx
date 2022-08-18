import React, { useRef, useState } from "react";
import "./Join.css";
import Button from "../UI/Button";
// import imgm from "../../assets/mail.svg";
import imgm from "../../assets/phone.svg";
import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hftdlhe",
        "template_f6kmfu5",
        form.current,
        "TmiZbBMR-iWm7soqS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current[0].value = "";
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span> <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span> <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div></div>
      <div className="right-j">
        <img className="icon-j" src={imgm} />
        <form className="email-container" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="please enter your email"
          />
          <Button>Join Now</Button>
        </form>
      </div>
    </div>
  );
}

export default Join;
