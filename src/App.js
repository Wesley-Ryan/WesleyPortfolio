import ParticlesBg from "particles-bg";
import Welcome from "./pages/Welcome.js";
import Projects from "./pages/Projects.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="polygon" bg={true} num={3} />
      <section id="banner">
        <Welcome />
        <Projects />
      </section>
    </div>
  );
}

export default App;
