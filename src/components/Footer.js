import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./styles/Footer.css";
export default function Footer() {
  return (
    <nav className="navbar fixed-bottom">
      <div className="d-flex m-2">
        <a
          href="https://github.com/AmyWilford"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-2x fa-github mx-3" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/amywilford/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-2x fa-linkedin mx-3"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/16165394/amylou"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-2x fa-stack-overflow mx-3" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
}
