import React, { useContext, useState } from "react";
import { ColorPaletteContext } from './colorPalettesContext';

const TwoCircle = () => {
  const { colorPalettes, currentColorPaletteIndex, togglePalette } = useContext(ColorPaletteContext);
  const currentPalette = colorPalettes[currentColorPaletteIndex];
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setTimeout(() => {
        togglePalette()
        setClicked(false);
      }, 100);
    }, 300);
  };

  const circleStyle = {
    transition: "fill 0.5s ease-in-out",
  };

  return (
    <svg
      className="lg:w-[33px] lg:h-[22px] w-[40px] h-[29px] cursor-pointer"
      viewBox="0 0 33 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <circle
        className={clicked ? 'secondaryColor' : ''}
        style={circleStyle}
        cx="11"
        cy="11"
        r="11"
        transform="matrix(-1 0 0 1 33 0)"
        fill={currentPalette[1]}
      />
      <circle
        className={clicked ? 'primaryColor' : ''}
        style={circleStyle}
        cx="11"
        cy="11"
        r="11"
        transform="matrix(-1 0 0 1 22 0)"
        fill={currentPalette[0]}
      />
    </svg>
    // <svg
    //   width="33"
    //   height="28"
    //   viewBox="0 0 33 22"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <circle
    //     className=" bg-slate-400"
    //     fill="white"
    //     cx="11"
    //     cy="11"
    //     r="11"
    //     transform="matrix(-1 0 0 1 33 0)"
    //   />
    //   <circle
    //     className=" bg-white"
    //     fill="white"
    //     cx="11"
    //     cy="11"
    //     r="11"
    //     transform="matrix(-1 0 0 1 22 0)"
    //   />
    // </svg>
  );
};

export default TwoCircle;
