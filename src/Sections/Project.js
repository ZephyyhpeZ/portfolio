import React, { useEffect, useRef, useState } from 'react';
import data from '../datas/projectsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useInView, motion as m } from 'framer-motion';

const Project = () => {
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const initialDelay = 0.8;
  function force_scroll_sideways(element) {
    element.addEventListener('wheel', (event) => {
      event.preventDefault();

      let [x, y] = [event.deltaX, event.deltaY];
      let magnitude;

      if (x === 0) {
        magnitude = y > 0 ? -30 : 30;
      } else {
        magnitude = x;
      }
      magnitude = -magnitude;
      element.scrollBy({
        left: magnitude,
      });
    });
  }
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      force_scroll_sideways(element);
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', force_scroll_sideways);
      }
    };
  }, []);

  const [selectedId, setId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (index) => {
    console.log(isExpanded);
    if (index == selectedId) {
      setIsExpanded(!isExpanded);
      setId(index);
    } else {
      setId(index);
    }
  };

  const variants = {
    open: { opacity: 1, width: "70vw" },
    closed: { opacity: 0, width: 0 },
  };

  const variants1 = {
    open: { opacity: 1 },
    closed: { opacity: 0, width: 0 },
  };
  return (
    <div
      className="Project lg:px-[110px] lg:h-[80vh] lg:mb-[100px] mb-[400px] h-[80vh] px-[20px] "
      ref={ref}
    >
      <div className="absolute translate-y-[-200px] " id="Projects"></div>
      <div className=" h-[100%]  ">
        <div className=" font-light flex-col relative  items-center text-[#B3B3B3] lg:text-[14px] lg:mt-[310px]">
          <div
            className="flex w-full lg:h-[300px] h-[60vh] overflow-x-scroll overflow-hidden "
            ref={scrollRef}
          >
            {Object.keys(data).map((item, index) => (
              <div
                className="flex lg:pr-[70px] cursor-pointer pr-[70px]  "
                onClick={() => handleClick(index)}
              >
                <m.div
                  className=" border-l border-[#2e2e2e] lg:h-[300px] lg:ml-[1px] h-[60vh] ml-[1px] "
                  initial={{
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                          opacity: 1,
                        }
                      : {
                          clipPath:
                            'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                          opacity: 0,
                        }
                  }
                  transition={{
                    delay: initialDelay + 0.2 * index,
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                ></m.div>
                <m.div
                  className="lg:ml-[30px] ml-[20px]"
                  initial={{
                    x: '-10',
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          x: '0',
                          opacity: 1,
                        }
                      : {
                          x: '-10',
                          opacity: 0,
                        }
                  }
                  transition={{
                    delay: initialDelay + 0.3 * index,
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  0{1 + index}
                </m.div>
                <m.div
                  className=" border-l border-[#535353] lg:h-[300px] lg:ml-[10px] ml-[10px] h-[60vh]"
                  initial={{
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                          opacity: 1,
                        }
                      : {
                          clipPath:
                            'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                          opacity: 0,
                        }
                  }
                  transition={{
                    delay: initialDelay + 0.3 * index,
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                ></m.div>
                <m.div
                  className="flex lg:ml-[20px] lg:mt-[5px] ml-[20px] "
                  animate={
                    isExpanded && selectedId === index ? 'open' : 'close'
                  }
                  variants={variants}
                >
                  <m.div
                    animate={
                      isExpanded && selectedId === index ? 'closed' : 'open'
                    }
                    variants={variants1}
                  >
                    <m.div
                      className="flex flex-row "
                      initial={{
                        x: '-10',
                        opacity: 0,
                      }}
                      animate={
                        isInView
                          ? {
                              x: '0',
                              opacity: 1,
                            }
                          : {
                              x: '-10',
                              opacity: 0,
                            }
                      }
                      transition={{
                        delay: initialDelay + 0.5 * index,
                        duration: 0.5,
                        ease: 'easeInOut',
                      }}
                    >
                      {data[item].title
                        .toUpperCase()
                        .split(' ')
                        .map((word, wordIndex) => (
                          <div
                            key={wordIndex}
                            className="flex flex-col lg:ml-3 justify-center ml-3 lg:text-[14px] text-[14px] "
                          >
                            {word.split('').map((char, charIndex) => (
                              <span key={charIndex}>{char}</span>
                            ))}
                          </div>
                        ))}
                    </m.div>
                  </m.div>

                  <m.div
                    className="flex flex-col gap-0"
                    animate={
                      isExpanded && selectedId === index ? 'open' : 'closed'
                    }
                    variants={variants}
                  >
                    <div className="transition-all ease-in">
                      {data[item].title.toUpperCase()}
                      <Link to={data[item].link}>
                        <FontAwesomeIcon
                          className="ml-2"
                          icon={faExternalLinkAlt}
                        />
                      </Link>
                    </div>
                    <div className="flex lg:flex-row flex-col">
                      <div className="lg:h-[234.5px] lg:mt-[20px] lg:w-[465px] ">
                        <img
                          src={process.env.PUBLIC_URL + data[item].src}
                          className="  h-full w-full object-cover"
                        />
                      </div>
                      <div
                        variants={variants}
                        className=" lg:text-[14px] lg:mt-[20px] lg:ml-[20px] lg:w-[500px]  "
                      >
                        {data[item].desc}
                      </div>
                    </div>
                  </m.div>
                  {/* <m.div
                    animate={
                      isExpanded && selectedId === index ? 'open' : 'closed'
                    }
                    variants={variants}
                    className=" lg:text-[14px] lg:mt-[20px] lg:ml-[20px] flex  bg-green-900"
                  >
                    {data[item].desc}
                  </m.div> */}
                </m.div>
              </div>
            ))}
          </div>
          <div className="flex flex-col ">
            <m.hr
              className="absolute w-full border-[#1E1E1E] -z-10"
              initial={{
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              }}
              animate={
                isInView
                  ? {
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    }
                  : {
                      opacity: 0,
                      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    }
              }
              transition={{
                delay: initialDelay,
                duration: 1,
                ease: 'easeInOut',
              }}
            />
            <m.div
              className="absolute text-[#7D49D9] lg:text-[18px]"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{
                delay: initialDelay - 0.3,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              PROJECTS
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
