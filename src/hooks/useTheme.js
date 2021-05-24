import { useState } from "react";

const defaultTheme = {
  background: "#5050ee",
  font: "#f8f8f2",
  hightlight: "#0480ec",
  type: "polygon",
};

export const useTheme = () => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  return { activeTheme, setActiveTheme, defaultTheme };
};
