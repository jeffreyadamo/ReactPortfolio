import React from "react";
import "../../index.css";
import "./style.css";

function Welcome() {
  return (
    <div>
      <div className="card-panel cyan darken-1 aboutText">
      <h4 className="center">Welcome to my web development portfolio!</h4>
      </div>
      <div className="card-panel cyan darken-1 aboutText">
        <h5>
          February, 2020: Start of my coding journey
        </h5>
          Check out the the various <a className="cyan darken-1 blue" href="projects">projects </a> I've completed while enrolled in
          UW's Full Stack Web Development BootCamp. This took 6 months and earned a certificate for 25 credits (250 credit hours). 
        <h5 > 
          <a 
          className="cyan darken-1 blue"
          href="projects">
            Full Stack Bootcamp Portfolio: Feb - August 2020
          </a>
        </h5>
        <br />
      </div>{" "}
      <div className="card-panel cyan darken-1 aboutText">
        <h5>November, 2020: Updates</h5>
        <br></br>
         - Been following along with CodingGarden to build a <a
              rel="noopener noreferrer"
              target="_blank"
              className="cyan darken-1 blue"
              href="https://github.com/jeffreyadamo/homeinventory"
            >Home Inventory App
            </a> using Postgress and Knex.js (versus MySQL using Sequelize). 
        <br></br>
         - Revisiting React Portfolio. Would like to see this showcase a database and other JavaScript functionalities.
      </div>
      <br /> <br /> <br /> <br />
    </div>
  );
}

export default Welcome;
