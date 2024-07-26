import React, { useEffect, useRef, useState } from 'react';
import data from '../datas/ExperimentsData.json';
import { Link } from 'react-router-dom';
import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';

const Experiment = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const initialDelay = 0.8;
  return (
    <div
      className="Experiment lg:px-[110px] lg:h-[80vh] h-[80vh] mb-[100px] px-[20px] "
      ref={ref}
      id="Experiment"
    >
      <m.div
        className=" font-light h-[100%] items-center text-[#B3B3B3] lg:text-[14px]"
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
      >
        <m.div
          className=" text-[#7D49D9] lg:text-[18px] flex justify-center"
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
        >
          EXPERIMENTS
        </m.div>
        {Object.keys(data).map((item, index) => (
          <Link to={data[item].link}>
            <div
              className="flex items-center justify-between mb-2 lg:text-[14px] cursor-pointer"
              key={index}
            >
              <span>{data[item].title}</span>
              <span className="flex-grow border-b border-gray-400 border-dotted leading-none ml-1">
                &nbsp;
              </span>
              <span className="ml-1">0{index + 1}</span>
            </div>
          </Link>
        ))}
      </m.div>
    </div>
  );
};

export default Experiment;
