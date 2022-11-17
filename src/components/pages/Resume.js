import React from "react";
import "../styles/Container.css";
export default function Resume() {
  return (
    <div className="container mt-5 text-center">
      <h4>Technical Skills:</h4>
      <a href="#" className="btn custom-btn btn-info my-2" download>
        <i className="fa fa-download"></i> Download Resume
      </a>
      <div className="row text-center m-3 p-4 skills">
        <div className="col-sm-6">
          <ul>
            <li>
              <b>Languages:</b>
            </li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node</li>
            <li>GraphQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              <b>Applications:</b>
            </li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
