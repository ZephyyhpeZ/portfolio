import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Circle, Text } from 'react-konva';

function Test() {
  const [planets, setPlanets] = useState([]);
  const [clicked, setClicked] = useState(false);
  const animationFrame = useRef(null);
  function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }
  const createPlanet = (e) => {
    const newPlanet = {
      x: e.evt.clientX,
      y: e.evt.clientY,
      vx: 1,
      vy: 1,
      fx: 0,
      fy: 0,
      a: 0,
      w: 5 * 2,
      h: 5 * 2,
      radius: 5,
    };

    return newPlanet;
  };

  const handleMouseDown = (e) => {
    console.log(clicked);
    setClicked(true);
    console.log(clicked);

    const isClickOnExistingPlanet = planets.some((planet) => {
      const distance = Math.sqrt(
        Math.pow(e.evt.clientX - planet.x, 2) +
          Math.pow(e.evt.clientY - planet.y, 2)
      );

      return distance <= planet.radius;
    });

    if (isClickOnExistingPlanet) {
      return 0;
    }
    const volume = (4 / 3) * Math.PI * Math.pow(5, 3);
    const mass = volume;
    const color = getRandomColor();
    const newPlanet = {
      x: e.evt.clientX,
      y: e.evt.clientY,
      vx: 0,
      vy: 0,
      fx: 0,
      fy: 0,
      a: 0,
      w: 5 * 2,
      h: 5 * 2,
      m: mass,
      radius: 5,
      fill: color,
      shadowColor: color,
    };

    setPlanets((prevPlanets) => [...prevPlanets, newPlanet]);
    startSizeIncrease();
  };

  const handleMouseUp = () => {
    cancelAnimationFrame(animationFrame.current);
  };

  const startSizeIncrease = () => {
    const updateSize = () => {
      setPlanets((prevPlanets) => {
        const updatedPlanets = [...prevPlanets];
        const lastPlanet = updatedPlanets[updatedPlanets.length - 1];
        lastPlanet.radius += 0.1;
        const volume = (4 / 3) * Math.PI * Math.pow(lastPlanet.radius, 3);
        const mass = volume;
        lastPlanet.m = mass;
        return updatedPlanets;
      });

      animationFrame.current = requestAnimationFrame(updateSize);
    };

    updateSize();
  };

  const calculate = (planetA, planetB) => {
    const G = 0.0004;
    const D = Math.sqrt(
      Math.pow(planetA.x - planetB.x, 2) + Math.pow(planetA.y - planetB.y, 2)
    );

    const forceMagnitude = (G * planetA.m * planetB.m) / Math.pow(D, 2);
    const forceX = forceMagnitude * ((planetB.x - planetA.x) / D);
    const forceY = forceMagnitude * ((planetB.y - planetA.y) / D);

    return { forceX, forceY };
  };

  const areColliding = (planetA, planetB) => {
    const distance = Math.sqrt(
      Math.pow(planetA.x - planetB.x, 2) + Math.pow(planetA.y - planetB.y, 2)
    );

    return distance < planetA.radius + planetB.radius;
  };

  let lastTime = performance.now();
  const updatePositions = () => {
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastTime;
    lastTime = currentTime;

    setPlanets((prevPlanets) => {
      if (prevPlanets.length < 2) {
        return prevPlanets;
      }

      const updatedPlanets = [...prevPlanets];

      for (let i = 0; i < updatedPlanets.length; i++) {
        const planetA = updatedPlanets[i];
        let totalForceX = 0;
        let totalForceY = 0;
        // if (
        //   planetA.x > window.innerWidth ||
        //   planetA.y > window.innerHeight ||
        //   planetA.x < 0 ||
        //   planetA.y < 0
        // ) {
        //   continue;
        // }
        for (let j = 0; j < updatedPlanets.length; j++) {
          if (i !== j) {
            const planetB = updatedPlanets[j];
            if (!areColliding(planetA, planetB)) {
              const { forceX, forceY } = calculate(planetA, planetB);
              totalForceX += forceX;
              totalForceY += forceY;
            }
          }
        }

        planetA.fx = totalForceX;
        planetA.fy = totalForceY;

        planetA.a = Math.sqrt(
          Math.pow(totalForceX, 2) + Math.pow(totalForceY, 2)
        );

        planetA.vx += planetA.fx / planetA.m;
        planetA.vy += planetA.fy / planetA.m;

        planetA.x += planetA.vx;
        planetA.y += planetA.vy;
      }

      return updatedPlanets;
    });

    animationFrame.current = requestAnimationFrame(updatePositions);
  };

  useEffect(() => {
    updatePositions();
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <div id="Playground" className="flex justify-center">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {planets.map((planet, index) => (
            <Circle
              key={index}
              x={planet.x}
              y={planet.y}
              radius={planet.radius}
              fill={planet.fill}
              shadowColor={planet.shadowColor}
              shadowBlur={30}
              // draggable
            />
          ))}
          {clicked ? null : (
            <Text
              fontSize={30}
              text="Click to spawn a planet"
              wrap="char"
              align="center"
              width={window.innerWidth}
              fill="white"
              fontVariant="light"
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
}

export default Test;
