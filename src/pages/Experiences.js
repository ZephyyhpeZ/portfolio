import { useScroll, useTransform, useInView, motion as m } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';
import data from '../internshipsData.json';
import dataAchivements from '../achivementsData.json';

const Experiences = () => {
  const { colorPalettes, currentColorPaletteIndex, togglePalette } =
    useContext(ColorPaletteContext);
  const currentPalette = colorPalettes[currentColorPaletteIndex];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="Experiences" className=" flex justify-center ">
      <div className=" lg:mt-[80px] lg:mb-[200px] lg:w-[1350px] w-[300px] mb-[150px]">
        <div className="relative">
          <m.div
            className="lg:text-[20px]"
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      opacity: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                    },
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
          >
            EXPERIENCES
          </m.div>
          <m.div
            className=" lg:text-[20px] mix-blend-difference absolute top-[-10px] text-center"
            style={{ color: currentPalette[0] }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,

                    transition: {
                      opacity: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                    },
                  }
                : {
                    opacity: 0,
                    y: 40,
                  }
            }
          >
            EXPERIENCES
          </m.div>
        </div>
        <div>
          <m.div
            className=" lg:ml-[60px] lg:mt-[30px] font-light text-[18px]"
            animate={
              isInView
                ? {
                    opacity: 1,

                    transition: {
                      opacity: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                      delay: 0.4,
                    },
                  }
                : {
                    opacity: 0,
                  }
            }
          >
            <ul ref={ref} className="list-disc ">
              <li> INTERNSHIP</li>
            </ul>
          </m.div>
          <div className="lg:ml-[120px] lg:mt-[30px]">
            {Object.keys(data).map((item, index) => (
              <m.div
                className="border-l-2 lg:pl-4 lg:py-6 lg:text-[16px]
                pl-4 py-3 text-[12px]
                lg:flex justify-between font-light tracking-wider  cursor-pointer transition ease-in-out delay-75 group hover:bg-opacity-5 hover:bg-white"
                key={item}
                animate={
                  isInView
                    ? {
                        opacity: 1,

                        transition: {
                          opacity: {
                            duration: 1,
                            ease: 'easeInOut',
                          },
                          delay: 0.9 + (index + 1) / 10,
                        },
                      }
                    : {
                        opacity: 0,
                      }
                }
              >
                <div>{data[item].company}</div>
                <div
                  className=" absolute hidden  delay-75 transition duration-1000 ease-in-out mix-blend-difference lg:group-hover:-translate-y-[7px] group-hover:-translate-y-[24px] group-hover:block group-hover:opacity-100 opacity-0"
                  style={{ color: currentPalette[0] }}
                >
                  {data[item].company}
                </div>
                <div className="lg:pr-[10px]">
                  <div className=" block transition ease-in-out  group-hover:hidden">
                    {data[item].duration}
                  </div>
                  <div className="hidden transition ease-in-out group-hover:block">
                    {(() => {
                      const fromDate = new Date(data[item].from);
                      const toDate = new Date(data[item].to);
                      const months =
                        toDate.getMonth() -
                        fromDate.getMonth() +
                        12 * (toDate.getFullYear() - fromDate.getFullYear());
                      const days = toDate.getDate() - fromDate.getDate();

                      return `${months} Months and ${days} Days`;
                    })()}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
        <div>
          <m.div
            className=" lg:ml-[60px] lg:mt-[30px] font-light text-[18px]"
            animate={
              isInView
                ? {
                    opacity: 1,

                    transition: {
                      opacity: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                      delay: 0.4,
                    },
                  }
                : {
                    opacity: 0,
                  }
            }
          >
            <ul className="list-disc ">
              <li> ACHIEVEMENT</li>
            </ul>
          </m.div>
          <div className="lg:ml-[120px] lg:mt-[30px]">
            {Object.keys(dataAchivements).map((item, index) => (
              <m.div
                className="border-l-2  lg:pl-4 lg:py-6 pl-4 py-3 lg:pr-[10px] lg:flex justify-between font-light tracking-wider lg:text-[16px] text-[12px] cursor-pointer transition ease-in-out delay-75 group hover:bg-opacity-5 hover:bg-white"
                key={item}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        transition: {
                          opacity: {
                            duration: 1,
                            ease: 'easeInOut',
                          },
                          delay: 0.9 + (index + 1) / 10,
                        },
                      }
                    : {
                        opacity: 0,
                      }
                }
              >
                <div>{dataAchivements[item].name}</div>
                <div className=" block transition ease-in-out">
                  {dataAchivements[item].date}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
