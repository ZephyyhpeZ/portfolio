import { motion as m } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import { ColorPaletteContext } from '../components/colorPalettesContext';

const Loading = () => {

 
  const { colorPalettes, currentColorPaletteIndex, togglePalette } =
    useContext(ColorPaletteContext);
  const currentPalette = colorPalettes[currentColorPaletteIndex];

 const wave = {
   backgroundColor: currentPalette[0],
   color: currentPalette[1],
 };

 const secondWave = {
   backgroundColor: currentPalette[1],
 };

  return (
    <div>
      <m.div
        style={secondWave}
        className="w-screen h-screen  fixed top-0 z-49"
        initial={{ top: 0 }}
        animate={{ top: '100vh' }}
        transition={{
          duration: 4,
          delay: 0.7,
          ease: 'easeInOut',
        }}
      />
      <m.div
        style={wave}
        className="w-screen h-screen  fixed top-0 z-50"
        initial={{ top: 0 }}
        animate={{ top: '100vh' }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
        }}
      >
        <m.center
          className="text-9xl"
          initial={{ x: -1200 }}
          animate={{ x: 1200 }}
          transition={{
            duration: 4,

            ease: 'easeInOut',
          }}
        >
          LOADING.......
        </m.center>
        <m.center
          className="text-9xl"
          initial={{ x: -1200 }}
          animate={{ x: 1200 }}
          transition={{
            duration: 4,
            delay: 0.1,

            ease: 'easeInOut',
          }}
        >
          LOADING.......
        </m.center>
        <m.center
          className="text-9xl"
          initial={{ x: -1200 }}
          animate={{ x: 1200 }}
          transition={{
            duration: 4,
            delay: 0.2,

            ease: 'easeInOut',
          }}
        >
          LOADING.......
        </m.center>
      </m.div>
    </div>
  );
};

export default Loading;
