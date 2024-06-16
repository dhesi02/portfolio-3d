import React from "react";
import { Text, useTexture, Decal } from "@react-three/drei";
import fontStyle from "../Me/textures/font.ttf";
import { navAtom } from "../Home";
import chat from "./Textures/chat.png";
import virus from "./Textures/virus.png";
import rps from "./Textures/rps.jpg";
import { useAtom } from "jotai";
const Project = () => {
  const [nav, setNav] = useAtom(navAtom);
  const [chatTexture] = useTexture([chat]);
  const [virusTexture] = useTexture([virus]);
  const [rpsTexture] = useTexture([rps]);

  const reDirectGithub = (e) =>{
    if(e==="chatty"){
      window.location.href="https://github.com/dhesi02/chatty";
    }
    if(e==="malware"){
      window.location.href="https://github.com/DhesiTheKing/LocalNet_Attacker";
    }
    if(e==="rps"){
      window.location.href="https://github.com/DhesiTheKing/RockPaperSissor";
    }
  }

  const reDirectLive = (e) =>{
    if(e==="chatty"){
      window.location.href="https://chatty-pucb.onrender.com";
    }
    if(e==="rps"){
      window.location.href="https://dhesitheking.github.io/RockPaperSissor/";
    }
  }

  return (
    <>
      {/* Project 1 */}

      <group position={[7.5, 1.5, 0]}>
        <group position={[0, -0.03, 0]}>
          <mesh visible={true}>
            <boxGeometry args={[1.5, 1.5, 0.001]} />
            <meshBasicMaterial color="white" />
            <Decal map={chatTexture} scale={1} />
          </mesh>
        </group>

        <group position={[3, 0.7, 0]} scale={0.4}>
          <Text font={fontStyle}>CHATTY APP</Text>
        </group>
        <group position={[3.2, 0.3, 0]} scale={0.15}>
          <Text font={fontStyle}>
            [React,Express,MongoDB,SocketIO,Tailwind]
          </Text>
        </group>
        <group position={[3.5, 0, 0]} scale={0.15}>
          <Text font={fontStyle}>
            Where users can chat with each others in realtime.
          </Text>
        </group>
        <group position={[3.25, -0.2, 0]} scale={0.15}>
          <Text font={fontStyle}>
            They can see no.of users in online and start a{" "}
          </Text>
        </group>
        <group position={[2.4, -0.4, 0]} scale={0.15}>
          <Text font={fontStyle}>conversation with them. </Text>
        </group>
        <group position={[1.7, -0.8, 0]} scale={0.15} onClick={()=>reDirectGithub("chatty")}>
          <Text font={fontStyle} color={"blue"}>
            github
          </Text>
        </group>
        <group position={[1.85, -1.1, 0]} scale={0.15} onClick={()=>reDirectLive("chatty")}>
          <Text font={fontStyle} color={"blue"}>
            live demo
          </Text>
        </group>
        <group
          position={[5, -1.1, 0]}
          scale={0.15}
          onClick={() => setNav("project2")}
        >
          <Text font={fontStyle} color={"#EEF7FF"}>
            NEXT
          </Text>
        </group>
      </group>

      {/* Project2  */}

      <group position={[7.5, 8, 0]}>
        <group position={[0, -0.03, 0]}>
          <mesh visible={true}>
            <boxGeometry args={[2, 2, 0.001]} />
            <meshBasicMaterial color="white" />
            <Decal map={virusTexture} scale={1.5} />
          </mesh>
        </group>

        <group position={[3, 0.7, 0]} scale={0.4}>
          <Text font={fontStyle}>MALWARE DEV</Text>
        </group>
        <group position={[3.2, 0.3, 0]} scale={0.15}>
          <Text font={fontStyle}>[Java,Batch script,Networking,Windows]</Text>
        </group>
        <group position={[3.5, 0, 0]} scale={0.15}>
          <Text font={fontStyle}>
            In this Project user can develop their own malwares
          </Text>
        </group>
        <group position={[3.45, -0.2, 0]} scale={0.15}>
          <Text font={fontStyle}>
            by providing commands.those malwares can works
          </Text>
        </group>
        <group position={[2.3, -0.4, 0]} scale={0.15}>
          <Text font={fontStyle}>only in the windows OS. </Text>
        </group>
        <group position={[1.7, -0.8, 0]} scale={0.15} onClick={()=>reDirectGithub("malware")}>
          <Text font={fontStyle} color={"blue"}>
            github
          </Text>
        </group>
        <group position={[5, -1.1, 0]} scale={0.15} onClick={()=>setNav("project1")} >
          <Text font={fontStyle} color={"#EEF7FF"}>
            PREV
          </Text>
        </group>
        <group position={[5.7, -1.1, 0]} scale={0.15} onClick={()=>setNav("project3")}>
          <Text font={fontStyle} color={"#EEF7FF"}>
            NEXT
          </Text>
        </group>
      </group>

      {/* Project 3 */}
      <group position={[-7.5, 8, 0]}>
        <group position={[0, -0.03, 0]}>
          <mesh visible={true}>
            <boxGeometry args={[1.7, 1.7, 0.001]} />
            <meshBasicMaterial color="white" />
            <Decal map={rpsTexture} scale={1.7} />
          </mesh>
        </group>

        <group position={[3.5, 0.7, 0]} scale={0.4}>
          <Text font={fontStyle}>ROCK PAPER SISSOR</Text>
        </group>
        <group position={[3.2, 0.3, 0]} scale={0.15}>
          <Text font={fontStyle}>[HTML,CSS,Java script]</Text>
        </group>
        <group position={[3.2, 0, 0]} scale={0.15}>
          <Text font={fontStyle}>
            This project is a simple rock paper sissors game.
          </Text>
        </group>
        <group position={[3.2, -0.2, 0]} scale={0.15}>
          <Text font={fontStyle}>
            with attractive ui and users can see their win and
          </Text>
        </group>
        <group position={[2.3, -0.4, 0]} scale={0.15}>
          <Text font={fontStyle}>lose against the computer. </Text>
        </group>
        <group position={[1.7, -0.8, 0]} scale={0.15} onClick={()=>reDirectGithub("rps")}>
          <Text font={fontStyle} color={"blue"}>
            github
          </Text>
        </group>
        <group position={[1.85, -1.1, 0]} scale={0.15} onClick={()=>reDirectLive("rps")}>
          <Text font={fontStyle} color={"blue"}>
            live demo
          </Text>
        </group>
        <group position={[5, -1.1, 0]} scale={0.15} onClick={()=>setNav("project2")}>
          <Text font={fontStyle} color={"#EEF7FF"}>
            PREV
          </Text>
        </group>
        <group position={[5.7, -1.1, 0]} scale={0.15}>
          <Text font={fontStyle} color={"#EEF7FF"}>
            NEXT
          </Text>
        </group>
      </group>

    </>
  );
};

export default Project;
