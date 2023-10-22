import TwoCircle from './circles';
import { motion as m } from 'framer-motion';
function Navbar() {
  return (
    <div className="Navbar">
      <m.div
        initial={{ top: '50%' }}
        animate={{ top: 20 }}
        exit={{ bottom: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed top-5 w-screen border-r border-b border-[#222222] z-50"
      />
      <m.div
        initial={{ bottom: '50%' }}
        animate={{ bottom: 0 }}
        exit={{ bottom: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed w-screen mb-5 border-r border-b border-[#222222] z-50"
      />
      <m.div
        initial={{ bottom: '-5%', opacity: 0 }}
        animate={{ bottom: 0, opacity: 100 }}
        exit={{ bottom: '-5%', opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          duration: 0.5,
          delay: 0.7,
          ease: 'easeInOut',
        }}
        className="fixed mb-20 w-screen border-l border-b border-[#222222] z-50"
      />
      <m.div
        initial={{ left: '50%' }}
        animate={{ left: 20 }}
        exit={{ left: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed top-0 left-5 h-screen border-r border-b border-[#222222] z-50"
      />
      <m.div
        initial={{ right: '50%' }}
        animate={{ right: 0 }}
        exit={{ right: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed top-0 right-0 mr-5 h-screen border-l border-b border-[#222222] z-50"
      />
      {/* <div className="fixed top-0  mt-7">
        <div className="flex justify-between mx-14"></div>
      </div> */}
      <div className="fixed top-8 left-0 w-screen z-50">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            delay: 0.9,
            duration: 1,
            ease: 'easeInOut',
          }}
          className="flex justify-between mx-14"
        >
          <h1 className="text-xl">
            <a href="#Home">IIW</a>
          </h1>

          <TwoCircle></TwoCircle>
        </m.div>
      </div>
      <m.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 100 }}
        // exit={{ opacity: 0, transition: { duration: 0.5 } }}
        // transition={{
        //   delay: 0.9,
        //   duration: 1,
        //   ease: 'easeInOut',
        // }}
        className="fixed bottom-10 left-0 w-screen z-50"
      >
        <div className="flex justify-between mx-14 font-light text-sm">
          <div className="flex">
            <m.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
              transition={{
                delay: 0.9,
                ease: 'easeInOut',
              }}
              className=" pr-10"
            >
              <a href="#About"> About me </a>
            </m.h1>
            <m.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
              transition={{
                delay: 1,
                ease: 'easeInOut',
              }}
              className=" pr-10"
            >
              <a href="#Projects"> Projects</a>
            </m.h1>
            {/* <h1 className=" pr-10">
              <a href="#Playground"> Playground </a>
            </h1> */}
            <m.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
              transition={{
                delay: 1.1,
                ease: 'easeInOut',
              }}
              className=" pr-10"
            >
              <a href="#Contact"> Contact </a>
            </m.h1>
          </div>

          <m.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 0.9,
              ease: 'easeInOut',
            }}
            className=" font-light"
          >
            v0.0.1
          </m.h2>
        </div>
      </m.div>
    </div>
  );
}

export default Navbar;
