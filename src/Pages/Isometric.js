import React, { useEffect, useRef, useState } from 'react';
import {
  Stage,
  Layer,
  Rect,
  Text,
  Image,
  Circle,
  Line,
  Sprite,
  Shape
} from 'react-konva';
import EasyStar from 'easystarjs';

const CRTSimulation = () => {
  const viewportSize = {
    width: window.innerWidth / 1.5,
    height: window.innerHeight / 1.2,
  };
  const animationFrame = useRef(null);
  const cyanposition = useRef(null);
  const [charPosition, setCharPosition] = useState({ x: 10, y: 10 });
  const [image, setImage] = useState(null);
  const [characterImage, setCharacterImage] = useState(null);
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [paths, setPaths] = useState([position]);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);

  const numRows = 20;
  const numCols = 20;

  const cellSize = {
    width: 20,
    height: 20,
  };

  const gridSize = Math.min(numCols, numRows);

  const grids = Array.from({ length: gridSize }, (row, rowIndex) =>
    Array.from({ length: gridSize }, (col, colIndex) =>
      rowIndex === 0 ||
      rowIndex === numRows - 1 ||
      colIndex === 0 ||
      colIndex === numCols - 1
        ? 1
        : 0
    )
  );

  useEffect(() => {
    const img = new window.Image();
    img.src = process.env.PUBLIC_URL + '/images/crt.png';
    console.log(img.src);
    img.onload = () => {
      setImage(img);
    };
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = process.env.PUBLIC_URL + '/images/mainchar.png';
    img.onload = () => {
      setCharacterImage(img);
    };
  }, []);
  var easystar = new EasyStar.js();
  easystar.setGrid(grids);
  easystar.setAcceptableTiles([0]);
  const handleOnclick = (x, y) => {
    console.log(x, y);
    move(easystar, { x, y });
  };
  const move = (easystar, target) => {
    if (!easystar) return;

    easystar.findPath(
      position.x,
      position.y,
      target.x,
      target.y,
      function (paths) {
        if (paths === null) {
          console.log('Path was not found.');
        } else {
          setCurrentPathIndex(0);
          setPaths(paths);
        }
      }
    );

    easystar.calculate();
  };

  useEffect(() => {
    const animationLoop = () => {
      if (currentPathIndex === paths.length - 1) {
        cancelAnimationFrame(animationFrame.current);
        return;
      }

      setCurrentPathIndex((prevIndex) => {
        if (prevIndex === paths.length - 1) {
          cancelAnimationFrame(animationFrame.current);
          return;
        }
        const newIndex = prevIndex + 1;
        console.log('position', position);
        console.log('paths', paths);
        console.log('index', newIndex);
        console.log('x', paths[newIndex].x);
        console.log('y', paths[newIndex].y);

        setTimeout(() => {
          setPosition((prevPosition) => ({
            x: paths[newIndex].x,
            y: paths[newIndex].y,
          }));
          const absolutePosition = cyanposition.current.getAbsolutePosition();
          setCharPosition((prevPosition) => ({
            x: absolutePosition.x,
            y: absolutePosition.y,
          }));
        }, 20 * newIndex);

        return newIndex;
      });

      animationFrame.current = requestAnimationFrame(animationLoop);
    };

    animationLoop();
    return () => cancelAnimationFrame(animationFrame.current);
  }, [paths]);

  return (
    <center>
      <Stage
        width={viewportSize.width}
        height={viewportSize.height}
        className=" overflow-hidden overscroll-none"
      >
        <Layer>
          <Rect
            width={viewportSize.width - 8}
            height={viewportSize.height - 5}
            fill="white"
          />
          {grids.map((row, y) => (
            <React.Fragment key={y}>
              {row.map((grid, x) => (
                <React.Fragment key={x}>
                  <Rect
                    x={21 * cellSize.width}
                    y={8 * cellSize.height}
                    width={cellSize.width}
                    height={cellSize.height}
                    fill={grid ? 'red' : 'red'}
                    offsetX={-21 * x}
                    offsetY={-21 * y}
                    scaleX={1.5}
                    scaleY={1}
                    skewX={-1}
                    rotation={18}
                    onClick={(e) => {
                      handleOnclick(x, y, e);
                    }}
                  />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </Layer>
        <Layer>
          {/* <Circle x={200} y={100} radius={50} fill="green" /> */}
          <Rect
            x={21 * cellSize.width}
            y={8 * cellSize.height}
            width={cellSize.width}
            height={cellSize.height}
            offsetX={-21 * position.x}
            offsetY={-21 * position.y}
            scaleX={1.5}
            scaleY={1}
            skewX={-1}
            rotation={18}
            fill="cyan"
            ref={cyanposition}
          />
          <Shape
            sceneFunc={(context, shape) => {
              const size = 10; // Adjust the size of the hexagon
              const xOffset = 10; // Adjust the x offset
              const yOffset = 10; // Adjust the y offset

              context.beginPath();
              context.moveTo(
                xOffset + size * Math.cos(0),
                yOffset + size * Math.sin(0)
              ); // Vertex 1
              context.lineTo(
                xOffset + size * Math.cos(Math.PI / 3),
                yOffset + size * Math.sin(Math.PI / 3)
              ); // Vertex 2
              context.lineTo(
                xOffset + size * Math.cos((2 * Math.PI) / 3),
                yOffset + size * Math.sin((2 * Math.PI) / 3)
              ); // Vertex 3
              context.lineTo(
                xOffset + size * Math.cos(Math.PI),
                yOffset + size * Math.sin(Math.PI)
              ); // Vertex 4
              context.lineTo(
                xOffset + size * Math.cos((4 * Math.PI) / 3),
                yOffset + size * Math.sin((4 * Math.PI) / 3)
              ); // Vertex 5
              context.lineTo(
                xOffset + size * Math.cos((5 * Math.PI) / 3),
                yOffset + size * Math.sin((5 * Math.PI) / 3)
              ); // Vertex 6
              context.closePath();

              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={1}
            x={21 * cellSize.width}
            y={8 * cellSize.height}
            width={cellSize.width}
            height={cellSize.height}
            offsetX={-21 * position.x}
            offsetY={-21 * position.y}
            scaleX={1.5}
            scaleY={1}
            skewX={-1}
            rotation={18}
          />

          {/* <Image
            image={characterImage}
            x={21 * cellSize.width}
            y={8 * cellSize.height}
            width={cellSize.width}
            height={cellSize.height}
            offsetX={-21 * position.x}
            offsetY={-21 * position.y}
            scaleX={1.5}
            scaleY={1}
            skewX={-1}
            rotation={18}
            listening={false}
          /> */}
        </Layer>
        <Layer>
          <Image
            image={image}
            width={viewportSize.width}
            height={viewportSize.height}
            opacity={1} // Adjust the opacity as needed
            listening={false}
          />
          <Image
            image={image}
            width={viewportSize.width}
            height={viewportSize.height}
            opacity={1} // Adjust the opacity as needed
            offsetY={0}
            listening={false}
          />

          <Rect
            width={viewportSize.width + 1}
            height={viewportSize.height + 1}
            stroke={'black'}
            cornerRadius={20}
            strokeWidth={15}
            shadowColor="black"
            shadowBlur={40}
            shadowOpacity={1}
            listening={false}
          />
          <Rect
            width={viewportSize.width + 1}
            height={viewportSize.height + 1}
            stroke={'black'}
            cornerRadius={20}
            strokeWidth={15}
            shadowColor="black"
            shadowBlur={40}
            shadowOpacity={1}
            listening={false}
          />
          <Rect
            width={viewportSize.width}
            height={viewportSize.height}
            fill="black"
            opacity={0.3}
            listening={false}
          />
          {/* <Rect
            x={10 * cellSize.width}
            y={10 * cellSize.height}
            width={cellSize.width}
            height={cellSize.height}
            fill={1 ? 'white' : 'red'}
            scaleX={1.5}
            scaleY={1}
            skewX={-1} // Adjust skewX to create horizontal skew
            rotation={18}
          />
          <Rect
            x={10 * cellSize.width}
            y={10 * cellSize.height}
            width={cellSize.width}
            height={cellSize.height}
            fill={1 ? 'green' : 'red'}
            offsetY={-19.5 * 0}
            offsetX={-19.5 * 1}
            scaleX={1.5}
            scaleY={1}
            skewX={-1} // Adjust skewX to create horizontal skew
            rotation={18}
          />
          <Rect
            x={10 * cellSize.width}
            y={10 * cellSize.height}
            width={cellSize.width}
            height={cellSize.height}
            fill={1 ? 'cyan' : 'red'}
            offsetY={-19.5 * 1}
            offsetX={-19.5 * 0}
            scaleX={1.5}
            scaleY={1}
            skewX={-1} // Adjust skewX to create horizontal skew
            rotation={18}
          /> */}
        </Layer>
      </Stage>
    </center>
  );
};

export default CRTSimulation;
