import { useInView, motion as m, useAnimation } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import data from '../data.json';
import alik from '../images/alik.png';



const Projects = () => {

    const { colorPalettes, currentColorPaletteIndex, togglePalette } =
      useContext(ColorPaletteContext);
    const currentPalette = colorPalettes[currentColorPaletteIndex];
  const blur = {
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
  const isInView = useInView(ref, {once: true});
const controls = useAnimation();
  return (
    <div id="Projects" className="flex justify-center">
      <div className=" my-[150px] lg:w-[1220px] w-[300px] ">
        <div className="flex justify-start ">
          <m.div
            ref={ref}
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 100,
                    transition: {
                      delay: 0.4,
                      opacity: {
                        duration: 1,
                      },
                    },
                  }
                : { x: -10, opacity: 0 }
            }
            className="flex flex-col items-center text-center justify-center lg:w-[100px] w-[50px]"
          >
            <div
              className="lg:text-[100px] text-[50px] transform -rotate-90 leading-none"
              style={outline}
            >
              Projects.
            </div>
          </m.div>

          <m.div
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 100,
                    transition: {
                      delay: 0.5,
                      opacity: {
                        duration: 1,
                      },
                    },
                  }
                : { x: -10, opacity: 0 }
            }
            className="flex  overflow-x-scroll overflow-y-hidden  w-full lg:ml-10 ml-2"
          >
            {Object.keys(data).map((item, index) => (
              <m.div
                animate={
                  isInView
                    ? {
                        x: 0,
                        opacity: 100,
                        transition: {
                          delay: 0.5,
                          opacity: {
                            duration: 1,
                          },
                        },
                      }
                    : { x: -10, opacity: 0 }
                }
                className="group lg:min-w-[700px] lg:h-[300px] min-w-[300px] h-[200px]  lg:ml-20 ml-5 mt-5 relative overflow-hidden items-center "
              >
                <img
                  className="lg:w-[700px] lg:h-[300px] w-[200px] h-[200px] filter grayscale blur-[2px]  object-cover p-3 group-hover:filter-none group-hover:border ease-in-out duration-500"
                  src={alik}
                  alt=""
                />
                <div className="absolute lg:w-full lg:h-full w-[200px] h-[200px] bottom-0 inset-x-0 lg:text-[50px] text-[20px] font-semibold leading-4 text-center 4 top-[40%] group-hover:opacity-10 ease-in-out duration-500">
                  {data[item].title}
                </div>
              </m.div>
            ))}
            <m.div
              style={blur}
              className="absolute lg:min-w-[20px] h-[350px] min-w-[10px] "
            ></m.div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
