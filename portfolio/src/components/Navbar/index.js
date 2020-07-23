import React from "react";
import "./style.css";
import RobotRon from "../../utils/images/RobotRon.jpg"

function Navbar() {
    return(
        <nav>
        <div className="nav-wrapper cyan darken-1">
          <div className="container">
            <img alt="Robot logo" className="navImg" src={RobotRon} />
            <a href="index.html" className="brand-logo topBar jeffreyAdamo">Jeffrey Adamo</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"
              ><i className="material-icons fas fa-bars"></i
            ></a>
            {/* <!-- <ul id="nav-mobile" className="right hide-on-med-and-down"> --> */}
            <ul className="right hide-on-med-and-down">
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="aboutme.html">About</a></li>
            </ul>

            <ul className="sidenav" id="mobile-demo">
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="aboutme.html">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;