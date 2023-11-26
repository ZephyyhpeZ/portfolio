import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from 'react';
import {  usePlane } from '@react-three/cannon';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';


import { useBox, useRaycastVehicle } from '@react-three/cannon';
import { Quaternion, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from './useControls';
import { useWheels } from './useWheels';
import { WheelDebug } from './WheelDebug';

function Car({ thirdPerson }) {
  let result = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + '/models/car.glb'
  ).scene;

  const position = [-1.5, 0.5, 3];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      allowSleep: false,
      args: chassisBodyArgs,
      mass: 150,
      position,
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null)
  );

  useControls(vehicleApi, chassisApi);

  useFrame((state) => {
    if (!thirdPerson) return;

    let position = new Vector3(0, 0, 0);
    position.setFromMatrixPosition(chassisBody.current.matrixWorld);

    let quaternion = new Quaternion(0, 0, 0, 0);
    quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

    let wDir = new Vector3(0, 0, 1);
    wDir.applyQuaternion(quaternion);
    wDir.normalize();

    let cameraPosition = position.clone().add(
      wDir
        .clone()
        .multiplyScalar(1)
        .add(new Vector3(0, 0.3, 0))
    );

    wDir.add(new Vector3(0, 0.2, 0));
    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(position);
  });

  useEffect(() => {
    if (!result) return;

    let mesh = result;
    mesh.scale.set(0.0012, 0.0012, 0.0012);

    mesh.children[0].position.set(-365, -18, -67);
  }, [result]);

  return (
    <group ref={vehicle} name="vehicle">
      <group ref={chassisBody} name="chassisBody">
        <primitive
          object={result}
          rotation-y={Math.PI}
          position={[0, -0.09, 0]}
        />
      </group>

      {/* <mesh ref={chassisBody}>
        <meshBasicMaterial transparent={true} opacity={0.3} />
        <boxGeometry args={chassisBodyArgs} />
      </mesh> */}

      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  );
};


function Planes() {
  const [ref] = usePlane(
    () => ({
      type: 'Static',
      rotation: [-Math.PI / 2, 0, 0],
    }),
    useRef(null)
  );

  useFrame(() => {
    // Rotate the plane in the animation loop
    ref.current.rotation.x = -Math.PI / 2; // Rotate 90 degrees around the x-axis
  });

  return (
    <mesh
      ref={ref}
      position={[-2.285, -0.01, -1.325]}
      rotation-x={-Math.PI * 0.5}
    >
      <planeGeometry args={[12, 12]} />
      <meshBasicMaterial
        opacity={0.325}
        transparent={false}
        color={'brown'}
      />
    </mesh>
  );
};



const Scene = () =>{
     const [thirdPerson, setThirdPerson] = useState(false);
     const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

     useEffect(() => {
       function keydownHandler(e) {
         if (e.key == 'k') {
           // random is necessary to trigger a state change
           if (thirdPerson)
             setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
           setThirdPerson(!thirdPerson);
         }
       }

       window.addEventListener('keydown', keydownHandler);
       return () => window.removeEventListener('keydown', keydownHandler);
     }, [thirdPerson]);
    return (
      <Suspense fallback={null}>
        <Environment
          files={process.env.PUBLIC_URL + '/textures/envmap.hdr'}
          background={'both'}
        />
        <Planes></Planes>
        <Car thirdPerson={thirdPerson}></Car>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={70} />
        {!thirdPerson && <OrbitControls target={[-2.64, -0.71, 0.03]} />}
      </Suspense>
    );
}

export default Scene;