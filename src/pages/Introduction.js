import { motion as m } from 'framer-motion';
import { useRef, useEffect, useContext } from 'react';
import { ColorPaletteContext } from '../components/colorPalettesContext';
const Home = () => {
  const { colorPalettes, currentColorPaletteIndex, togglePalette } =
    useContext(ColorPaletteContext);
  const currentPalette = colorPalettes[currentColorPaletteIndex];
  return (
    <div
      id="Home"
      className="flex justify-center items-center lg:h-[100vh] lg:mb-0 h-[80vh] mb-[150px]"
    >
      <div className=" lg:mt-[80px] lg:w-[1000px] lg:my-[250px] w-[350px] my-[20px] ">
        <div className=" ">
          <center>
            <div className="relative">
              <m.div
                className="lg:text-[25px] text-[15px]"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
                transition={{
                  delay: 1.4,
                  duration: 0.7,
                  ease: 'easeInOut',
                }}
              >
                INTRODUCTION
              </m.div>
              <m.div
                className=" lg:text-[25px] lg:left-[41%] text-[15px] left-[35%] mix-blend-difference absolute top-[-5px] text-center "
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
                INTRODUCTION
              </m.div>
            </div>

            <m.hr
              style={{ borderColor: currentPalette[1] }}
              initial={{ width: '0%', opacity: 0 }}
              animate={{ width: '100%', opacity: 100 }}
              transition={{
                delay: 1.7,
                duration: 0.7,

                ease: 'easeInOut',
              }}
            />
            <m.div
              className=" lg:text-[150px] lg:leading-[150px] lg:mb-[15px] text-[70px] mb-[15px] font-black tracking-tighter "
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
              transition={{
                delay: 1.9,
                duration: 0.7,

                ease: 'easeInOut',
              }}
            >
              IMANUEL
            </m.div>
            <m.hr
              style={{ borderColor: currentPalette[1] }}
              initial={{ width: '0%', opacity: 0 }}
              animate={{ width: '100%', opacity: 100 }}
              transition={{
                delay: 1.7,
                duration: 0.7,

                ease: 'easeInOut',
              }}
            />
            <m.div
              className="mt-[20px] lg:text-[16px] text-[12px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{
                delay: 2.2,
                duration: 0.7,
                ease: 'easeInOut',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod purus eu nulla molestie, id lobortis magna tincidunt.{' '}
            </m.div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Home;
