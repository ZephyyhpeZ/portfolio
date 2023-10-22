import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import imanuel from '../images/imanuel.png';
import imanuel2 from '../images/imanuel_2.png';
import imanuel3 from '../images/imanuel_3.png';
import imanuel4 from '../images/imanuel_4.png';
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
    <div id="About" className=" flex justify-center">
      <div className=" mt-[80px] mb-[150px] w-[1100px]">
        <div>
          <div className="text-[100px] overflow-hidden flex whitespace-nowrap relative">
            <div className="absolute bg-white w-[50px] z-30" style={blur}>
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
              className="absolute bg-white w-[50px] z-30 right-0"
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
              className="w-[1000px]"
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
          className="flex mt-8 justify-between text-justify "
        >
          <div className="w-[50px] "></div>
          <div className="w-[450px] text-sm">
            <p className="leading-7">
              Hello! I'm Imanuel, currently in my 7th semester at kalbis
              Institute pursuing a major in Informatics with specialize major in
              Soft Computing. Currently I'm busy with internship, where I'm
              working on a real projects and applying my academic knowledge from
              what I've learned in my university. Additionaly, I'm working on my
              own personal project where I can implement my understanding in
              computer science with things that interest me.
            </p>
            <br />
            <p>Programming lagguages:</p>
            <ul className="list-disc">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>

          <div className="w-[500px]">
            <center>
              <img className=" rounded-xl w-[300px]" src={imanuel3} alt="" />
            </center>
          </div>
          <div className="w-[50px] "></div>
        </m.div>
      </div>
    </div>
  );
};

export default About;
