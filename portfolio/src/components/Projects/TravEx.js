import React from "react";
import "../../index.css";
import "./style.css";
import travEx from "../../utils/images/travEx.png";
import travExDemo from "../../utils/images/travExDemo.gif";
import { Modal, Button } from 'react-materialize';

function TravEx() {
  const trigger = <Button>Demo</Button>;

  return (
    <div className="col s12 m12 l6">
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="travEx" className="activator" src={travEx} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Group Project 2: TravEx!
            {/* <!-- Modal Button --> */}
            <i className="material-icons right">
            <Modal trigger={trigger}>
              <img
                alt="modal"
                className="activator img-responsive mod"
                src={travExDemo}
              />
            </Modal>
            </i>
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://travexproject.herokuapp.com/"
          >
            Website hosted by Heroku
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jeffreyadamo/Group-Project-2-TravEx"
          >
            GitHub Repository
          </a>
          <p>
            TravEx app utilizes OpenMapTrips API to query travel destinations.
            Data can be saved in MySQL database for user to reference upon sign
            in using Local, Facebook, Github, or Google strategies with
            Passport.js
          </p>
        </div>
        {/* <!-- Back of Card --> */}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            TravEx<i className="material-icons right">close</i>
          </span>
          <p>
            TravEx app utilizes OpenMapTrips API to query travel destinations.
            Data can be saved in MySQL database for user to reference upon sign
            in using Local, Facebook, Github, or Google strategies with
            Passport.js.
          </p>
          <p>Project Highlights:</p>
          <ul className="browser-default">
            <li>
              Designed with{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://get.foundation/"
              >
                Zurb Foundation
              </a>{" "}
              CSS framework
            </li>
            <li>Node.js and MySQL database server</li>
            <li>Heroku JawsDB MySQL hosted web server</li>
            <li>Express.js</li>
            <li>Handlebars.js HTML rendering</li>
            <li>Sequelize ORM</li>
            <li>Lint.js, TravisCI cleanup techniques</li>
            <li>Passport.js login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TravEx;
