import Navbar from '../components/navbar';
import Home from './Home'
import Introduction from './Introduction';
import About from './About.j';
import About1 from './About1';
import Experiences from './Experiences';
// import Projects from './pages/Projects';
import Projects1 from './Projects1';
import Playground from './Contact';
import Contact from './Contact';

import { motion as m } from 'framer-motion';



import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Layout() {
  const [isInitialLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const blur = {
    background: `radial-gradient(#00000000 1px, #0A0A0A 1px)`,
    backdropFilter: 'blur(10px)',
    backgroundSize: '4px 4px',
  };
  const outline = {
    color: 'transparent',
    fontWeight: 'bold',
    transition: '-webkit-text-stroke 0.5s ease-in-out',
    WebkitTextStroke: `1px #FCFCFC`,
  };

  const wave = {
    backgroundColor: 'red',
    color: 'blue',
  };

  const secondWave = {
    backgroundColor: 'blue',
  };



  return (
    <div>
      <Navbar />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed lg:h-[20px] h-[10px] w-screen z-40"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed h-screen w-[10px] lg:w-[20px]  z-40"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed h-screen w-[10px] lg:w-[20px] right-0 z-40"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.1,
          delay: 1,
          ease: 'easeInOut',
        }}
        style={blur}
        className=" fixed lg:h-[80px] h-[65px] bottom-0 w-screen z-40"
      />
      <Introduction />
      <About1 />
      <Experiences />
      <Projects1 />
      <Contact />
    </div>
  );
}

export default Layout;
