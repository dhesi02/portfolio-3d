import React from "react";
import { Decal,useTexture,Text } from "@react-three/drei";
import fontStyle from '../Me/textures/font.ttf';
import java from './Textures/java.png';
import html from './Textures/html.png';
import css from './Textures/css.png';
import js from './Textures/js.png';
import react from './Textures/react.png';
import node from './Textures/node.png';
import mongodb from './Textures/mongodb.png';
const Skills = () => {
    const [javaTexture] = useTexture([java]);
    const [htmlTexture] = useTexture([html]);
    const [jsTexture] = useTexture([js]);
    const [cssTexture] = useTexture([css]);
    const [reactTexture] = useTexture([react]);
    const [nodeTexture] = useTexture([node]);
    const [mongodbTexture] = useTexture([mongodb]);
  return (
    <>
    <group position={[-9, 3.3, 0]} scale={0.7}>
        <Text font={fontStyle}>SKILLS</Text>
    </group>
      <group position={[-12, 2.4, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.7, 0.7, 0.01]} />
          <meshBasicMaterial color="white" />
          <Decal map={javaTexture} scale={0.7} />
        </mesh>
      </group>
      <group position={[-11, 2.4, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.7, 0.7, 0.001]} />
          <meshBasicMaterial color="black" />
          <Decal map={htmlTexture} scale={1.1} />
        </mesh>
      </group>
      <group position={[-10, 2.4, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.7, 0.7, 0.001]} />
          <meshBasicMaterial color="black" />
          <Decal map={cssTexture} scale={1.1} />
        </mesh>
      </group>
      <group position={[-9, 2.4, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.7, 0.7, 0.001]} />
          <meshBasicMaterial color="black" />
          <Decal map={jsTexture} scale={0.8} />
        </mesh>
      </group>
      <group position={[-8, 2.4, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.7, 0.7, 0.001]} />
          <meshBasicMaterial color="black" />
          <Decal map={reactTexture} scale={0.7} />
        </mesh>
      </group>
      <group position={[-7, 2.4, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.7, 0.7, 0.001]} />
          <meshBasicMaterial color="black" />
          <Decal map={nodeTexture} scale={0.7} />
        </mesh>
      </group>
      <group position={[-6, 2.4, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.7, 0.7, 0.001]} />
          <meshBasicMaterial color="white" />
          <Decal map={mongodbTexture} scale={0.7} />
        </mesh>
      </group>
    </>
  );
};

export default Skills;
