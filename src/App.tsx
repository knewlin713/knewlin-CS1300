import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import React, { SetStateAction, useState } from "react";
import Projects from "./pages/projects.js";
import Home from "./pages/home.js";
import Resume from "./pages/resume.js";
import Demo from "./projects/demo1.js";
import Demo2 from "./projects/demo2.js";

function App() {

  //top navbar,
  //image with text on top, moves a little bit
  //alt text for each image
  //paragraphs, with top colored text, header, and text
  //each part will be colored differently
  // white and ECBF98
  //3C1518 and 69140E as other colors


  //projects should have a projects home page, then click
  return (
    <div>
      <BrowserRouter>
        <div className="navigation">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo2" element={<Demo2 />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
