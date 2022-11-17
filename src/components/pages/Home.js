import React from "react";
import "../styles/Container.css";
import "font-awesome/css/font-awesome.min.css";
import squiggle from "../../assets/squiggle.png";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="row">
      <div className="col-md-5">
        <img src={squiggle} alt="squiggle-design" className=""></img>
      </div>
      <div className="col-md-6 mr-1">
        <div className="hero-text px-2 ">
          <div className="">
            <h1 className="pop-in">
              amy <br></br>wilford
            </h1>
            <h2 className="pop-in">
              full stack <br></br>web developer
            </h2>
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
