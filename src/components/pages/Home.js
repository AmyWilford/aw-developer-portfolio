import React from "react";
import "../styles/Container.css";
import "font-awesome/css/font-awesome.min.css";
import profilePicture from "../../assets/profile-pic.png";
import About from "../About";

// import squiggle from "../../assets/squiggle.png";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <div className="row home-row align-items-center mt-5">
   
        <div className="col-md-8 align-self-center">
          <div className="hero-text">
            <div>
              <h1 className="pop-in">amy wilford</h1>
              <h2 className="pop-in">full stack developer</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center profile">
          <img
            className="img-fluid profile-img pop-in"
            src={profilePicture}
            alt="profile"
          />
        </div>
        <div>
        <About />
      </div>
      </div>
      
    </div>
  );
}
