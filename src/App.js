import ParticlesBg from "particles-bg";
import Welcome from "./pages/Welcome.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="polygon" bg={true} num={3} />
      <Welcome />
      <Projects />
      <section id="slanted">
        <Contact />
      </section>
    </div>
  );
}

export default App;
