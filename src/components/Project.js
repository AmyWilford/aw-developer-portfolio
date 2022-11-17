import React from "react";
// import "../components/styles/Project.css";

export default function Project({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <img src={project.src} alt={project.altTag} />
          <p>{project.name}</p>
        </div>
      ))}
    </div>
  );
}
