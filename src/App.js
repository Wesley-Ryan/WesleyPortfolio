import ParticlesBg from "particles-bg";
import Welcome from "./pages/Welcome.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Footer from "./pages/Footer.js";
import "./App.css";

import Contact from "./pages/Contact.js";
import { useTheme } from "./hooks/useTheme.js";
import { useState } from "react";

function App() {
  const {
    activeTheme,
    setActiveTheme,
    defaultTheme,
    waveRaceTheme,
    ninetyTheme,
  } = useTheme();

  const handleSelect = (e) => {
    switch (e.target.value) {
      case "light":
        setActiveTheme({});
        break;
      case "dark":
        setActiveTheme({});
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
      <div style={{ background: `url(${activeTheme.bgImage})` }}>
        <Projects activeTheme={activeTheme} />
        <div
          id="bottom-border"
          style={{ borderBottom: `3px solid ${activeTheme.highlight}` }}
        ></div>
      </div>
      <About activeTheme={activeTheme} />
      <Footer activeTheme={activeTheme} />
    </div>
  );
}

export default App;
