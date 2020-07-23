import React from "react";
import "../../index.css";
import "./style.css";
import travEx from "../../utils/images/travEx.png"
import travExDemo from "../../utils/images/travExDemo.gif"

function EatDaBurger() {

    return (
        <div className="col s12 m12 l6">
        <div className="card large">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={travEx} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"
                >Group Project 2: TravEx!
                {/* <!-- Modal Button --> */}
                <i className="material-icons right">
                    <a className="waves-effect waves-light btn modal-trigger cyan darken-1" href="#modal5">Demo</a>
                </i>
                </span>
                <a
                href="https://travexproject.herokuapp.com/"
                >Website hosted by Heroku
                </a><br />
                <a
                href="https://github.com/jeffreyadamo/Group-Project-2-TravEx"
                >GitHub Repository
                </a>
                <p>
                TravEx app utilizes OpenMapTrips API to query travel destinations. Data can be saved in MySQL database for user to reference upon sign in using Local, Facebook, Github, or Google strategies with Passport.js
                </p>
                {/* <!-- modal --> */}
                <div id="modal5" className="modal">
                <div className="modal-content">
                    <img className="activator img-responsive mod" src={travExDemo} />
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
                </div>
            </div>
            {/* <!-- Back of Card --> */}
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"
                >TravEx<i
                    className="material-icons right"
                    >close</i
                ></span>
                <p>TravEx app utilizes OpenMapTrips API to query travel destinations. Data can be saved in MySQL database for user to reference upon sign in using Local, Facebook, Github, or Google strategies with Passport.js.
                </p>
                <p>Project Highlights:</p>
                <ul className="browser-default">
                    <li>Designed with <a href="https://get.foundation/">Zurb Foundation</a> CSS framework</li>
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

    )
}

export default EatDaBurger;