import React from "react";
import "../../index.css";
import bioImage from "../../utils/images/bioImage.JPG"
import liBug from "../../utils/images/LI-In-Bug.png"
import gmail from "../../utils/images/gmail_logo_PNG5.png"

function HomeBody() {

    return (
        <div className="container">
          <div className="row">
            <div className="col s12">
              {/* <!-- <h4>About Me</h4> --> */}
            </div>
          </div>
          <div className="row aboutMe">
            <div className="col s12">
              <img alt="" className="profilePic circle" src={bioImage} />
              <h4>Jeffrey Adamo</h4>
              <div className="bioInfo">
                R&D Biochemist<br />
                Full Stack Web Developer
              </div>
              <div>
                {/* <!-- GitHub Image Link --> */}
                <a href="https://github.com/jeffreyadamo">
                  <img       src="https://github.githubassets.com/favicons/favicon.svg" title="GitHub Profile" alt="GitHub"
                  />
                </a>
                {/* <!-- LinkedIn Image Link --> */}
                <a href="https://www.linkedin.com/in/jeffadamo">
                  <img  className="linkedIn" src={liBug} title="LinkedIn Profile" alt="LinkedIn"/>
                </a>
                {/* <!-- Gmail Image Link --> */}
                <a href="mailto:jeffreyadamo@gmail.com">
                  <img a className="linkedIn" src={gmail} title="gmail" alt="jeffreyadamo@gmail.com"/>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default HomeBody;