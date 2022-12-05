import React, { useState, useRef } from "react";
import { validateEmail } from "../utils/helpers";
import emailjs from "emailjs-com";
import squiggle from "../../assets/squiggle.png";
import "../styles/Container.css";

export default function Contact() {
  const form = useRef();

  const [response, responseSet] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56902us",
        "template_xebltpq",
        form.current,
        "ymzPLJFflr6Io1XVv"
      )
      .then(
        (result) => {
          document.querySelector(".user_name").value = "";
          document.querySelector(".user_email").value = "";
          document.querySelector(".message").value = "";
          responseSet(
            "Your email has been sent. Thank you for reaching out. I'll be in touch soon!"
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const clearMessage = () => {
    responseSet("");
  };

  return (
    <div className="container">
      <div className="p-5">
        <h4 className="mb-4">contact:</h4>
        <form className ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label className="font-weight-bold">Name:</label>
            <input
              type="text"
              required
              name="user_name"
              onChange={clearMessage}
              className="user_name form-control"
            ></input>
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Email:</label>
            <input
              type="email"
              required
              name="user_email"
              onChange={clearMessage}
              className="user_email form-control"
            ></input>
          </div>
          <label className="font-weight-bold">Message:</label>
          <div className="form-group">
            <textarea
              className="message form-control"
              required
              name="message"
              onChange={clearMessage}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn custom-btn px-3">
            send email
          </button>
          <p className="font-italic">{response}</p>
        </form>
        <p className="mt-5 text-right font-weight-bold custom-color">
          You can also reach me directly at wilford.amy @ gmail.com
        </p>
      </div>
    </div>
  );
}
