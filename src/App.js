import ParticlesBg from "particles-bg";
import Welcome from "./pages/Welcome.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Footer from "./pages/Footer.js";
import "./App.css";
import Modal from "./components/Modal";
import Contact from "./pages/Contact.js";
import { useTheme } from "./hooks/useTheme.js";
import { useState } from "react";

function App() {
  const [isToggled, setToggle] = useState(false);
  const {
    activeTheme,
    setActiveTheme,
    defaultTheme,
    waveRaceTheme,
    ninetyTheme,
    lightTheme,
    darkTheme,
  } = useTheme();

  const handleSelect = (e) => {
    switch (e.target.value) {
      case "light":
        setActiveTheme(lightTheme);
        break;
      case "dark":
        setActiveTheme(darkTheme);
        break;
      case "waverace":
        setActiveTheme(waveRaceTheme);
        break;
      case "ninety":
        setActiveTheme(ninetyTheme);
        break;
      default:
        setActiveTheme(defaultTheme);
    }
  };
  return (
    <div className="App">
      <div className="theme-select">
        <label style={{ color: `${activeTheme.highlight}` }}>
          Select A Theme
        </label>
        <select name="theme" id="theme" onChange={(e) => handleSelect(e)}>
          <option value="default">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="waverace">WaveRace 64</option>
          <option value="ninety">90's</option>
        </select>
      </div>
      <ParticlesBg
        color={`${activeTheme.color}`}
        type={`${activeTheme.type}`}
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          background: `${activeTheme.background}`,
          height: `105vh`,
        }}
        num={3}
      />
      <Welcome activeTheme={activeTheme} />
      <div
        style={
          activeTheme.bgImage
            ? {
                background: `url(${activeTheme.bgImage})`,
              }
            : { background: `${activeTheme.projectBackground}` }
        }
      >
        <Projects activeTheme={activeTheme} />
        <div
          id="bottom-border"
          style={{ borderBottom: `3px solid ${activeTheme.highlight}` }}
        ></div>
      </div>
      <About activeTheme={activeTheme} />
      {isToggled && (
        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Contact activeTheme={activeTheme} />
        </Modal>
      )}
      <Footer activeTheme={activeTheme} setToggle={setToggle} />
    </div>
  );
}

export default App;
