import React from "react";
import "../../index.css";
import weatherDashboard from "../../utils/images/weatherDashboard.png";
import weatherDemo from "../../utils/images/weatherDashboard.gif";
import { Modal, Button } from 'react-materialize';

function WeatherDashboard() {
  const trigger = <Button>Demo</Button>;
  return (
    <div className="col s12 m12 l6">
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            alt="weather dashboard"
            className="activator"
            src={weatherDashboard}
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Weather Dashboard
            {/* <!-- Modal Button --> */}
            <i className="material-icons right">
            <Modal trigger={trigger}>
              <img 
                alt="modal"
                className="activator img-responsive mod"
                src={weatherDemo}
              />
            </Modal>
            </i>
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://jeffreyadamo.github.io/06_Weather_Dashboard/"
          >
            GitHub Pages
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jeffreyadamo/06_Weather_Dashboard"
          >
            GitHub Repository
          </a>
          <p>
            Search city for current and forecasted weather information that
            utilizes OpenWeatherMap API and local storage
          </p>
        </div>
        {/* <!-- Back of Card --> */}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Weather Dashboard<i className="material-icons right">close</i>
          </span>
          <p>
            Utilizes the third-party API, OpenWeather API to build a weather
            dashboard to retrive weather data for cities. The dashboard will run
            in the browser and feature dynamically updated HTML and CSS
          </p>
          <p>
            <ul className="browser-default">
              <li>
                Designed with{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
                >
                  BootstrapCDN
                </a>{" "}
                CSS framework
              </li>
              <li>
                Search button initiates local storage save and retrieve data
                using JavaScript
              </li>
              <li>
                3 APIs from OpenWeatherAPI used to call current weather, UV
                Index, and forecast weather
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;
