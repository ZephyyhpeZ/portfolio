import { motion as m } from 'framer-motion';

const Home = () => {
  return (
    <div id="Home" className="flex justify-center items-center h-[100vh]">
      <div className=" mt-[80px] w-[1000px] my-[250px] ">
        <div className="leading-[50px]">
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 1.1,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className=" text-[40px]"
          >
            Hello,
          </m.div>
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 1.4,
              duration: 0.5,

              ease: 'easeInOut',
            }}
            className=" text-[60px] font-bold"
          >
            my name is Imanuel
          </m.div>
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 1.6,
              duration: 0.5,

              ease: 'easeInOut',
            }}
            className=" w-[540px] leading-[26px] pt-8 text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab,
            ipsum iusto amet alias placeat excepturi perspiciatis distinctio
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
