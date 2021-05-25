import { useState } from "react";
import ProjectsBG from "../assets/projects.jpg";

const defaultTheme = {
  background: "#5050ee",
  secondaryBG: "white",
  secondaryFont: "black",
  color: "#5050ee",
  font: "#f8f8f2",
  highlight: "hotpink",
  type: "polygon",
  button: "hotpink",
};

const waveRaceTheme = {
  background: "linear-gradient(to bottom, #3a7bd5, #00d2ff)",
  secondaryBG: "white",
  secondaryFont: "black",
  font: "#f8f8f2",
  color: "#00c3ff",
  highlight: "#38ff14",
  type: "circle",
  button: "#38ff14",
};
const darkTheme = {
  background: "#5050ee",
  font: "#f8f8f2",
  highlight: "#0480ec",
  type: "polygon",
  button: "",
};

const lightTheme = {
  background: "#5050ee",
  font: "#f8f8f2",
  highlight: "#0480ec",
  type: "polygon",
  button: "",
};

const ninetyTheme = {
  background: "#49297e",
  bgImage: ProjectsBG,
  secondaryBG: "#05889a",
  secondaryFont: "#282a36	",
  font: "#f8f8f2",
  highlight: "#05889a",
  type: "square",
  button: "#cc0369",
};

/*

WaveRace 

Rasta gradient font: 
 background: linear-gradient(to top, #ff0000, #fff200, #1e9600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

   	#0480ec
     #3fc7dd

     background: linear-gradient(to bottom, #3a7bd5, #00d2ff)

     highlight:  	#38ff14

     pink #e4ace9
type circle or ball


     Dracula 
Background	#282a36	
Current Line	#44475a	
Foreground	#f8f8f2	
Comment	#6272a4	
Cyan	#8be9fd	
Green	#50fa7b	
Orange	#ffb86c	
Pink	#ff79c6	
Purple	#bd93f9	
Red	#ff5555	
Yellow	#f1fa8c
type:cobweb

Default 
background: `#5050ee`,
text #f8f8f2	
highlght  #0480ec

light 
 

Dark 
Background	#282a36 or background: linear-gradient(to right, #434343, #000000);
font #6272a4
highlight #ff79c6
type none ? 

90's 
bg: #72008b / linear-gradient(to left, #db36a4, #f7ff00);
font #00b48d
highlight: #fdfc01
type: square




*/

export const useTheme = () => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  return {
    activeTheme,
    setActiveTheme,
    defaultTheme,
    waveRaceTheme,
    ninetyTheme,
  };
};
