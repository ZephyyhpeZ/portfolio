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
        <div className="leading-[50px] ">
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 1.4,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            style={{ color: currentPalette[1] }}
            className=" lg:text-[40px] text-[30px] transition ease-in-out"
          >
            Hello,
          </m.div>
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 1.6,
              duration: 0.5,

              ease: 'easeInOut',
            }}
            className=" lg:text-[60px] text-[40px] font-bold"
          >
            my name is Imanuel
          </m.div>
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 1.8,
              duration: 0.5,

              ease: 'easeInOut',
            }}
            className=" lg:w-[540px] lg:leading-[26px] lg:pt-8 lg:text-sm leading-[26px] pt-4 text-[16px] text-slate-200"
            
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab,
            ipsum iusto amet alias placeat excepturi perspiciatis distinctio
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
