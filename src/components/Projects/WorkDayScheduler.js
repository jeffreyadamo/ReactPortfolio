import React from "react";
import "../../index.css";
import workDay from "../../utils/images/workDay.png";
import workDayDemo from "../../utils/images/WorkDay2.gif";
import { Modal, Button } from 'react-materialize';

function WorkDayScheduler() {
  const trigger = <Button>Demo</Button>;

  return (
    <div className="col s12 m12 l6">
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="workdayschedular" className="activator" src={workDay} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Work Day Scheduler
            {/* <!-- Modal Button --> */}
            <i className="material-icons right">
            <Modal trigger={trigger}>
              <img
                alt="modal"
                className="activator img-responsive mod"
                src={workDayDemo}
              />
            </Modal>
            </i>
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://jeffreyadamo.github.io/05_3rdPartyAPIs_WorkDayScheduler/"
          >
            GitHub Pages
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jeffreyadamo/05_3rdPartyAPIs_WorkDayScheduler"
          >
            GitHub Repository
          </a>
          <p>
            Set and save tasks during time blocks using the browser's Local
            Storage and Moment.js API to display current time
          </p>
        </div>
        {/* <!-- Back of Card --> */}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Work Day Scheduler<i className="material-icons right">close</i>
          </span>
          <p>
            A functional work day schedule application that provides the user
            with the current time, an area to take notes at each time hour of
            the day, and have each time block's color represent its time
            relative to the current time.
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
                Times provided by third-party API -{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"
                >
                  Moment.js
                </a>
              </li>
              <li>
                HTML was dynamically updated using JQuery to dislay time blocks
              </li>
              <li>
                JavaScript enables local storage to save tasks upon revist to
                the site
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkDayScheduler;
