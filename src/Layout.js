import Introduction from './Sections/Introduction';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Project from './Sections/Project';
import Experiment from './Sections/Experiment';
import { useInView, motion as m } from 'framer-motion';
import { useRef, useEffect } from 'react';
import StardLoad from './components/StardLoad';
import Navbar from './components/Navbar';
const ScrollToTopOnReload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This effect runs once after the component mounts

  return null; // This component doesn't render anything to the DOM
};
function Layout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
    const blur = {
      background: `radial-gradient(#00000000 1px, #0A0A0A 1px)`,
      backdropFilter: 'blur(10px)',
      backgroundSize: '4px 4px',
    };
  return (
    <div className="App text-[#7D49D9] overflow-hidden">
      <ScrollToTopOnReload />
      <StardLoad />
      <Navbar customDelay={4.5} />
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
      {/* <m.div
        className="Navbar"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{
          delay: 5.5,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <div className="w-screen flex justify-between lg:px-[110px] lg:pt-[20px] lg:text-[18px]">
          <div>
            <m.svg
              initial={{  opacity: 0 }}
              animate={{  opacity: 100 }}
              transition={{
                delay: 7,
                duration: 1,
                ease: 'easeInOut',
              }}
              width="26"
              height="26"
              viewBox="0 0 105 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="p-1 border-[2px] border-[#7D49D9]"
            >
              <path
                d="M25.78 101.557L43.371 57H53.865L59.5669 60.8029L40.8233 106H29.2375L25.78 101.557ZM21.1092 57L35.9706 101.894L32.1491 106H18.7435L0 57H21.1092ZM69.2117 101.658L83.9517 57H105L86.2568 106H72.9118L69.2117 101.658ZM61.4473 57L79.463 101.827L75.8234 106H64.2376L45.0695 60.7356L51.0141 57H61.4473Z"
                fill="#7D49D9"
              />
              <path d="M44.2887 48V0H23V48H44.2887Z" fill="#7D49D9" />
              <path d="M82 48V0H60.7113V48H82Z" fill="#7D49D9" />
            </m.svg>
          </div>
          <div>XL</div>
        </div>
      </m.div> */}
      <Introduction />
      <About />
      <Experience />
      <Project />
      <Experiment />
    </div>
  );
}

export default Layout;
