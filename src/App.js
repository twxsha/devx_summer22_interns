import "./style/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Recruitment from "./pages/Recruitment";
import Project from "./pages/Project";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";

function MainPage() {
  return (
    <div className="App">
      <div className="background"></div>
      <NavBar />
      <Home />
      <About />
      <Recruitment />
      <Project/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
