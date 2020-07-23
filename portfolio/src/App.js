import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects/";


function App() {
  return (
    <div>
      <Navbar />
      <main> 
        <HomeBody />
        <About />
        <Projects />  
      </main>
      <Footer />
    </div>
  );
}

export default App;
