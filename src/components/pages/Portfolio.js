import React from "react";
import Project from "../Project";
import ProjectList from "../ProjectList";

// import "../styles/Portfolio.css";
export default function Portfolio() {
  return (
    <div className="row">
      <div className=" portfolioCol col-sm-4">
        <h4>projects:</h4>
      </div>
      <div className="col-sm-8 p-5">
        <Project projects={ProjectList} />
      </div>
    </div>
  );
}