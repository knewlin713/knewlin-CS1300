import './App.css'
import React from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Projects from "./pages/projects.js";
import Home from "./pages/home.js";
import Resume from "./pages/resume.js";
import Demo from "./projects/demo1.js";
import Demo2 from "./projects/demo2.js";
import Demo3 from "./projects/demo3.js";
import Redesign from "./projects/redesign.jsx";

const App: React.FC = () => {
  return ((<HashRouter>
    <Base></Base>
  </HashRouter>));
};
//top navbar,
//image with text on top, moves a little bit
//alt text for each image
//paragraphs, with top colored text, header, and text
//each part will be colored differently
// white and ECBF98
//3C1518 and 69140E as other colors

const Base: React.FC = () => {
  const location = useLocation();
  //projects should have a projects home page, then click
  return (
    <div>
      {location.pathname !== '/redesign' && (
        <div className="navigation">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
            </ul>
          </nav>
        </div>)}
      {location.pathname === '/redesign' && (
        <div className="redesignNav">
          <nav>
            <ul>
              <li><img src="src/assets/churchLogo.png" alt="church logo" /></li>
              <li><img src="src/assets/churchNameLogo.png" alt="church name logo" /></li>
            </ul>
            <ul className="nav_redesign">
              <li><Link to="/redesign">Home</Link></li>
              <li><Link to="/redesign">About</Link></li>
              <li><Link to="/redesign">Beliefs & Faith</Link></li>
              <li><Link to="/redesign">Forms</Link></li>
              <li><Link to="/redesign">Contact</Link></li>
            </ul>
            <div className="nav_redesign collapsed">
              <a href="">v</a>
            </div>
          </nav>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/demo3" element={<Demo3 />} />
        <Route path="/redesign" element={<Redesign />} />
      </Routes>
    </div>
  );
};

export default App;
