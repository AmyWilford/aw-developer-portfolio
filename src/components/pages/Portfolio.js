import React from "react";
import Project from "../Project";
import ProjectList from "../ProjectList";

// import "../styles/Portfolio.css";
export default function Portfolio() {
  return (
    <div className="container custom-container mt-5">
      <Project projects={ProjectList} />
    </div>
  );
}
