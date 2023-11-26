import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';

import imanuel3 from '../images/imanuel_3.png';

const About = () => {
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
    <div id="About" className=" flex justify-center ">
      <div className=" lg:mt-[80px] lg:mb-[150px] lg:w-[1100px] w-[300px] mb-[150px]">
        <div>
          <div className="text-[100px] overflow-hidden flex whitespace-nowrap relative">
            <div
              className="absolute bg-white lg:w-[50px] z-30 w-[20px]"
              style={blur}
            >
              &nbsp;
            </div>
            <m.div
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: [0, -1042],
                      transition: {
                        x: {
                          repeat: Infinity,
                          repeatType: 'loop',
                          duration: 5,
                          ease: 'linear',
                        },
                        opacity: {
                          duration: 1,
                          ease: 'easeInOut',
                        },
                        delay: 0.2,
                      },
                    }
                  : {
                      opacity: 0,
                    }
              }
              style={outline}
            >
              About me. About me. About me. About me.
            </m.div>
            <div
              className="absolute bg-white lg:w-[50px] w-[20px] z-30 right-0"
              style={blur}
            >
              &nbsp;
            </div>
          </div>
          <center>
            <m.hr
              animate={
                isInView
                  ? {
                      opacity: 1,
                      transition: {
                        opacity: {
                          duration: 1,
                          ease: 'easeInOut',
                        },
                        delay: 0.2,
                      },
                    }
                  : {
                      opacity: 0,
                    }
              }
              className="lg:w-[1000px] w-[300px]"
            />
          </center>
        </div>
        <m.div
          animate={
            isInView
              ? {
                  y: 0,
                  opacity: 1,

                  transition: {
                    y: {
                      duration: 0.5,
                      ease: 'easeInOut',
                    },
                    opacity: {
                      duration: 1,
                      ease: 'easeInOut',
                    },
                    delay: 0.2,
                  },
                }
              : { y: 10, opacity: 0 }
          }
          ref={ref}
          className="flex lg:mt-8 lg:justify-between text-justify lg:flex-row flex-col mt-3"
        >
          <div className="lg:w-[50px] "></div>
          <div className="lg:w-[450px] text-sm w-[300px] font-medium text-slate-200">
            <p className="leading-7 ">
              Hello! I'm Imanuel, currently in my 7th semester at kalbis
              Institute pursuing a major in Informatics with specialize major in
              Soft Computing. Currently I'm busy with internship, where I'm
              working on a real projects and applying my academic knowledge from
              what I've learned in my university. Additionaly, I'm working on my
              own personal project where I can implement my understanding in
              computer science with things that interest me.
            </p>
            <br />
            <p>Programming langguages and frameworks:</p>
            <ul
              className="list-none mt-5 grid grid-cols-2 gap-y-2 gap-x-5 font-light transition ease-in-out"
              style={{ color: currentPalette[1] }}
            >
              <li> Node.js</li>
              <li> React</li>
              <li> Express</li>
              <li> Php</li>
        
            </ul>
          </div>

          <div className="lg:w-[500px] lg:mt-0 w-[300px] mt-8">
            <center>
              <img
                className=" rounded-xl lg:w-[300px] w-[200px] grayscale hover:grayscale-0 transition ease-in-out"
                src={imanuel3}
                alt=""
              />
            </center>
          </div>
          <div className="w-[50px] "></div>
        </m.div>
      </div>
    </div>
  );
};

export default About;
