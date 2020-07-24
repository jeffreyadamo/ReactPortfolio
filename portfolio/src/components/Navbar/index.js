import React from "react";
import "../../index.css";
import RobotRon from "../../utils/images/RobotRon.jpg";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sidenav, {});
    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.sidenav');
    //     var instances = M.Sidenav.init(elems, options);
    //   });
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan darken-1">
          <div className="container">
            <img alt="Robot logo" className="navImg" src={RobotRon} />
            <a href="/" className="brand-logo topBar jeffreyAdamo">
              Jeffrey Adamo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons fas fa-bars"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="projects">Portfolio</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
            </ul>

            <ul className="sidenav" id="mobile-demo">
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="aboutme.html">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
