import React from "react";
import { Decal, Text, useTexture } from "@react-three/drei";
import fontStyle from '../Me/textures/font.ttf';
import java from './Textures/java.png';
import js from './Textures/js.png';
import ps from './Textures/ps.png';
import ml from './Textures/ml.png';
import python from './Textures/python.png';

const Certification = () => {

  const [javaTexture]=useTexture([java]);
  const [jsTexture] = useTexture([js]);
  const [psTexture] = useTexture([ps]);
  const [pythonTexture] = useTexture([python]);
  const [mlTexture] = useTexture([ml]);


  return (
    <>
      <group position={[0,0.4,0]}>

        <group position={[-9, 16.4, 0.4]} scale={0.4}>
          <Text font={fontStyle}>CERTIFICATIONS</Text>
        </group>

        <group position={[-11, 15, 0.4]}>
          <mesh visible={true}>
            <boxGeometry args={[1.5, 1.5, 0.001]} />
            <meshBasicMaterial color="red" />
            <Decal map={javaTexture} scale={1.5} />
          </mesh>
        </group>

        <group position={[-9, 15, 0.4]}>
          <mesh visible={true}>
            <boxGeometry args={[1.5, 1.5, 0.001]} />
            <meshBasicMaterial color="red" />
            <Decal map={jsTexture}   scale={1.5} />
          </mesh>
        </group>

        <group position={[-7, 15, 0.4]}>
          <mesh visible={true}>
            <boxGeometry args={[1.5, 1.5, 0.001]} />
            <meshBasicMaterial color="red" />
            <Decal map={psTexture}  scale={1.5} />
          </mesh>
        </group>

        <group position={[-11, 13.5, 0.4]}>
          <mesh visible={true}>
            <boxGeometry args={[1.5, 1, 0.001]} />
            <meshBasicMaterial color="red" />
            <Decal map={pythonTexture} scale={1.5} />
          </mesh>
        </group>

        <group position={[-9, 13.5, 0.4]}>
          <mesh visible={true}>
            <boxGeometry args={[1.5, 1, 0.001]} />
            <meshBasicMaterial color="red" />
            <Decal map={mlTexture}  scale={1.5} />
          </mesh>
        </group>

      </group>
    </>
  );
};

export default Certification;
