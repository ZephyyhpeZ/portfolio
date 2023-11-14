import { useInView, motion as m, useAnimation } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import data from '../projectsData.json';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {

    const { colorPalettes, currentColorPaletteIndex, togglePalette } =
      useContext(ColorPaletteContext);
    const currentPalette = colorPalettes[currentColorPaletteIndex];


  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <div id="Projects" className=" flex justify-center ">
      <div className=" lg:mt-[80px] lg:mb-[150px] lg:w-[1250px] w-[300px] mb-[150px]">
        <center className="mb-[50px]">
          <div className="relative">
            <m.div
              className="lg:text-[25px]"
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
                      },
                    }
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
            >
              PROJECTS
            </m.div>
            <m.div
              className=" lg:text-[25px] mix-blend-difference absolute top-[-10px] left-[45.6%]"
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
                      },
                      delay: 0.6,
                    }
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
            >
              PROJECTS
            </m.div>
          </div>
        </center>
        {Object.keys(data).map((item, index) => (
          <m.div
            className="flex flex-row text-[12px] mb-[100px]"
            key={item}
            ref={ref}
            animate={
              isInView
                ? {
                    opacity: 1,

                    transition: {
                      opacity: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                      delay: 0.3 + (index + 2) / 10,
                    },
                  }
                : {
                    opacity: 0,
                  }
            }
          >
            <div className="lg:w-[200px] font-bold lg:text-[14px]">
              {data[item].title}
            </div>
            <div className="flex flex-col lg:w-[600px] px-[20px]">
              <div className=" text-justify">{data[item].desc}</div>
              <div className="flex-grow"></div>
              <div className=" text-right tracking-widest font-light">
                {Object.keys(data[item].utilities).map((key, index, array) => (
                  <span key={key}>
                    {data[item].utilities[key]}
                    {index !== array.length - 1 ? ' - ' : ' '}
                  </span>
                ))}
                <span className="ml-[15px]">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </div>
            </div>
            <div className="w-[500px] h-full">
              <img
                className="grayscale hover:grayscale-0 transition ease-in-out "
                src={require(// `${data[item].src}`
                '../images/hanni.png')}
                alt=""
              />
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
