import React from "react";
import './App.css';
import Header  from "./Header.js";
import Nav from "./Nav.js";
import Middle from "./Middle.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Project from "./Project.js";
import "./scrollup.js";
import"./loading.js";

function App() {
  return (
    <div className="App">
      <div className="loader_bg">
        <div className="loader"></div>
      </div>
      <Nav />
      <Header />
      <div id="top_screen">
        <i className="fas fa-chevron-circle-up fa-2x"></i>
      </div>
      <Middle />
      <Project isLarge/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
