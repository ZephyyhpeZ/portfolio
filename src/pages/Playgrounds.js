
import { motion as m } from 'framer-motion';

function Playground(){
    return (
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
    );

}

export default Playground;
