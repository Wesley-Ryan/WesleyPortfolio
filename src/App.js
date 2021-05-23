import ParticlesBg from "particles-bg";
import Welcome from "./pages/Welcome.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParticlesBg
        type="polygon"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          background: "plum",
        }}
        num={3}
      />
      <Welcome />
      <div id="slanted"></div>
      <Projects />
      <About />

      <Contact />
    </div>
  );
}

export default App;
