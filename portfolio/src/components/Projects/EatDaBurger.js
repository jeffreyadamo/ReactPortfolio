import React from "react";
import "../../index.css";
import "./style.css";
import burgerHome from "../../utils/images/burgerHome.png"
import burgerDemo from "../../utils/images/burgerDemo.gif"

function EatDaBurger() {

    return (
        <div className="col s12 m12 l6">
            <div className="card large">
                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="eatdaburger" className="activator" src={burgerHome} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"
                    >Eat Da Burger!
                    {/* <!-- Modal Button --> */}
                    <i className="material-icons right">
                        <a className="waves-effect waves-light btn modal-trigger cyan darken-1" href="#modal2">Demo</a>
                    </i>
                    </span>
                    <a
                    href="https://ancient-cove-71755.herokuapp.com/"
                    >Website hosted by Heroku
                    </a><br />
                    <a
                    href="https://github.com/jeffreyadamo/EatDaBurger"
                    >GitHub Repository
                    </a>
                    <p>
                    Burger logger app showcasing CREATE, READ, and UPDATE actions on a MySQL database using Model-View-Controller design. 
                    </p>
                    {/* <!-- modal --> */}
                    <div id="modal2" className="modal">
                    <div className="modal-content">
                        <img alt="modal" className="activator img-responsive mod" src={burgerDemo} />
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                    </div>
                </div>
                {/* <!-- Back of Card --> */}
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"
                    >Eat Da Burger!<i
                        className="material-icons right"
                        >close</i
                    ></span
                    >
                    <p>Burger logger application allows the user to use query a database of burgers and update its status by either selecting "DEVOUR!" or "PREP FOR EATING". The user can add a new burger to the database as well.
                    </p>
                    <p>Project Highlights:</p>
                    <ul className="browser-default">
                        <li>Designed with <a href="https://materializecss.com/">Materialize</a> CSS framework</li>
                        <li>Node.js and MySQL localhost database server</li>
                        <li>Heroku JawsDB MySQL hosted web server</li>
                        <li>Express.js</li>
                        <li>Handlebars.js HTML rendering</li>
                        <li>ORM</li>

                    </ul>

                    
                </div>
            </div>
          </div>
    )
}

export default EatDaBurger;