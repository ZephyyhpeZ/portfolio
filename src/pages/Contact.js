import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import { AnimatedText } from '../components/animatedText';
function Contact() {
      const { colorPalettes, currentColorPaletteIndex, togglePalette } =
        useContext(ColorPaletteContext);
      const currentPalette = colorPalettes[currentColorPaletteIndex];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="Contact" className="flex justify-center">
      <div className="  mb-[250px] lg:w-[1220px] w-[300px] ">
        <m.div
          ref={ref}
          id="Contact"
          className="lg:text-[120px] lg:leading-[120px] text-[55px] leading-[60px] font-black mb-[20px]"
          style={{ color: currentPalette[0] }}
        >
          {isInView ? (
            <div>
              <AnimatedText
                className="absolute translate-y-[-10px] mix-blend-difference"
                text={'CONNECT WITH ME'}
              />
              <AnimatedText
                className=" text-slate-50"
                text={'CONNECT WITH ME'}
              />
            </div>
          ) : (
            <div>&nbsp;</div>
          )}
        </m.div>
        <m.div
          ref={ref}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,

                  transition: {
                    x: {
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                    delay: 0.5,
                  },
                }
              : {
                  opacity: 0,
                  x: 10,
                }
          }
          className=" lg:text-[50px] lg:leading-[50px] text-[20px] leading-[20px] mb-[70px] underline "
        >
          <a href="mailto:iim.imanuel@gmail.com?subject=Subject%20Here&body=Hello%20Iim,">
            iim.imanuel@gmail.com
          </a>
        </m.div>
        <m.div
          animate={
            isInView
              ? {
                  opacity: 1,

                  transition: {
                    delay: 0.9,
                  },
                }
              : {
                  opacity: 0,
                }
          }
          className="text-[20px] font-bold mb-5"
        >
          Social:
        </m.div>
        <div className="flex">
          <m.div
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      color: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                      delay: 1.3,
                    },
                  }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            className="lg:mr-20 mr-10 underline underline-offset-4"
          >
            <a href="https://github.com/ZephyyhpeZ">Github</a>
          </m.div>
          <m.div
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,

                    transition: {
                      delay: 1.4,
                    },
                  }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            className="lg:mr-20 mr-10 underline underline-offset-4"
          >
            <a href="https://www.linkedin.com/in/imanuel-iim">Linkedin</a>
          </m.div>

          <m.div
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,

                    transition: {
                      delay: 1.5,
                    },
                  }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            className="lg:mr-20 mr-10 underline underline-offset-4"
          >
            <a href="https://www.instagram.com/iimimanuel/">Instagram</a>
          </m.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
