import React, { useState, useEffect, useRef } from 'react';
import { motion as m } from 'framer-motion';
import {breathFirstSearch} from "../functions/searchFunctions"

const Testing = () => {
  //   const [viewportSize, setViewportSize] = useState(0);
  //   useEffect(() => {
  //     const updateViewportSize = () => {
  //       setViewportSize(window.innerWidth);
  //     };

  //     // Initial size
  //     updateViewportSize();

  //     // Listen for window resize events
  //     window.addEventListener('resize', updateViewportSize);

  //     // Clean up the event listener on component unmount
  //     return () => {
  //       window.removeEventListener('resize', updateViewportSize);
  //     };
  //   }, []);
  const numOfBlockY = Math.floor(window.innerHeight / 30);
  const numOfBlockX = Math.floor(window.innerWidth / 30);
  const blocksY = Array.from({ length: numOfBlockY }, (_, index) => `${index}`);
  const blocksX = Array.from({ length: numOfBlockX }, (_, index) => `${index}`);
  // console.log((numOfBlockY * numOfBlockX + numOfBlockX) / 2);
  const startPos = Math.round(
    (numOfBlockY * numOfBlockX) / 2 + numOfBlockX / 3
  );
  const endPos = Math.round(
    (numOfBlockY * numOfBlockX) / 2 + numOfBlockX / 1.5
  );

  const edgeX = numOfBlockX;
  const edgeY = numOfBlockY;

  let currentStartPos = [
    Math.round(numOfBlockX / 3),
    Math.round(numOfBlockY / 2),
  ];
  let currentEndPos = [
    Math.round(numOfBlockX / 1.5),
    Math.round(numOfBlockY / 2),
  ];

  const ref = useRef(null);
  const seachRef = useRef(null);

  const selectFunction = (event) => {
    const ul = ref.current;
    const cT = event.target;

    const liElements = ul.querySelectorAll('li');
    liElements.forEach((li) => {
      li.setAttribute('data-selected', 'false');
      li.style.backgroundColor = 'yellow';
    });
    cT.setAttribute('data-selected', 'true');
    cT.style.backgroundColor = 'blue';
  };



 const searchFunction = (event) => {
   const cT = event.target;


   if(cT.getAttribute("data-function") == "BFS"){
    console.log(currentEndPos);
    console.log(currentStartPos);
      breathFirstSearch(currentStartPos, currentEndPos, edgeX, edgeY);
   }
  
 };




  const setState = (event) => {
    const cT = event.target;
    const ul = ref.current;

    const liElements = ul.querySelectorAll('li');
    let selected;
    liElements.forEach((li) => {
      const isSelected = li.getAttribute('data-selected') === 'true';
      if (isSelected) {
        selected = li.getAttribute('data-function');
        if (selected == 'start') {
          if (cT.getAttribute('data-state') == 'none') {
            const currentStart = document.querySelector(
              `[data-coordinates="${currentStartPos[0]},${currentStartPos[1]}"]`
            );
            currentStart.setAttribute('data-state', 'none');
            currentStart.style.backgroundColor = 'white';
            const pos = cT.getAttribute('data-coordinates').split(',');
            cT.setAttribute('data-state', 'start');
            cT.style.backgroundColor = 'green';

            currentStartPos[0] = pos[0];
            currentStartPos[1] = pos[1];
          }
        } else if (selected == 'end') {
          if (cT.getAttribute('data-state') == 'none') {
            const currentEnd = document.querySelector(
              `[data-coordinates="${currentEndPos[0]},${currentEndPos[1]}"]`
            );
            currentEnd.setAttribute('data-state', 'none');
            currentEnd.style.backgroundColor = 'white';
            const pos = cT.getAttribute('data-coordinates').split(',');

            cT.setAttribute('data-state', 'end');
            cT.style.backgroundColor = 'red';
            currentEndPos[0] = pos[0];
            currentEndPos[1] = pos[1];
          }
        } else if (selected == 'wall') {
          if (cT.getAttribute('data-state') == 'none') {
            cT.setAttribute('data-state', 'wall');
            cT.style.backgroundColor = 'grey';
          }
        } else if (selected == 'none') {
          if (cT.getAttribute('data-state') == 'wall') {
            cT.setAttribute('data-state', 'none');
            cT.style.backgroundColor = 'white';
          }
        }
      }
    });
  };

  return (
    <div>
      <m.div
        drag
        dragConstraints={{
          left: 0,
          right: 1000,
          top: 0,
          bottom: 300,
        }}
        className="absolute h-[375px] bg-yellow-400 w-[150px] py-4 px-3 rounded-2xl"
      >
        <ul ref={ref} className=" text-slate-950 font-bold">
          <li
            className="pick"
            data-selected="false"
            data-function="start"
            onClick={selectFunction}
          >
            start
          </li>

          <li
            className="pick"
            data-selected="false"
            data-function="end"
            onClick={selectFunction}
          >
            end
          </li>

          <li
            className="pick"
            data-selected="true"
            data-function="wall"
            onClick={selectFunction}
          >
            wall
          </li>

          <li
            className="true"
            data-selected="false"
            data-function="none"
            onClick={selectFunction}
          >
            delete
          </li>
        </ul>
      </m.div>
      <m.div
        drag
        dragConstraints={{
          left: 1000,
          right: 1500,
          top: 0,
          bottom: 300,
        }}
        className="absolute h-[375px] bg-yellow-400 w-[150px] py-4 px-3 rounded-2xl"
      >
        <ul ref={seachRef} className=" text-slate-950 font-bold">
          <li
            className="pick"
            data-selected="true"
            data-function="BFS"
            onClick={searchFunction}
          >
            BFS
          </li>

          <li
            className="pick"
            data-selected="false"
            data-function="end"
            onClick={searchFunction}
          >
            end
          </li>

          <li
            className="pick"
            data-selected="false"
            data-function="wall"
            onClick={searchFunction}
          >
            wall
          </li>

          <li
            className="true"
            data-selected="false"
            data-function="none"
            onClick={searchFunction}
          >
            delete
          </li>
        </ul>
      </m.div>
      <table>
        {blocksY.map((blockY, indexY) => (
          <m.tr
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: -50, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              delay: 0.03 * (indexY + 1),
              duration: 0.3,
              ease: 'easeInOut',
            }}
            key={blockY}
          >
            {blocksX.map((blockX, indexX) => (
              <td
                key={blockX}
                data-coordinates={`${[blockX, blockY]}`}
                onClick={setState}
                data-state={
                  indexX + indexY * numOfBlockX === startPos
                    ? 'start'
                    : indexX + indexY * numOfBlockX === endPos
                    ? 'end'
                    : 'none'
                }
                style={
                  indexX + indexY * numOfBlockX === startPos
                    ? { backgroundColor: 'green' }
                    : indexX + indexY * numOfBlockX === endPos
                    ? { backgroundColor: 'red' }
                    : {}
                }
                className="w-[30px] h-[30px] bg-white border text-black"
              >
                {/* {blockX + " , " +  blockY} */}
              </td>
            ))}
          </m.tr>
        ))}
      </table>
    </div>
  );
};

export default Testing;
