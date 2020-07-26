import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects/";
import Contact from "./components/Contact/";
import Welcome from "./components/Welcome/";


function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <main> 
      <Route exact path="/ReactPortfolio/" >
          <HomeBody />
          <Welcome />
          </Route>
        <Route exact path="/ReactPortfolio/about" >
          <HomeBody />
          <About />
          </Route>
        <Route exact path="/ReactPortfolio/projects" component = {Projects} />  
        <Route exact path="/ReactPortfolio/contact">
          <HomeBody />
          <Contact />
        </Route>  
      </main>
      <Footer />

      </Router>
      
    </div>
  );
}

export default App;
