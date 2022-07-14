import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Recruitment from "./pages/Recruitment";
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="recruitment" element={<Recruitment />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
