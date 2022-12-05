import React from "react";
import "../styles/Container.css";
import "font-awesome/css/font-awesome.min.css";
import squiggle from "../../assets/squiggle.png";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="row">
      <div className="col-sm-4 custom-squiggle-box">
        <img
          src={squiggle}
          alt="squiggle-design"
          className="custom-squiggle"
        ></img>
      </div>
      <div className="col-sm-7">
        <div className="hero-text px-2 ">
          <div className="ml-5">
            <h1 className="pop-in">amy wilford</h1>
            <h2 className="pop-in">full stack developer</h2>
            <div>
              <a
                className="chevron"
                href="#about"
                onClick={() => handlePageChange("About")}
              >
                <i className="fa fa-2x fa-solid fa-chevron-down mt-3 mr-4 chevron"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
