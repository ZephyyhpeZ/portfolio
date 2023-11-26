import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import Navbar from '../components/navbar';

const FourOfour = () => {
  const { colorPalettes, currentColorPaletteIndex, togglePalette } =
    useContext(ColorPaletteContext);
  const currentPalette = colorPalettes[currentColorPaletteIndex];
  const blur = {
    // backgroundImage: 'radial-gradient(#000 20%, transparent 10%)',
    // backgroundSize: '15px 15px',
    background: `radial-gradient(#00000000 1px, #0A0A0A 1px)`,
    backdropFilter: 'blur(10px)',
    backgroundSize: '4px 4px',
  };
  const outline = {
    color: 'transparent',
    fontWeight: 'bold',
    transition: '-webkit-text-stroke 0.5s ease-in-out',
    WebkitTextStroke: `1px ${currentPalette[0]}`,
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //   useEffect(() => {
  //     console.log('Element is in view: ', isInView);
  //   }, [isInView]);

  return (
    <div id="404">
      <Navbar />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed lg:h-[20px] h-[10px] w-screen z-40"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed h-screen w-[10px] lg:w-[20px]  z-40"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed h-screen w-[10px] lg:w-[20px] right-0 z-40"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed lg:h-[80px] h-[65px] bottom-0 w-screen z-40"
      />
      <div className="relative">
        <center className="group">
          <div className="group-hover:blur-[10px]">
            <m.div
              className="lg:text-[300px] text-[25px] font-black italic transition ease-in-out cursor-default"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
              transition={{
                delay: 1.4,
                duration: 0.7,
                ease: 'easeInOut',
              }}
            >
              404
            </m.div>
            <m.div
              className=" lg:text-[300px] lg:left-[33%] text-[15px] left-[35%]  mix-blend-difference absolute top-[-5px] text-center font-black italic transition ease-in-out  cursor-default"
              style={{ color: currentPalette[0] }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
              transition={{
                delay: 1.7,
                duration: 0.7,

                ease: 'easeInOut',
              }}
            >
              404
            </m.div>
          </div>

          <m.div
            className=" lg:text-[40px] lg:left-[41%] text-[15px] left-[35%] absolute  transition ease-in-out text-center lg:top-[225px] font-light blur-sm group-hover:blur-none cursor-default"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 1.7,
              duration: 0.7,
              ease: 'easeInOut',
            }}
          >
            PAGE NOT FOUND
          </m.div>
        </center>
      </div>
    </div>
  );
};

export default FourOfour;
