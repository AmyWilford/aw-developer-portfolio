import React from "react";
import "../styles/Container.css";
import CV from "../../assets/AmyWilford-FullStackDeveloper-CV.pdf";
export default function Resume() {
  return (
    <div className="container mt-5 text-center">
      <a href={CV} className="btn custom-btn btn-info mb-2" download>
        <i className="fa fa-download download-icon"></i> Download Resume
      </a>
      <div className="row m-3 p-4 skills">
        <h4 className="mb-4 text-left">technical skills:</h4>

        <div className="col-sm-6 text-center">
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
