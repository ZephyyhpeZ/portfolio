import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Playground from './pages/Contact';
import Loading from './pages/loading';
import Contact from './pages/Contact';
import Testing from './pages/testing';

import { motion as m } from 'framer-motion';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPaletteProvider } from './components/colorPalettesContext';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';



function App() {
  const [isInitialLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const blur = {
    // backgroundImage: 'radial-gradient(#000 20%, transparent 10%)',
    // backgroundSize: '15px 15px',
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
    <ColorPaletteProvider>
      <div className="App">
        {isInitialLoading ? (
          <Loading />
        ) : (
          // <Testing>
          
          // </Testing>
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
              className=" fixed h-[20px] w-screen z-40"
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
              className=" fixed h-screen w-[20px]  z-40"
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
              className=" fixed h-screen w-[20px] right-0  z-40"
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
              className=" fixed h-[80px] bottom-0 w-screen z-40"
            />

            <Home />
            <About />
            <Projects />
            <Contact/>

         
          </div>
        )}
      </div>
    </ColorPaletteProvider>
  );
}

export default App;
