import Navbar from './components/navbar';
import Home from './pages/Home';
import alik from './images/alik.png';
import imanuel from './images/imanuel.png';
import imanuel2 from './images/imanuel_2.png';
import imanuel3 from './images/imanuel_3.png';
import imanuel4 from './images/imanuel_4.png';
import { motion as m } from 'framer-motion';
import data from './data.json';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPaletteProvider } from './components/colorPalettesContext';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import Loading from './pages/loading';


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
   backgroundColor: "red",
   color: "blue",
 };

 const secondWave = {
   backgroundColor: "blue",
 };
  return (
    <ColorPaletteProvider>
      <div className="App">
        {isInitialLoading ? (
          <Loading />
        ) : (
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

              <Home/>
            <div id="About" className=" flex justify-center">
              <div className=" mt-[80px] mb-[150px] w-[1100px]">
                <div>
                  <div className="text-[100px] overflow-hidden flex whitespace-nowrap relative">
                    <div
                      className="absolute bg-white w-[50px] z-30"
                      style={blur}
                    >
                      &nbsp;
                    </div>
                    <m.div
                      animate={{
                        x: [0, -1042],
                        transition: {
                          x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 5,
                            ease: 'linear',
                          },
                        },
                      }}
                      style={outline}
                    >
                      About me. About me. About me. About me.
                    </m.div>
                    <div
                      className="absolute bg-white w-[50px] z-30 right-0"
                      style={blur}
                    >
                      &nbsp;
                    </div>
                  </div>
                  <center>
                    <hr className="w-[1000px]" />
                  </center>
                </div>
                <div className="flex mt-8 justify-between text-justify ">
                  <div className="w-[50px] "></div>
                  <div className="w-[450px] text-sm">
                    <p className="leading-7">
                      Hello! I'm Imanuel, currently in my 7th semester at kalbis
                      Institute pursuing a major in Informatics with specialize
                      major in Soft Computing. Currently I'm busy with
                      internship, where I'm working on a real projects and
                      applying my academic knowledge from what I've learned in
                      my university. Additionaly, I'm working on my own personal
                      project where I can implement my understanding in computer
                      science with things that interest me.
                    </p>
                    <br />
                    <p>Programming lagguages:</p>
                    <ul className="list-disc">
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ul>
                  </div>

                  <div className="w-[500px]">
                    <center>
                      <img
                        className=" rounded-xl w-[300px]"
                        src={imanuel3}
                        alt=""
                      />
                    </center>
                  </div>
                  <div className="w-[50px] "></div>
                </div>
              </div>
            </div>

            <div id="Projects" className="flex justify-center">
              <div className=" my-[150px] w-[1220px] ">
                <div className="flex justify-start ">
                  <div className="flex flex-col items-center text-center justify-center w-[100px]">
                    <div
                      className="text-[100px] transform -rotate-90 leading-none"
                      style={outline}
                    >
                      Projects.
                    </div>
                  </div>

                  <div className="flex  overflow-x-scroll overflow-y-hidden  w-full ml-10">
                    {Object.keys(data).map((item) => (
                      <div className="group min-w-[700px] h-[300px] ml-20 mt-5 relative overflow-hidden items-center ">
                        <img
                          className="w-[700px] h-[300px] filter grayscale  object-cover p-3 group-hover:filter-none group-hover:border ease-in-out duration-500"
                          src={alik}
                          alt=""
                        />
                        <div className="absolute w-full h-full bottom-0 inset-x-0 text-[70px] leading-4 text-center 4 top-[40%] group-hover:opacity-10 ease-in-out duration-500">
                          {item}
                        </div>
                      </div>
                    ))}
                    <div
                      style={blur}
                      className="absolute min-w-[20px] h-[350px] "
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div id="Playground" className="flex justify-center">
              <div className=" my-[150px] w-[1000px]">
                <div>
                  <div className="text-[100px] overflow-hidden flex whitespace-nowrap">
                    Playground
                  </div>

                  <hr />
                  <m.div
                    drag
                    dragConstraints={{
                      left: 0,
                      right: 400,
                      top: 0,
                      bottom: 400,
                    }} // Set drag boundaries
                    style={{
                      width: 100,
                      height: 100,
                      background: 'blue',
                      borderRadius: '50%',
                    }}
                  >
                    Drag me!
                  </m.div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="  my-[300px] w-[1220px] ">
                <div
                  id="Contact"
                  className="text-[150px] leading-[150px] font-bold mb-[30px] border-b"
                >
                  Connect with me
                </div>
                <div className="text-[50px] leading-[50px] mb-[70px] underline">
                  <a href="">iim.imanuel@gmail.com</a>
                </div>
                <div className="text-[20px] font-bold mb-5">Social:</div>
                <div className="flex">
                  <div className="mr-20 underline underline-offset-4">
                    <a href="">Github</a>
                  </div>
                  <div className="mr-20 underline underline-offset-4">
                    <a href="">Linkedin</a>
                  </div>

                  <div className="mr-20 underline underline-offset-4">
                    <a href="">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ColorPaletteProvider>
  );
}

export default App;
