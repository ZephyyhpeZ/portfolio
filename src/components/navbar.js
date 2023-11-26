import TwoCircle from './circles';
import { motion as m } from 'framer-motion';
function Navbar() {
  return (
    <div className="Navbar">
      <m.div
        initial={{ top: '50%' }}
        animate={{ top: '' }}
        exit={{ bottom: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed w-screen border-r border-b border-[#222222] z-50 top-2 lg:top-5"
      />
      <m.div
        initial={{ bottom: '50%' }}
        animate={{ bottom: '0%' }}
        exit={{ bottom: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed w-screen border-r bottom-0 border-b border-[#222222] z-50 mb-2 lg:mb-5"
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
        className="fixed w-screen border-l border-b border-[#222222] z-50 mb-16 lg:mb-20"
      />
      <m.div
        initial={{ left: '50%' }}
        animate={{ left: '0%' }}
        exit={{ left: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed top-0 h-screen border-r border-b border-[#222222] z-50 ml-2 lg:ml-5"
      />
      <m.div
        initial={{ right: '50%' }}
        animate={{ right: '0%' }}
        exit={{ right: '50%', transition: { duration: 0.5 } }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="fixed top-0 right-0 h-screen border-l border-b border-[#222222] z-50 mr-2 lg:mr-5"
      />

      <div className="fixed z-50 left-0 top-4 w-screen lg:top-8 lg:w-screen">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            delay: 0.9,
            duration: 1,
            ease: 'easeInOut',
          }}
          className="flex justify-between mx-5 lg:mx-14 "
        >
          <h1 className="lg:text-xl text-3xl">
            <a href="#Home">IIW</a>
          </h1>

          <TwoCircle></TwoCircle>
        </m.div>
      </div>
      <m.div
        className="fixed z-50 left-0 bottom-7 w-screen lg:bottom-10 lg:w-screen"
      >
        <div className="flex justify-between lg:mx-14 mx-7 font-light text-sm">
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
            className=" font-light lg:text-[14px]"
          >
            v0.0.1
          </m.h2>
        </div>
      </m.div>
    </div>
  );
}

export default Navbar;
