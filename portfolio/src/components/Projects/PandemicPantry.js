import React from "react";
import "../../index.css";
import PandemicPantry from "../../utils/images/PandemicPantry.png";
import PandemicDemo from "../../utils/images/pandemicPantry.gif";

function EatDaBurger() {
  return (
    <div className="col s12 m12 l6">
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            alt="Pandemic Pantry"
            className="activator"
            src={PandemicPantry}
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Group Project 1: Pandemic Pantry
            {/* <!-- Modal Button --> */}
            <i className="material-icons right">
              <a
                className="waves-effect waves-light btn modal-trigger cyan darken-1"
                href="#modal3"
              >
                Demo
              </a>
            </i>
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://jeffreyadamo.github.io/GroupProject1-PandemicPantry/"
          >
            GitHub Pages
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jeffreyadamo/GroupProject1-PandemicPantry"
          >
            GitHub Repository
          </a>
          <p>
            Recipe search application utilizing AJAX calls to Spoontacular and
            WikiMedia APIs. First use of GitHub to collaborate in a group of 3.
          </p>
          {/* <!-- modal --> */}
          <div id="modal3" className="modal">
            <div className="modal-content">
              <img
                alt="Pandemic Pantry Demo"
                className="activator img-responsive mod"
                src={PandemicDemo}
              />
              <a
                href="#!"
                className="modal-close waves-effect waves-green btn-flat"
              >
                Close
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Back of Card --> */}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Group Project: <br />
            Pandemic Pantry<i className="material-icons right">close</i>
          </span>
          <p>
            Recipe application that allows users to search for recipes based on
            an ingredient they have at home. Results can be tailored to fit
            dietary preferences and intolerances.
            <br /> Utilizes GitHub to collaborate with Alyssa Hellrung and Bipin
            Maharjan
          </p>
          <ul className="browser-default">
            <li>
              Designed with{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://get.foundation/index.html"
              >
                ZURB Foundation
              </a>{" "}
              CSS framework
            </li>
            <li>
              Required AJAX calls to 2 server-side APIs (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://spoonacular.com/food-api/docs"
              >
                Spoonacular
              </a>{" "}
              and{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mediawiki.org/wiki/API:Main_page"
              >
                MediaWIKI
              </a>
              )
            </li>

            <li>
              Uses{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://pagecdn.com/lib/easyfonts"
              >
                EasyFonts
              </a>{" "}
              third-party API
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EatDaBurger;
