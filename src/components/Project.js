import React from "react";
import "./styles/Project.css";
export default function Project({ projects }) {
  return (
    <div>
      <h4 className="mb-4 project-name">projects:</h4>
      <div className="project-container custom-margin">
        {projects.map((project) => (
          <div>
            <div key={project.id} className="row p-2">
              <div className="col-md-6">
                <img
                  className="project-image img-fluid"
                  src={project.src}
                  alt={project.altTag}
                ></img>
              </div>
              <div className="col-md-6 project-details align-self-center">
                <h5 className="text-lowercase font-weight-bold projectName">
                  {project.name}
                </h5>
                <p className="font-weight-light text-wrap m-0">
                  {project.details}
                </p>
                <p>{project.specs}</p>
                <div className="project-icon-row d-flex">
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="d-flex flex-column mr-5">
                      <i className="fa fa-3x fa-laptop project-icon"></i>
                      <small className="sub-icon-text">deployed</small>
                    </div>
                  </a>
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="d-flex flex-column mx-5">
                      <i
                        className="fa fa-3x fa-github  project-icon"
                        aria-hidden="true"
                      ></i>

                      <small className="sub-icon-text">github </small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}
