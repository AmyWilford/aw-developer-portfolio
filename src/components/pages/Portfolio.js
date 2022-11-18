import React from "react";
import Project from "../Project";
import ProjectList from "../ProjectList";

// import "../styles/Portfolio.css";
export default function Portfolio() {
  return (
    <div className="container mt-5">
      <h4 className="mb-4">projects:</h4>
      <Project projects={ProjectList} />
    </div>
  );
}
