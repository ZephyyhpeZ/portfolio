import React, { useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';

const Introduction = () => {
  const [inputValue, setInputValue] = useState('');
  const [commands, setCommands] = useState([]);
  const commandsContainerRef = useRef(null);
  const defaultDelay = 6.7;
  useEffect(() => {
    commandsContainerRef.current.scrollTop =
      commandsContainerRef.current.scrollHeight;
  }, [commands]);


  return (
    <div
      className="Introduction lg:px-[110px] px-[20px] mb-[200px] h-[85vh]"
      id="Introduction"
    >
      <div className="flex flex-col h-full" ref={commandsContainerRef}>
    
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col w-full text-right justify-end">
            <m.div
              className="font-extrabold leading-none lg:text-[100px] text-[70px]"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{
                delay: defaultDelay + 0,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              IMANUEL
            </m.div>

            <m.hr
              className="border-[#1E1E1E]"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              transition={{
                delay: defaultDelay,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            />

            <div className="font-light flex justify-end">
              <m.div
                className="flex flex-col justify-end text-[#B3B3B3] lg:text-[14px] text-[12px]"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{
                  delay: defaultDelay + 0.4,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod purus eu nulla molestie, id lobortis magna
                tincidunt.
              </m.div>
              <m.div
                className="leading-none font-extralight lg:text-[35px] lg:ml-2 text-[35px]"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{
                  delay: defaultDelay + 0.5,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                03.12.01
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
