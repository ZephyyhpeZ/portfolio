import React, { useState, useEffect, useRef } from 'react';
import { motion as m } from 'framer-motion';
import { breathFirstSearch, ASTAR } from '../functions/searchFunctions';

const Pathfinding = () => {
  //GRIDS COORDINATES STUFF
  const numOfBlockY = Math.floor(window.innerHeight / 30);
  const numOfBlockX = Math.floor((window.innerWidth - 150) / 30);
  const blocksY = Array.from({ length: numOfBlockY }, (_, index) => `${index}`);
  const blocksX = Array.from({ length: numOfBlockX }, (_, index) => `${index}`);
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

  //COLORs
  const GREEN = '#228B22';
  const RED = '#8B0000';
  const BACKGROUND = '#141414';
  const WALL = '#222222';
  const ref = useRef(null);
  const seachRef = useRef(null);

  const resetGrids = () => {
    const rows = document.querySelector('#grid').children;
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const columns = rows[rowIndex].children;
      for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        const state = columns[columnIndex].getAttribute('data-state');
        if (state == 'wall') {
          columns[columnIndex].style.backgroundColor = WALL;
        } else {
          columns[columnIndex].style.backgroundColor = BACKGROUND;
        }
      }
    }
    const currentStart = document.querySelector(
      `[data-coordinates="${currentStartPos[0]},${currentStartPos[1]}"]`
    );
    const currentEnd = document.querySelector(
      `[data-coordinates="${currentEndPos[0]},${currentEndPos[1]}"]`
    );

    currentStart.setAttribute('data-state', 'start');
    currentStart.style.backgroundColor = GREEN;

    currentEnd.setAttribute('data-state', 'end');
    currentEnd.style.backgroundColor = RED;
  };

  const selectFunction = (event) => {
    const ul = ref.current;
    const cT = event.target;

    const liElements = ul.querySelectorAll('li');
    liElements.forEach((li) => {
      li.setAttribute('data-selected', 'false');
      li.style.borderLeft = '0px solid purple';
    });
    cT.setAttribute('data-selected', 'true');
    cT.style.borderLeft = '2px solid purple';
  };

  const searchFunction = (event) => {
    const cT = event.target;
    if (cT.getAttribute('data-function') == 'BFS') {
      resetGrids();
      breathFirstSearch(currentStartPos, currentEndPos, edgeX, edgeY);
    } else if (cT.getAttribute('data-function') == 'ASTAR') {
      resetGrids();
      ASTAR(currentStartPos, currentEndPos, edgeX, edgeY);
    } else if (cT.getAttribute('data-function') == 'reset') {
      const rows = document.querySelector('#grid').children;

      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const columns = rows[rowIndex].children;
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
          console.log();
          columns[columnIndex].setAttribute('data-state', 'none');
          columns[columnIndex].style.backgroundColor = BACKGROUND;
        }
      }
      currentStartPos[0] = parseInt(Math.round(numOfBlockX / 3));
      currentStartPos[1] = parseInt(Math.round(numOfBlockY / 2));
      currentEndPos[0] = parseInt(Math.round(numOfBlockX / 1.5));
      currentEndPos[1] = parseInt(Math.round(numOfBlockY / 2));

      const currentStart = document.querySelector(
        `[data-coordinates="${currentStartPos[0]},${currentStartPos[1]}"]`
      );
      const currentEnd = document.querySelector(
        `[data-coordinates="${currentEndPos[0]},${currentEndPos[1]}"]`
      );
      currentStart.setAttribute('data-state', 'start');
      currentStart.style.backgroundColor = GREEN;

      currentEnd.setAttribute('data-state', 'end');
      currentEnd.style.backgroundColor = RED;
    }
  };

  const setState = (event) => {
    event.preventDefault();
    const cT = event.target;
    const ul = ref.current;
    const liElements = ul.querySelectorAll('li');
    let selected;
    liElements.forEach((li) => {
      selected = li.getAttribute('data-selected') === 'true' ? li : selected;
    });
    const selectedFunction = selected.getAttribute('data-function');
    switch (selectedFunction) {
      case 'start':
        if (cT.getAttribute('data-state') == 'none') {
          const currentStart = document.querySelector(
            `[data-coordinates="${currentStartPos[0]},${currentStartPos[1]}"]`
          );
          currentStart.setAttribute('data-state', 'none');
          currentStart.style.backgroundColor = BACKGROUND;

          const pos = cT.getAttribute('data-coordinates').split(',');
          cT.setAttribute('data-state', 'start');
          cT.style.backgroundColor = GREEN;

          currentStartPos[0] = parseInt(pos[0]);
          currentStartPos[1] = parseInt(pos[1]);
        }
        break;
      case 'end':
        if (cT.getAttribute('data-state') == 'none') {
          const currentEnd = document.querySelector(
            `[data-coordinates="${currentEndPos[0]},${currentEndPos[1]}"]`
          );
          currentEnd.setAttribute('data-state', 'none');
          currentEnd.style.backgroundColor = BACKGROUND;
          const pos = cT.getAttribute('data-coordinates').split(',');

          cT.setAttribute('data-state', 'end');
          cT.style.backgroundColor = RED;
          currentEndPos[0] = parseInt(pos[0]);
          currentEndPos[1] = parseInt(pos[1]);
        }
        break;
      case 'wall':
        if (cT.getAttribute('data-state') == 'none') {
          cT.setAttribute('data-state', 'wall');
          cT.style.backgroundColor = WALL;
        }
        break;
      case 'none':
        if (cT.getAttribute('data-state') == 'wall') {
          cT.setAttribute('data-state', 'none');
          cT.style.backgroundColor = BACKGROUND;
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className=" flex">
      <div>
        <aside className="w-[140px] px-4 py-8 h-[96.7vh] mr-[10px] border-r border-r-[#222222]">
          <center>
            <div className="text-white text-2xl font-semibold mb-4">IIW</div>
          </center>
          <nav className="mt-8">
            <ul ref={ref} className=" text-slate-950 ">
              <li
                className="block py-2 px-4 border-l-2 border-l-purple-700 text-gray-300 hover:text-white"
                data-selected="true"
                data-function="start"
                onClick={selectFunction}
              >
                Start Point
              </li>

              <li
                className="block py-2 px-4 text-gray-300 hover:text-white"
                data-selected="false"
                data-function="end"
                onClick={selectFunction}
              >
                End Point
              </li>

              <li
                className="block py-2 px-4 text-gray-300 hover:text-white"
                data-selected="false"
                data-function="wall"
                onClick={selectFunction}
              >
                Wall
              </li>

              <li
                className="block py-2 px-4 text-gray-300 hover:text-white"
                data-selected="false"
                data-function="none"
                onClick={selectFunction}
              >
                Clear
              </li>
            </ul>
            <ul>
              <li className='border-b my-[20px] font-bold'><center>SEARCH</center></li>
            </ul>
            <ul ref={seachRef} className=" text-slate-950">
              <li
                className="block py-2 px-4 text-gray-300 hover:text-white"
                data-selected="false"
                data-function="BFS"
                onClick={searchFunction}
              >
                BFS
              </li>
              <li
                className="block py-2 px-4 text-gray-300 hover:text-white"
                data-selected="false"
                data-function="ASTAR"
                onClick={searchFunction}
              >
                Astar
              </li>
              <li
                className="block py-2 px-4 text-gray-300  hover:text-white"
                data-selected="false"
                data-function="reset"
                onClick={searchFunction}
              >
                Reset
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <div>
        <table>
          <tbody id="grid">
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
                  <m.td
                  
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
                        ? { backgroundColor: GREEN }
                        : indexX + indexY * numOfBlockX === endPos
                        ? { backgroundColor: RED }
                        : {}
                    }
                    className="grid-cell w-[30px] h-[30px] bg-[#141414] border border-[#222222] text-black cursor-pointer text-[7px]"
                  >
                    {/* {blockX + ' , ' + blockY} */}
                  </m.td>
                ))}
              </m.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pathfinding;

// import { Canvas } from "react-three-fiber";
// import Scene from "../threeComponents/Scene"
// import { Physics } from "@react-three/cannon";

// const Testing = ()=>{
//     return (
//       <Canvas style={{ height: '100vh', width: '100vw' }}>
//         <Physics>
//         <Scene />

//         </Physics>
//       </Canvas>
//     );
// }

// export default Testing;
