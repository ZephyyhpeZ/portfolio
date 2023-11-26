import Layout from './pages/Layout';
import { motion as m } from 'framer-motion';
import Loading from './pages/loading';
import Testing from './pages/testing';
import FourOfour from './pages/404'

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    }, 5000);
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
      {isInitialLoading ? (
        <Loading />
      ) : (
        // <Testing/>
        <BrowserRouter>
          <Routes>
            <Route path="portfolio" element={<Layout />} />
            <Route path="Testing" element={<Testing />} />
            <Route path="404" element={<FourOfour />} />
          </Routes>
        </BrowserRouter>
      )}
    </ColorPaletteProvider>
  );
}

export default App;
