import React, { useEffect, useRef, useState } from 'react';
import data from '../datas/internshipsData.json';
import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const initialDelay = 0.8;
  return (
    <div
      className="Experience lg:px-[110px] lg:h-[80vh] lg:mb-[100px] h-[80vh] px-[20px] mb-[250px]"
      ref={ref}
      id="Experience"
    >
      <m.div
        className="  text-right font-light lg:text-[18px]"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{
          delay: initialDelay - 0.3,
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        EXPERIENCES
      </m.div>

      <div className=" font-light lg:flex relative h-[100%] items-center text-[#B3B3B3] lg:text-[14px] lg:visible hidden ">
        <m.hr
          className="absolute w-full border-[#1E1E1E] -z-10 "
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
            duration: 0.5,
            ease: 'easeInOut',
          }}
        />

        <m.hr
          className="absolute ml-[50%] w-screen border-[#0A0A0A] -z-10 "
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
            duration: 0.5,
            ease: 'easeInOut',
          }}
        />
        <m.hr
          className="absolute ml-[50%] w-[100px] border-dashed border-[#1E1E1E] -z-10 "
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
            delay: initialDelay + 0.1,
            duration: 0.5,
            ease: 'easeInOut',
          }}
        />
        {Object.keys(data).map((item, index) => (
          <div>
            <m.div
              className=" absolute bg-[#0A0A0A] lg:ml-[90px] px-3 "
              initial={{
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              }}
              animate={
                isInView
                  ? {
                      y: -10,
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    }
                  : {
                      opacity: 0,

                      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    }
              }
              transition={{
                delay: initialDelay,
                duration: 0.5,
                ease: 'easeInOut',
                color: {
                  delay: initialDelay + 0.5 * index,
                  duration: 0.5,
                  ease: 'easeInOut',
                },
              }}
            >
              {data[item].duration}
            </m.div>
            <m.svg
              ref={ref}
              width="124"
              height="176"
              viewBox="0 0 124 176"
              fill="none"
              className="absolute lg:ml-[290px] lg:mt-[-175px] lg:top-1/2"
              initial={{
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              }}
              animate={
                isInView
                  ? {
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    }
                  : {
                      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    }
              }
              transition={{
                delay: initialDelay + 0.3 * index,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              <path
                d="M1 174.804C17 176 53.4292 163.089 67.851 80.191C82.2727 -2.70659 127.191 1.34827 122.684 1.34807"
                stroke="#1E1E1E"
                strokeOpacity="1"
              />
            </m.svg>
            <m.div
              className=" absolute lg:ml-[420px] lg:mt-[-188px] lg:top-1/2"
              initial={{
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              }}
              animate={
                isInView
                  ? {
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    }
                  : {
                      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    }
              }
              transition={{
                delay: initialDelay + 0.6 * index,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              {data[item].company}
            </m.div>
          </div>
        ))}
      </div>

      <div className=" font-light flex relative h-[100%] items-center text-[#B3B3B3] lg:text-[14px] mt-[100px] lg:hidden visible">
        <div className="absolute h-full border-[#1E1E1E] border-l right-0 top-0"></div>
        <div className="absolute h-[100px] border-[#1E1E1E] border-l right-0 bottom-0 border-dashed "></div>
        {/* <m.hr
          className="absolute w-full border-[#1E1E1E] -z-10 "
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
            duration: 0.5,
            ease: 'easeInOut',
          }}
        /> */}

        {/* <m.hr
          className="absolute ml-[50%] w-screen border-[#0A0A0A] -z-10 "
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
            duration: 0.5,
            ease: 'easeInOut',
          }}
        /> */}
        {/* <m.hr
          className="absolute ml-[50%] w-[100px] border-dashed border-[#1E1E1E] -z-10 "
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
            delay: initialDelay + 0.1,
            duration: 0.5,
            ease: 'easeInOut',
          }}
        /> */}
        {Object.keys(data).map((item, index) => (
          <div
            className="absolute right-0 top-0 "
            style={{ top: `${index * 100}px` }}
          >
            <div className="w-full border-[#1E1E1E] border-t "></div>
            <div className="mr-2 flex justify-end"> {data[item].duration}</div>
            <div className="mr-2"> {data[item].company}</div>
          </div>
          // <div>
          //   <m.div
          //     className=" absolute bg-[#0A0A0A] lg:ml-[90px] px-3 "
          //     initial={{
          //       clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          //     }}
          //     animate={
          //       isInView
          //         ? {
          //             y: -10,
          //             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          //           }
          //         : {
          //             opacity: 0,

          //             clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          //           }
          //     }
          //     transition={{
          //       delay: initialDelay,
          //       duration: 0.5,
          //       ease: 'easeInOut',
          //       color: {
          //         delay: initialDelay + 0.5 * index,
          //         duration: 0.5,
          //         ease: 'easeInOut',
          //       },
          //     }}
          //   >
          //     {data[item].duration}
          //   </m.div>
          //   <m.svg
          //     ref={ref}
          //     width="124"
          //     height="176"
          //     viewBox="0 0 124 176"
          //     fill="none"
          //     className="absolute lg:ml-[290px] lg:mt-[-175px] lg:top-1/2"
          //     initial={{
          //       clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          //     }}
          //     animate={
          //       isInView
          //         ? {
          //             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          //           }
          //         : {
          //             clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          //           }
          //     }
          //     transition={{
          //       delay: initialDelay + 0.3 * index,
          //       duration: 0.5,
          //       ease: 'easeInOut',
          //     }}
          //   >
          //     <path
          //       d="M1 174.804C17 176 53.4292 163.089 67.851 80.191C82.2727 -2.70659 127.191 1.34827 122.684 1.34807"
          //       stroke="#1E1E1E"
          //       strokeOpacity="1"
          //     />
          //   </m.svg>
          //   <m.div
          //     className=" absolute lg:ml-[420px] lg:mt-[-188px] lg:top-1/2"
          //     initial={{
          //       clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          //     }}
          //     animate={
          //       isInView
          //         ? {
          //             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          //           }
          //         : {
          //             clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          //           }
          //     }
          //     transition={{
          //       delay: initialDelay + 0.6 * index,
          //       duration: 0.5,
          //       ease: 'easeInOut',
          //     }}
          //   >
          //     {data[item].company}
          //   </m.div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
