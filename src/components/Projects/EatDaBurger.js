import React from "react";
import "../../index.css";
import "./style.css";
import burgerHome from "../../utils/images/burgerHome.png";
import burgerDemo from "../../utils/images/burgerDemo.gif";
import { Modal, Button } from 'react-materialize';

function EatDaBurger() {
  const trigger = <Button>Demo</Button>;
  return (
    <div className="col s12 m12 l6">
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="eatdaburger" className="activator" src={burgerHome} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Eat Da Burger!
            {/* <!-- Modal Button --> */}
            <i className="material-icons right">
              <Modal trigger={trigger}>
                <img
                  alt="modal"
                  className="activator img-responsive mod"
                  src={burgerDemo}
                />
              </Modal>
            </i>
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ancient-cove-71755.herokuapp.com/"
          >
            Website hosted by Heroku
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jeffreyadamo/EatDaBurger"
          >
            GitHub Repository
          </a>
          <p>
            Burger logger app showcasing CREATE, READ, and UPDATE actions on a
            MySQL database using Model-View-Controller design.
          </p>
        </div>
        {/* <!-- Back of Card --> */}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Eat Da Burger!<i className="material-icons right">close</i>
          </span>
          <p>
            Burger logger application allows the user to use query a database of
            burgers and update its status by either selecting "DEVOUR!" or "PREP
            FOR EATING". The user can add a new burger to the database as well.
          </p>
          <p>Project Highlights:</p>
          <ul className="browser-default">
            <li>
              Designed with{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://materializecss.com/"
              >
                Materialize
              </a>{" "}
              CSS framework
            </li>
            <li>Node.js and MySQL localhost database server</li>
            <li>Heroku JawsDB MySQL hosted web server</li>
            <li>Express.js</li>
            <li>Handlebars.js HTML rendering</li>
            <li>ORM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EatDaBurger;
