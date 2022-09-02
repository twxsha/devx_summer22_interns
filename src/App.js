import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Recruitment from "./pages/Recruitment";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import MeetTeam from './pages/MeetTeam';
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="recruitment" element={<Recruitment />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            <Route path="meetteam" element={<MeetTeam />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
