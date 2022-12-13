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
            <div className="col-md-6"><img className="project-image img-fluid" src={project.src} alt={project.altTag}></img></div>
            <div className="col-md-6 project-details align-self-center">
              <h5 className="text-lowercase font-weight-bold projectName">
                {project.name}
              </h5>
              <p className="m-0" >{project.stack}</p>
              <p className="font-weight-light text-wrap m-0">{project.details}</p>
              <p>{project.specs}</p>
              <div className="project-icon-row">
                <div className="pr-5">
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-3x fa-laptop project-icon"></i>
                  </a>
                </div>
                <div className="pr-5">
                  <a href={project.githubRepo} target="_blank" rel="noreferrer">
                    <i
                      className="fa fa-3x fa-github project-icon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
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

