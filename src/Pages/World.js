import React, { useState, useEffect, useRef } from 'react';
import { motion as m } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';

import {
  PerspectiveCamera,
  GizmoHelper,
  GizmoViewport,
} from '@react-three/drei';
import { Stars, Sphere, OrbitControls, Environment } from '@react-three/drei';

function World() {
  let [ySphereValue, setYSphereValue] = useState(0);
  let [ySphereCloudValue, setYSphereCloudValue] = useState(0);
  let [lightDirection, setLightDirection] = useState([0, 0, 1000]);
  let [time, setTime] = useState(0);

  const shaderMaterialRef = useRef();

  const [colorMap, nightColorMap, normalMap, roughnessMap, earthCloud] =
    useLoader(TextureLoader, [
      process.env.PUBLIC_URL + '/textures/8k_earth_daymap.jpg',
      process.env.PUBLIC_URL + '/textures/8k_earth_nightmap.jpg',
      process.env.PUBLIC_URL + '/textures/2k_earth_normal_map.jpg',
      process.env.PUBLIC_URL + '/textures/8k_earth_specular_map.jpg',
      process.env.PUBLIC_URL + '/textures/8k_earth_clouds.jpg',
    ]);
  const vertexShader = `
    varying vec2 vertexUV;
    varying vec3 vertexNormal;
    void main() {
      vertexUV = uv;
      vertexNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
              `;
  const fragmentShader = `
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform vec3 lightDirection;
    varying vec2 vertexUV;
    varying vec3 vertexNormal;


    void main() {
        // Normalize light direction based on time
        vec3 normalizedLightDirection = normalize(lightDirection);

        vec3 dayColor = texture2D(dayTexture, vertexUV).xyz;
        vec3 nightColor = texture2D(nightTexture, vertexUV).xyz;

        // Calculate light intensity based on the dot product of normal and adjusted light direction
        float lightIntensity = max(dot(normalize(vertexNormal), normalizedLightDirection), 0.0);

      if (normalizedLightDirection.y > 1.0) {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);  // Red color
          return;
      }

        vec3 finalColor = mix(nightColor, dayColor, lightIntensity);

        gl_FragColor = vec4(finalColor, 1.0);
    }
`;
  useEffect(() => {
    const animate = () => {
      setYSphereValue((ySphereValue += 0.0007));
      setLightDirection([
        lightDirection[0],
        (lightDirection[1] += 0.007),
        lightDirection[2],
      ]);
      setYSphereCloudValue((ySphereCloudValue += 0.00072));

      // Access the material property from the Sphere object
      const sphereMaterial = shaderMaterialRef?.current?.material;

      // Update the lightDirection uniform
      if (sphereMaterial) {
        sphereMaterial.uniforms.lightDirection.value = lightDirection;
      }

      // Update time based on elapsed time
      setTime((time) => time + 0.01);

      console.log('Light Direction:', lightDirection);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [ySphereValue, lightDirection, ySphereCloudValue, time]);

  return (
    <div className="w-screen h-screen">
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 30]} />
        <ambientLight intensity={0.2} />
        <directionalLight
          color="rgba(0.0, 0.15, 0.0, 1.0)"
          position={lightDirection}
          intensity={1.2}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableDamping={true}
          dampingFactor={0.25}
          minPolarAngle={Math.PI / 8}
          maxPolarAngle={Math.PI}
        />
        {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor="white"
            labelBorderColor="black"
          />
        </GizmoHelper> */}
        <Sphere
          ref={shaderMaterialRef}
          args={[20, 32, 32]}
          position={[0, 0, 0]}
          rotation={[0, ySphereValue, 0]}
        >
          {/* <meshStandardMaterial
            map={colorMap}
            emissiveMap={nightColorMap}
            emissive={0xffa500}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
          /> */}
          <shaderMaterial
            needsUpdate={true}
            uniformsNeedUpdate={true}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              dayTexture: {
                value: colorMap,
              },
              nightTexture: {
                value: nightColorMap,
              },
              lightDirection: {
                value: lightDirection,
              },
            }}
          />
        </Sphere>
        {/* <Sphere
          args={[20.1, 32, 32]}
          position={[0, 0, 0]}
          rotation={[0, ySphereCloudValue, 0]}
        >
          <meshStandardMaterial alphaMap={earthCloud} transparent />
        </Sphere> */}
        {/* <Stars
          radius={500} // Radius of the sphere
          depth={30} // Depth of the stars
          count={7000} // Number of stars
          factor={2} // Size factor of the stars
          saturation={0} // Saturation of the stars (0 to 1)
        /> */}
        <Environment
          files={process.env.PUBLIC_URL + '/textures/2k_stars_milky_way.hdr'}
          background
        />
      </Canvas>
    </div>
  );
}

export default World;
