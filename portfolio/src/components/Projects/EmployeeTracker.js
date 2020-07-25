import React from "react";
import "../../index.css";
import employeeTracker from "../../utils/images/employeeTracker.png";
import employeeDemo from "../../utils/images/employeeTrackerDemo.gif";
import { Modal, Button } from 'react-materialize';

function EatDaBurger() {
  const trigger = <Button>Demo</Button>;
  return (
    <div className="col s12 m12 l6">
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            alt="employee tracker"
            className="activator"
            src={employeeTracker}
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Employee Tracker CLI (feat. inquirer)
            {/* <!-- Modal Button --> */}
            <i className="material-icons right">
            <Modal trigger={trigger}>
              <img
                alt="modal"
                className="activator img-responsive mod"
                src={employeeDemo}
              />
            </Modal>
            </i>
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jeffreyadamo/EmployeeTracker_MySQL"
          >
            GitHub Repository
          </a>
          <p>
            Employee Tracker is a content managament system (CMS) application
            that uses the command line interface (CLI) to navigate through a
            MySQL database with employee information. The user has the several
            CRUD options available through the app to CREATE, READ, UPDATE, and
            DELETE employee information.
          </p>
        </div>
        {/* <!-- Back of Card --> */}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Employee Tracker CLI<i className="material-icons right">close</i>
          </span>
          <p>
            Employee Tracker uses the command line interface (CLI) to navigate
            through a local MySQL database with employee information. The user
            has the several CRUD options available to to view and manage the
            departments, roles, and employees in a company.
          </p>
          <p>Project Highlights:</p>
          <ul className="browser-default">
            <li>MySQL database CRUD</li>
            <li>Node.js local server</li>
            <li>Inquirer npm package</li>
            <li>console.table for clean viewing</li>
            <li>.sql seed files for MySQL tables and data setup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EatDaBurger;
