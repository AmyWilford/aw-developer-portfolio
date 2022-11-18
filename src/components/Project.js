import React from "react";
import "./styles/Project.css";
export default function Project({ projects }) {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between custom-margin">
        {projects.map((project) => (
          <div key={project.id} className="image-container">
            <img
              className="project-image"
              src={project.src}
              alt={project.altTag}
            />
            <div className="overlay text-center">
              <div className="overlay-text">
                <p className="text-uppercase">{project.name}</p>
                <div className="row">
                  <div className="col-6 text-right pr-3">
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-2x fa-laptop"></i>
                    </a>
                  </div>
                  <div className="col-6 text-left pl-3">
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-2x fa-github" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
