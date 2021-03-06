import { useState } from "react";
import ProjectsBG from "../assets/projects.jpg";

const defaultTheme = {
  name: "default",
  background: "#5050ee",
  projectBackground: "#ffffff",
  secondaryBG: "#ffffff",
  secondaryFont: "black",
  card: "#ffffff",
  color: "#5050ee",
  font: "#f8f8f2",
  highlight: "hotpink",
  type: "polygon",
  button: "hotpink",
};

const waveRaceTheme = {
  name: "wave",
  background: "linear-gradient(to bottom, #3a7bd5, #00d2ff)",
  projectBackground: "#ffffff",
  secondaryBG: "#ffffff",
  secondaryFont: "black",
  card: "#ffffff",
  font: "#f8f8f2",
  color: "#00c3ff",
  highlight: "#38ff14",
  type: "circle",
  button: "#38ff14",
};
const darkTheme = {
  name: "dark",
  background: "#282a36",
  card: "#44475a",
  secondaryBG: "#282a36",
  projectBackground: "#282a36",
  font: "#f8f8f2",
  secondaryFont: "#f8f8f2",
  highlight: "#bd93f9",
  type: "polygon",
  button: "#bd93f9",
};

const lightTheme = {
  name: "light",
  background: "#f8f8f2",
  secondaryBG: "#ffffff",
  projectBackground: "#ffffff",
  card: "#ffffff",
  font: "#282a36",
  highlight: "#0480ec",
  type: "polygon",
  button: "#0480ec",
};

const ninetyTheme = {
  name: "ninety",
  background: "#49297e",
  secondaryBG: "#ffffff",
  card: "#ffffff",
  bgImage: ProjectsBG,
  secondaryFont: "#282a36	",
  font: "#f8f8f2",
  highlight: "#05889a",
  type: "square",
  button: "#cc0369",
};

export const useTheme = () => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  return {
    activeTheme,
    setActiveTheme,
    defaultTheme,
    waveRaceTheme,
    ninetyTheme,
    lightTheme,
    darkTheme,
  };
};
