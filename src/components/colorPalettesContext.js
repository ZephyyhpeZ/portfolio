import "../styles/text.css";
import "../styles/circles.css";
import { createContext, useState } from "react";

export const ColorPaletteContext = createContext();

export const ColorPaletteProvider  = ({ children }) => {
  const [currentColorPaletteIndex, setColorPaletteIndex] = useState(0);

  const colorPalettes = [
    ["#7C36E9", "#C7F45A"], //gekko
    ["#77D4E4", "#E9F4F7"], //jett
    ["#4A60B6", "#F55114"], //yoru
  ];

  const togglePalette = () => {
    setColorPaletteIndex((prevColorPaletteIndex) => (prevColorPaletteIndex + 1) % colorPalettes.length);
  };

  return (
    <div>
      <ColorPaletteContext.Provider value={{ colorPalettes, currentColorPaletteIndex, togglePalette }}>
      {children}
      </ColorPaletteContext.Provider>
    </div>
  );
};
