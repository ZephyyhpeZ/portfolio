import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';

const Transition = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < 100) {
          return prevNumber + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20); // Adjust the interval duration as needed for smoother or faster animation

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="Transition">
      <m.div
        className="fixed top-0 h-screen w-screen bg-fuchsia-700 z-[9970] pointer-events-none"
        initial={{
          clipPath:
            'polygon(0% 0%, 0% 100%, 0 100%, 0 49%, 0% 49%, 0% 50%, 0 50%, 0 100%, 100% 100%, 100% 0%)',
        }}
        animate={{
          clipPath: [
            'polygon(0% 0%, 0% 100%, 0 100%, 0 49%, 100% 49%, 100% 50%, 0% 50%, 0 100%, 100% 100%, 100% 0%)', // Line expands from left to right
            'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0)', // Line expands both upwards and downwards
          ],
        }}
        transition={{
          delay: 4,
          duration: 1.5,
          ease: 'easeInOut',
          times: [0.1, 1],
        }}
      ></m.div>
      <m.div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 7,
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="105"
          height="106"
          viewBox="0 0 110 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="p-3 border-[5px] border-[#7D49D9] "
        >
          <m.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.5,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <path
              d="M25.78 101.557L43.371 57H53.865L59.5669 60.8029L40.8233 106H29.2375L25.78 101.557ZM21.1092 57L35.9706 101.894L32.1491 106H18.7435L0 57H21.1092ZM69.2117 101.658L83.9517 57H105L86.2568 106H72.9118L69.2117 101.658ZM61.4473 57L79.463 101.827L75.8234 106H64.2376L45.0695 60.7356L51.0141 57H61.4473Z"
              fill="#7D49D9"
            />
            <path d="M44.2887 48V0H23V48H44.2887Z" fill="#7D49D9" />
            <path d="M82 48V0H60.7113V48H82Z" fill="#7D49D9" />
          </m.g>

          <m.text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="45"
            fill="#7D49D9"
            fontWeight="bold"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 2.5,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            {currentNumber}%
          </m.text>
        </svg>
      </m.div>
    </div>
  );
};

export default Transition;
