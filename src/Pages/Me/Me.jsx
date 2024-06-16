import { Decal, useTexture } from "@react-three/drei";
import { Text } from "@react-three/drei";
import React from "react";
import myImage from "./textures/me.jpg";
import email from "./textures/mail.png";
import insta from "./textures/insta.png";
import linkedin from "./textures/in.png";
import git from "./textures/git.png";
import fontStyle from "./textures/font.ttf";
const Me = () => {
  const [myTexture] = useTexture([myImage]);
  const [InstaTexture] = useTexture([insta]);
  const [linkedInTexture] = useTexture([linkedin]);
  const [gitTexture] = useTexture([git]);
  const [mailTexture] = useTexture([email]);

  const reDirect = (e) =>{
    if(e==="instagram") {
      window.location.replace('https://www.instagram.com/wtf_dhesi');
    }
    if(e==="github") {
      window.location.replace('https://www.github.com/DhesiTheKing');
    }
    if(e==="linkedIn") {
      window.location.replace('https://www.linkedin.com/in/dhesigan02');
    }
  }

  return (
    <group position={[-0.1, 0.05, -0.003]}>
      <group position={[0, -0.03, 0]}>
        <mesh visible={true}>
          <boxGeometry args={[0.155, 0.185, 0.001]} />
          <meshBasicMaterial color="white" />
          <Decal map={myTexture} scale={0.2} />
        </mesh>
      </group>

      <group scale={0.05} position={[0.29, 0.03, 0]}>
        <Text font={fontStyle}>I'M DHESIGAN</Text>
      </group>

      <group scale={0.02} position={[0.27, -0.02, 0]}>
        <Text font={fontStyle}> Full-Stack Enthusiast | Blender </Text>
      </group>
      <group scale={0.02} position={[0.28, -0.05, 0]}>
        <Text font={fontStyle}> Committed to Continuous Learning </Text>
      </group>
      <group scale={0.02} position={[0.28, -0.08, 0]}>
        <Text font={fontStyle}>Java | web development </Text>
      </group>

      <group position={[0.15, -0.14, 0]} onClick={()=> reDirect("linkedIn")}>
        <mesh visible={true}>
          <boxGeometry args={[0.04, 0.04, 0.001]} />
          <meshBasicMaterial color="white" />
          <Decal map={linkedInTexture} scale={0.0415} />
        </mesh>
      </group>
      <group position={[0.23, -0.14, 0]} onClick={()=> reDirect("email")}>
        <mesh visible={true}>
          <boxGeometry args={[0.04, 0.035, 0.001]} />
          <meshBasicMaterial color="white" />
          <Decal map={mailTexture} scale={0.04} />
        </mesh>
      </group>
      <group position={[0.31, -0.14, 0]} onClick={()=> reDirect("github")}>
        <mesh visible={true}>
          <boxGeometry args={[0.04, 0.04, 0.001]} />
          <meshBasicMaterial color="white" />
          <Decal map={gitTexture} scale={0.08} />
        </mesh>
      </group>
      <group position={[0.39, -0.14, 0]} onClick={()=> reDirect("instagram")}>
        <mesh visible={true}>
          <boxGeometry args={[0.04, 0.04, 0.001]} />
          <meshBasicMaterial color="white" />
          <Decal map={InstaTexture} scale={0.055} />
        </mesh>
      </group>
    </group>
  );
};

export default Me;
