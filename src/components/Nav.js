import React from "react";
import "./styles/Nav.css";
export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="header">
      <div className="pl-2 font-weight-bold">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === "Home"
              ? " nav-link active my-brand"
              : " nav-link my-brand"
          }
        >
          |aw|
        </a>
      </div>
      <div>
        <ul className="nav-options">
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link active pl-3"
                  : "nav-link pl-3"
              }
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active pl-3"
                  : "nav-link pl-3"
              }
            >
              portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active pl-3"
                  : "nav-link pl-3"
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



