import React from "react";
import "./styles/Nav.css";
export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="custom-nav navbar header navbar-expand-sm d-flex justify-content-between align-items-center">
      <div className="pl-2 font-weight-bold">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === "Home"
              ? "nav-link active my-brand"
              : "nav-link my-brand"
          }
        >
          aw
        </a>
      </div>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link active pl-2"
                  : "nav-link pl-2"
              }
            >
              about
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active pl-2"
                  : "nav-link pl-2"
              }
            >
              portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active pl-2"
                  : "nav-link pl-2"
              }
            >
              resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active pl-2"
                  : "nav-link pl-2"
              }
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
