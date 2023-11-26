import { useInView, motion as m, useAnimation } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import data from '../projectsData.json';

import { Outlet, Link } from 'react-router-dom';

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
              className=" lg:text-[25px] lg:left-[45.6%] lg:top-[-10px] mix-blend-difference absolute top-[-8px]  left-[38%] "
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
            className="lg:flex lg:flex-row lg:text-[12px] lg:mb-[100px] mb-[50px] lg:border-b-0 border-b"
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
            <div className="lg:w-[200px] lg:mb-[0px] lg:text-[14px] font-bold mb-[20px]">
              {data[item].title}
            </div>
            <div className="flex flex-col lg:w-[600px] lg:px-[20px] lg:mb-[0px] text-[12px] mb-[10px] tracking-wide">
              <div className=" text-justify lg:mb-[0px] mb-[20px]">
                {data[item].desc}
              </div>
              <div className="flex-grow"></div>
              <div className=" lg:text-right text-left tracking-widest font-light">
                {Object.keys(data[item].utilities).map((key, index, array) => (
                  <span key={key}>
                    {data[item].utilities[key]}
                    {index !== array.length - 1 ? ' - ' : ' '}
                  </span>
                ))}
                <span className="ml-[15px] cursor-pointer ">
                  <Link to={data[item].link}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Link>
                </span>
              </div>
            </div>
            <div className="lg:w-[500px] w-[300px] lg:h-[220px] h-full lg:mb-[0px] mb-[30px]">
              <img
                className="grayscale hover:grayscale-0 transition ease-in-out rounded-2xl"
                src={process.env.PUBLIC_URL + data[item].src}
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
