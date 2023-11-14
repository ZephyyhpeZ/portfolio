import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import imanuel4 from '../images/imanuel_4.png';
const About = () => {
  const { colorPalettes, currentColorPaletteIndex, togglePalette } =
    useContext(ColorPaletteContext);
  const currentPalette = colorPalettes[currentColorPaletteIndex];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});


  return (
    <div id="About" className=" flex justify-center ">
      <div className=" lg:mt-[80px] lg:mb-[150px] lg:w-[1200px] w-[300px] mb-[150px]">
        <div className="relative text-right mb-[50px]">
          <m.div
            className="lg:text-[20px]"
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
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
                    y: 20,
                  }
            }
          >
            ABOUT ME
          </m.div>
          <m.div
            className=" lg:text-[20px] mix-blend-difference absolute top-[-10px] text-right left-[91.88%]"
            style={{ color: currentPalette[0] }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
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
                    y: 10,
                  }
            }
          >
            ABOUT ME
          </m.div>
        </div>
        <div className="absolute lg:w-[300px] ml-[900px]">
          <m.img
            className="grayscale hover:grayscale-0 transition ease-in-out"
            src={imanuel4}
            alt=""
            animate={
              isInView
                ? {
                    opacity: 1,

                    transition: {
                      opacity: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                      delay: 0.7,
                    },
                  }
                : {
                    opacity: 0,
                  }
            }
          />
        </div>
        <m.div
          className="lg:w-[500px] lg:mb-[50px]"
          animate={
            isInView
              ? {
                  opacity: 1,

                  transition: {
                    opacity: {
                      duration: 1,
                      ease: 'easeInOut',
                    },
                    delay: 0.5,
                  },
                }
              : {
                  opacity: 0,
                }
          }
        >
          <div className="lg:mb-[10px] font-light tracking-widest">
            <span style={{ color: currentPalette[1] }}>0. </span>
            Byte-Sized Summary
          </div>
          <hr
            className="lg:mb-[20px] "
            style={{ borderColor: currentPalette[0] }}
          />
          <div
            ref={ref}
            className="lg:ml-[50px] lg:text-[14px] text-justify font-light tracking-widest leading-[18px]"
          >
            Hello! I'm Imanuel, currently in my 7th semester at Kalbis Institute
            pursuing a major in Informatics with specialize major in Soft
            Computing. Currently I'm busy with internship, where I'm working on
            a real projects and applying my academic knowledge from what I've
            learned in my university. Additionally, I'm working on my own
            personal project where I can implement my understanding in computer
            science with things that interest me.
          </div>
        </m.div>
        <m.div
          className="lg:w-[500px] ml-[300px]"
          animate={
            isInView
              ? {
                  opacity: 1,

                  transition: {
                    opacity: {
                      duration: 1,
                      ease: 'easeInOut',
                    },
                    delay: 0.6,
                  },
                }
              : {
                  opacity: 0,
                }
          }
        >
          <div className="lg:mb-[10px] font-light text-left tracking-widest">
            <span style={{ color: currentPalette[1] }}>1. </span>
            Recent Tech Toolkit
          </div>
          <hr
            className="lg:mb-[20px] "
            style={{ borderColor: currentPalette[0] }}
          />
          <div className="lg:ml-[50px] lg:text-[14px] text-justify font-light tracking-widest leading-[18px]">
            <ul className=" transition ease-in-out list-disc ">
              <li> Javascript</li>
              <li> PHP</li>
              <li> Node.js</li>
              <li> Express</li>
              <li> Python</li>
              <li> React</li>
            </ul>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default About;
