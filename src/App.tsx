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
              <li><Link to="knewlin-CS1300">Home</Link></li>
              <li><Link to="knewlin-CS1300/projects">Projects</Link></li>
              <li><Link to="knewlin-CS1300/resume">Resume</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="knewlin-CS1300" element={<Home />} />
          <Route path="knewlin-CS1300/projects" element={<Projects />} />
          <Route path="knewlin-CS1300/resume" element={<Resume />} />
          <Route path="knewlin-CS1300/projects/demo" element={<Demo />} />
          <Route path="knewlin-CS1300/projects/demo2" element={<Demo2 />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
