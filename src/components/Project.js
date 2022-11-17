import React from "react";
import './styles/Project.css';
export default function Project({ projects }) {
  return (

    <div>
      <div className="d-flex flex-wrap">
        {projects.map((project) => (
          <div key={project.id} className="image-container">
            <img
              className="project-image"
              src="./assets/techspace.png"
              alt={project.altTag}
            />
            <div className="overlay">
              <div>
                <h5>{project.name}</h5>
                <p>{project.deployedUrl}</p>
                <p>{project.githubRepo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 
  );
}
