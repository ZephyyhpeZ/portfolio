import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
const About = () => {
  const { colorPalettes, currentColorPaletteIndex, togglePalette } =
    useContext(ColorPaletteContext);
  const currentPalette = colorPalettes[currentColorPaletteIndex];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});


  return (
    <div id="About" className=" flex justify-center ">
      <div className=" lg:mt-[80px] lg:mb-[150px] lg:w-[1200px] w-[300px] mb-[200px]">
        <div className="relative text-right lg:mb-[50px] mb-[30px]">
          <m.div
            className="lg:text-[20px] text-[14px] text-center "
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
            className=" lg:text-[20px] lg:left-[46%] left-[39%] text-[14px] mix-blend-difference absolute lg:top-[-10px] top-[-5px] text-right "
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
        <div className="lg:absolute lg:w-[300px] lg:ml-[900px] lg:mb-0 lg:mx-[0px] w-[250px] mx-auto mb-[50px]">
          <m.img
            className="grayscale hover:grayscale-0 transition ease-in-out"
            src={process.env.PUBLIC_URL + '/images/imanuel_4.png'}
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
          className="lg:w-[500px] lg:mb-[50px] w-[300px]"
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
            className="lg:ml-[50px] lg:text-[14px] lg:mt-[0px] mt-[10px] text-[12px] text-justify font-light tracking-widest leading-[18px]"
          >
            Hello! I'm Imanuel, currently in my 7th semester at Kalbis Institute
            pursuing a major in Informatics with specialize major in Soft
            Computing. Currently I'm busy with internship, where I'm working on
            real projects and applying my academic knowledge from what I've
            learned in my university. Additionally, I'm working on my own
            personal project where I can implement my understanding in computer
            science with things that interest me.
          </div>
        </m.div>
        <m.div
          className="lg:w-[500px] lg:mt-0 lg:ml-[300px] w-[300px]  mt-[20px]"
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
          <div className="lg:ml-[50px] lg:text-[14px] ml-[20px] lg:mt-[0px] mt-[10px] text-[12px]  text-justify font-light tracking-widest leading-[18px]">
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
