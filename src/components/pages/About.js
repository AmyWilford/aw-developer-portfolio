import React from "react";
import profilePicture from "../../assets/profile-pic.png";
// import "../styles/About.css";

export default function Home() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row h-100 align-items-center justify-content-between">
          <div className="col-md-8">
            <h4 className="mb-4">about:</h4>
            <p>
              I am a Full Stack Web Developer with professional experience in
              corporate, creative, and non-profit spaces which have fostered a
              uniquely creative mindset, an open approach to collaboration, and
              refined communication skills. Known as an imaginative problem
              solver, with a keen attention to detail, and a passion for the
              intersection of design and function. I learn new languages quickly
              and can effectively communciate core coding concepts.
            </p>
            <p>
              I am ready to leverage a strong professional foundation, and a
              deep commitment to continued learning, in order to be a reliable
              team member committed to thinking outside the box to deliver
              applications that are equal parts client-minded and
              industry-innovative.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img className="img-fluid" src={profilePicture} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
