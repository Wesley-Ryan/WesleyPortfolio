import ParticlesBg from "particles-bg";
import Welcome from "./pages/Welcome.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Footer from "./pages/Footer.js";
import "./App.css";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <div className="App">
      <div className="theme-select">
        <label>My Theme</label>
        <select name="theme" id="theme">
          <option value="default">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="waverace">WaveRace 64</option>
          <option value="90">90's</option>
        </select>
      </div>
      <ParticlesBg
        type="polygon"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          background: `#5050ee`,
          height: `100vh`,
          clipPath: `polygon(0 0, 100% 0, 100% 85%, 0 100%)`,
        }}
        num={3}
      />
      <Welcome />
      <Projects />
      <div id="bottom-border"></div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
