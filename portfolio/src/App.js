import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects/";


function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <main> 
        <Route exact path="/" component  ={HomeBody} />
        <Route exact path="/about" component = {About}/>
        <Route exact path="/projects" component = {Projects} />  
        <Route exact path="/contact">
          <HomeBody />
          <div class="container">
          <div class="row">
            <div class="col s12 center">
              <h6>Contact me at Github, LinkedIn, or Gmail</h6>
              links listed above
              <h6><a href="https://drive.google.com/file/d/1R2u1wuaLrwt9LVKeUYdi4cYio9dRVuyP/view?usp=sharing">View my resume</a></h6>
              </div>
          </div>
         </div>
          </Route>  
      </main>
      <Footer />

      </Router>
      
    </div>
  );
}

export default App;
