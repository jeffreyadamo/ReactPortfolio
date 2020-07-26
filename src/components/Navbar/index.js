import React from "react";
import "./style.css";
import RobotRon from "../../utils/images/RobotRon.jpg";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper cyan darken-1">
            <div className="container">
              <img alt="Robot logo" className="navImg" src={RobotRon} />
              <a href="https://jeffreyadamo.github.io/ReactPortfolio/" className="brand-logo topBar jeffreyAdamo">
                Jeffrey Adamo
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
              <a
                href="#"
                data-target="slide-out"
                className="sidenav-trigger show-on-large"
              >
                <i className="material-icons">menu</i>
              </a>
              <ul className="sidenav" id="slide-out">
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
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
