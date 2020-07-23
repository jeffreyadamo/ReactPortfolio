import React from "react";
import "../../index.css";
import TravEx from "./TravEx";

function Projects() {

    return (

        <div className="container">
            <div className="row">
            <div className="col s12">
                <div>
                <h4>My Porfolio</h4>
                </div>
                
                <div>
                <h5>Here are a few projects created while attending <a href="https://bootcamp.uw.edu/coding/">UW's Full Stack Coding BootCamp</a></h5>
                <br />Click pics for details...
                </div>
            </div>
            </div>
            <div className="row">
                <TravEx />
            </div>
        </div>
    )
}

export default Projects;