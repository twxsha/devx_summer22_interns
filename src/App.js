import React from 'react';
import "./style/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Recruitment from "./pages/Recruitment";
import Project from "./pages/Project";
import NavBar from "./components/NavBar";
import Team from "./pages/MeetTeam"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import MeetTeam from './pages/MeetTeam';

function MainPage() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Recruitment />
      <Project/>
      <MeetTeam/>
      <Contact/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
