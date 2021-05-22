import ParticlesBg from "particles-bg";
import Welcome from "./pages/Welcome.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="polygon" bg={true} num={3} />
      <section id="banner">
        <Welcome />
      </section>
    </div>
  );
}

export default App;
