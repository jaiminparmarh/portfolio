import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Frontend from "./Skills/Frontend";
import Backend from "./Skills/Backend";
import Tools from "./Skills/Tools";
import Creativeskills from "./Skills/Creativeskills";

import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop/>
      <div style={{ display: "flex" }}>
        <Sidebar Name="JAIMIN H. PARMAR" />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Skills */}
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills/frontend" element={<Frontend />} />
            <Route path="/skills/backend" element={<Backend />} />
            <Route path="/skills/tools" element={<Tools />} />
            <Route
              path="/skills/creativeskills"
              element={<Creativeskills />}
            />

            {/* Projects */}
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/projects/project3" element={<Project3/>}/>
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
