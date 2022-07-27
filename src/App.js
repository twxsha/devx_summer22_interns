import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Recruitment from "./pages/Recruitment";
import Project from "./pages/Project";
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
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
