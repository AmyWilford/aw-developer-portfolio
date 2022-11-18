import React from "react";
import "./styles/Project.css";
export default function Project({ projects }) {
  return (
    <div>
      <h4 className="mb-4 page-name">projects:</h4>
      <div className="d-flex flex-wrap justify-content-between custom-margin">
        {projects.map((project) => (
          <div key={project.id} className="image-container">
            <img
              className="project-image"
              src={project.src}
              alt={project.altTag}
            />
            <div className="overlay text-center">
              <div className="overlay-text p-1">
                <h5 className="text-lowercase font-weight-bold">
                  {project.name}
                </h5>
                <p className="font-weight-light">{project.details}</p>
                <div className="row">
                  <div className="col-6 text-right pr-3">
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-2x fa-laptop project-icon"></i>
                    </a>
                  </div>
                  <div className="col-6 text-left pl-3">
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-2x fa-github project-icon"
                        aria-hidden="true"
                      ></i>
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
