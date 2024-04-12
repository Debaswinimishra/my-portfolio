import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
