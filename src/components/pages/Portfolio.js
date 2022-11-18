import React from "react";
import Project from "../Project";
import ProjectList from "../ProjectList";

// import "../styles/Portfolio.css";
export default function Portfolio() {
  return (
    <div className="container mt-5">
      <h5 className="mb-4">projects:</h5>
      <Project projects={ProjectList} />
    </div>
  );
}
