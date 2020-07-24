import React from "react";
import "../../index.css";
import TravEx from "./TravEx";
import EatDaBurger from "./EatDaBurger";
import EmployeeDirectory from "./EmployeeDirectory";
import EmployeeTracker from "./EmployeeTracker";
import PandemicPantry from "./PandemicPantry";
import WeatherDashboard from "./WeatherDashboard";
import WorkDayScheduler from "./WorkDayScheduler";

function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div>
            <h4>My Porfolio</h4>
          </div>

          <div>
            <h5>
              Here are a few projects created while attending
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://bootcamp.uw.edu/coding/"
              >
                UW's Full Stack Coding BootCamp
              </a>
            </h5>
            <br />
            Click pics for details...
          </div>
        </div>
      </div>
      <div className="row">
        <TravEx />
        <PandemicPantry />
        <EatDaBurger />
        <EmployeeDirectory />
        <EmployeeTracker />
        <WeatherDashboard />
        <WorkDayScheduler />
      </div>
    </div>
  );
}

export default Projects;
