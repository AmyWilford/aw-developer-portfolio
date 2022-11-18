import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import squiggle from "../../assets/squiggle.png";
import "../styles/Container.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleInputChange = (e) => {
    setConfirmationMessage("");

    const { target } = e;
    console.log(e);
    const inputType = target.type;
    const inputValue = target.value;
    console.log(inputType);

    if (inputType === "text") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!name || !email || !message) {
      setErrorMessage("Please include your name, email, and a quick message.");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`name ${name}, email ${email}, message${message}`);

    if (!name || !email || !message) {
      setErrorMessage("Please include your name, email, and a quick message.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    setConfirmationMessage(
      "Thank you for reaching out. I'll be in touch soon!"
    );
  };

  return (
    <div className="row">
      <div className="col-sm-2 custom-squiggle-box">
        <img
          src={squiggle}
          alt="squiggle-design"
          className="custom-squiggle"
        ></img>
      </div>
      <div className="col-sm-8 p-5 contact-form">
        <h5 className="mb-4 text-right">contact:</h5>

        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="LLCool Name"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="amazingemail@example.com"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="message">Let's work together!</label>
            <textarea
              className="form-control"
              value={message}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
          </div>
          {errorMessage && (
            <div className="text-right font-italic">
              <p>{errorMessage}</p>
            </div>
          )}
          <button
            type="button"
            onClick={handleFormSubmit}
            className="btn custom-btn px-3"
          >
            submit
          </button>

          {confirmationMessage && (
            <div>
              <p>{confirmationMessage}</p>
            </div>
          )}
          <div id="confirmation"></div>
        </form>
      </div>
    </div>
  );
}
