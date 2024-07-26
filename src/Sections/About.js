import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const initialDelay = 0.3
  return (
    <div
      className="About lg:px-[110px] h-[85vh] mb-[200px] px-[20px]"
      id="About"
    >
      <div className="flex h-[100%] lg:flex-row flex-col ">
        <div className="relative lg:w-1/3 lg:justify-end flex w-full">
          <m.div
            className="absolute lg:top-1/2 lg:translate-x-[-240px] lg:-mt-[210px] translate-y-[-30px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 100 } : { opacity: 0 }}
            transition={{
              delay: initialDelay + 0.5,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            ABOUT
          </m.div>
          <m.img
            src={process.env.PUBLIC_URL + '/IMAGE1.png'}
            className="lg:absolute lg:h-[370px] lg:w-[231px] lg:top-1/2 object-cover lg:-translate-y-1/2 h-[100%] mx-auto w-[60%]"
            initial={{
              clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
            }}
            animate={
              isInView
                ? { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
                : { opacity: 0 }
            }
            transition={{
              delay: initialDelay,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          />

          <m.div
            className=" absolute border-t border-[#1E1E1E] lg:w-[1050px] lg:top-1/2 lg:-mt-[185px] lg:translate-x-[740px] w-[100%] "
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
              delay: initialDelay + 0.7,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          ></m.div>
          <m.div
            className=" absolute border-b  border-[#1E1E1E] lg:w-[800px] lg:bottom-full lg:top-1/2 lg:mt-[185px] lg:translate-x-[420px] w-[100%] bottom-0"
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
              delay: initialDelay + 0.7,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          ></m.div>
          <m.div
            className=" absolute border-l border-[#1E1E1E] lg:h-[500px] lg:right-[0] lg:mr-[231px] lg:top-1/2 lg:-mt-[245px] h-[100%] "
            initial={{
              clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    opacity: 1,
                  }
                : { opacity: 0 }
            }
            transition={{
              delay: initialDelay + 0.7,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          ></m.div>
          <m.div
            className=" absolute border-r  border-[#1E1E1E] lg:h-[500px] lg:top-1/2 lg:-mt-[245px] h-[100%] left-0 right-0 mx-auto"
            initial={{
              clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    opacity: 1,
                  }
                : { opacity: 0 }
            }
            transition={{
              delay: initialDelay + 0.7,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          ></m.div>

          {/* top right */}
          <m.div
            className="relative"
            initial={{ y: 185, x: -115.5, opacity: 0 }}
            animate={isInView ? { y: 0, x: 0, opacity: 100 } : { opacity: 0 }}
            transition={{
              delay: initialDelay,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className=" absolute border-t border-[white] lg:w-[15px] lg:top-1/2 lg:opacity-100 lg:-mt-[185px] lg:translate-x-[-7px] opacity-0"></div>
            <div className=" absolute border-r border-b border-[white] lg:h-[15px] lg:opacity-100 lg:top-1/2 lg:-mt-[192px] opacity-0 "></div>
          </m.div>

          {/* top left */}
          <m.div
            className="relative"
            initial={{ y: 185, x: 115.5, opacity: 0 }}
            animate={isInView ? { y: 0, x: 0, opacity: 100 } : { opacity: 0 }}
            transition={{
              delay: initialDelay,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className=" absolute border-t border-[white] lg:w-[15px] lg:top-1/2 -mt-[185px] lg:opacity-100 lg:translate-x-[-239px] w-[15px] top-1/2 opacity-0"></div>
            <div className=" absolute border-l border-b border-[white] lg:h-[15px] lg:right-[0] lg:opacity-100 lg:mr-[231px] lg:top-1/2 lg:-mt-[192px] h-[15px] top-1/2 opacity-0"></div>
          </m.div>

          {/* bottom right */}
          <m.div
            className="relative"
            initial={{ y: -185, x: -115.5, opacity: 0 }}
            animate={isInView ? { y: 0, x: 0, opacity: 100 } : { opacity: 0 }}
            transition={{
              delay: initialDelay,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className=" absolute border-b  border-[white] lg:w-[15px] lg:top-1/2 mt-[185px] lg:opacity-100 lg:translate-x-[-7px] opacity-0"></div>
            <div className=" absolute border-r border-b border-[white] lg:h-[15px] lg:opacity-100 lg:top-1/2 lg:mt-[178px] h-[15px] top-1/2 opacity-0"></div>
          </m.div>

          {/* bottom left */}
          <m.div
            className="relative"
            initial={{ y: -185, x: 115.5, opacity: 0 }}
            animate={isInView ? { y: 0, x: 0, opacity: 100 } : { opacity: 100 }}
            transition={{
              delay: initialDelay,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className=" absolute border-b  border-[white] lg:w-[15px] lg:top-1/2 mt-[185px] lg:opacity-100 lg:translate-x-[-239px] opacity-0"></div>
            <div className=" absolute border-l border-b border-[white] h-[15px] lg:right-[0] lg:opacity-100 lg:mr-[231px] lg:top-1/2 -mt-[-178px]  opacity-0"></div>
          </m.div>
        </div>
        <div className=" lg:w-2/3 flex flex-col justify-center items-start text-[#B3B3B3] font-light w-full">
          <div className="ml-3">
            <m.div
              className="lg:text-[16px] lg:w-1/2 lg:mb-3 lg:mt-0 mt-[40px]"
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 100 } : { opacity: 0 }}
              transition={{
                delay: initialDelay + 1,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              Byte-sized Summary
            </m.div>
            <m.div
              className="lg:text-[14px] lg:w-[550px] lg:mb-[40px] lg:mt-0 mt-[10px]"
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 100 } : { opacity: 0 }}
              transition={{
                delay: initialDelay + 1.1,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              Hello! I'm Imanuel, currently in my 7th semester at Kalbis
              Institute pursuing a major in Informatics with specialize major in
              Soft Computing. Currently I'm busy with internship, where I'm
              working on a real projects and applying my academic knowledge from
              what I've learned in my university. Additionally, I'm working on
              my own personal project where I can implement my understanding in
              computer science with things that interest me.
            </m.div>
            <m.div
              className="lg:text-[16px] lg:w-1/2 lg:mb-3 lg:mt-0 mt-[40px]"
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 100 } : { opacity: 0 }}
              transition={{
                delay: initialDelay + 1.2,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              Recent Tech Toolkit
            </m.div>
            <m.ul
              className="list-disc pl-5 lg:text-[14px] lg:mt-0 mt-[10px]"
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 100 } : { opacity: 0 }}
              transition={{
                delay: initialDelay + 1.3,
                duration: 0.5,
                ease: 'easeInOut',
              }}
              ref={ref}
            >
              <li>JavaScript (ES6+)</li>
              <li>PHP</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>React</li>
            </m.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
