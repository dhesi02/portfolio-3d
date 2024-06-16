import React, { useState } from "react";
import { Room } from "./Room/Room";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, CameraControls, Decal, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { useRef } from "react";
import Me from "./Me/Me";
import Project from "./Projects/Project";

import { atom, useAtom } from "jotai";
import Skills from "./Skills/Skills";
import Certification from "./Certifications/Certification";


export const navAtom = atom("home");

const Home = () => {
  const [nav, setNav] = useAtom(navAtom);
  const [showme, setShowMe] = useState(false);
  const [showProjects, setShowProjects] = useState(true);


  const fitComputer = useRef();
  const fitHomeScreen = useRef();
  const controls = useRef();
  const fitProject1 = useRef();
  const fitProject2 = useRef();
  const fitProject3 = useRef();
  const fitSkills = useRef();
  const fitCertifications = useRef();

  const reDirectCv = (e) =>{
    window.location.href="https://drive.google.com/file/d/1WVUkV-IrveTWXQT-_3_qhYlepqix5L1b/view?usp=sharing";
  }

  const fitCamera = async () => {
    if (nav === "computer") {
      controls.current.smoothTime = 0.5;
      controls.current.fitToBox(fitComputer.current, true);
    }
    if (nav === "home") {
      controls.current.smoothTime = 0.5;
      controls.current.fitToBox(fitHomeScreen.current, true);
    }
    if (nav === "project1") {
      controls.current.smoothTime = 0.5;
      controls.current.fitToBox(fitProject1.current, true);
    }
    if (nav === "project2") {
      controls.current.smoothTime = 0.5;
      controls.current.fitToBox(fitProject2.current, true);
    }
    if (nav === "project3") {
      controls.current.smoothTime = 0.5;
      controls.current.fitToBox(fitProject3.current, true);
    }
    if(nav === "skills"){
      controls.current.smoothTime = 0.5;
      controls.current.fitToBox(fitSkills.current, true);
    }
    if(nav === "certificate"){
      controls.current.smoothTime = 0.5;
      controls.current.fitToBox(fitCertifications.current, true);
    }
  };

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [nav]);

  return (
    <>
      <section className="flex flex-col flex-grow h-full w-full">
        <div className="h-12 w-full justify-center bg-black flex flex-row">
          <div
            className="p-3 text-white font-bold cursor-pointer hover:text-black hover:bg-white mr-5 h-full"
            onClick={() => {
              setNav("home");
              setShowMe(false);
            }}
          >
            Home
          </div>
          <div
            className="p-3 text-white font-bold cursor-pointer hover:text-black hover:bg-white mr-5 h-full"
            onClick={() => {
              setNav("computer");
              setShowMe(true);
            }}
          >
            Me
          </div>
          <div
            className="p-3 text-white font-bold cursor-pointer hover:text-black hover:bg-white mr-5 h-full"
            onClick={() => {
              setNav("project1");
              setShowMe(false);
            }}
          >
            Projects
          </div>
          <div
            className="p-3 text-white font-bold cursor-pointer hover:text-black hover:bg-white mr-5 h-full"
            onClick={() => {
              setNav("skills");
              setShowMe(false);
            }}
          >
            Skills
          </div>
          <div
            className="p-3 text-white font-bold cursor-pointer hover:text-black hover:bg-white mr-5 h-full"
            onClick={() => {
              setNav("certificate");
              setShowMe(false);
            }}
          >
            Certifications
          </div>
          <div
            className="p-3 text-white font-bold cursor-pointer hover:text-black hover:bg-white mr-5 h-full"
            onClick={() => {
              reDirectCv();
            }}
          >
            download cv
          </div>


        </div>
        <div className="h-full flex flex-row">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 42 }}>
            <Suspense>
              <CameraControls
                ref={controls}
                minAzimuthAngle={-Math.PI / 12}
                maxAzimuthAngle={Math.PI / 12}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI - Math.PI / 2}
                minDistance={0.5}
                maxDistance={5}
              />

              {/* About me */}
              {showme ? <Me /> : null}

              {/* About Projects */}

              {showProjects ? <Project /> : null}

              {/* About Skills */}

              <Skills/>

              {/* About Certifications */}

              <Certification/>

              {/* Camera to the Main page */}
              <group position={[0.12, 0, 0]}>
                <mesh ref={fitHomeScreen} visible={false}>
                  <boxGeometry args={[3, 5, 5]} />
                </mesh>
              </group>

              {/* Camera to the computer */}
              <group position={[0.13, 0, -0.4]}>
                <mesh ref={fitComputer} visible={false}>
                  <boxGeometry args={[0.8, 0.5, 0.3]} />
                </mesh>
              </group>

              {/* Camera to the Projects */}
              <group position={[10, 1.5, -0.4]}>
                <mesh ref={fitProject1} visible={false}>
                  <boxGeometry args={[8, 3, 0.3]} />
                </mesh>
              </group>

              <group position={[10, 8, -0.4]}>
                <mesh ref={fitProject2} visible={false}>
                  <boxGeometry args={[8, 3, 0.3]} />
                </mesh>
              </group>

              <group position={[-5, 8, -0.4]}>
                <mesh ref={fitProject3} visible={false}>
                  <boxGeometry args={[8, 3, 0.3]} />
                </mesh>
              </group>

              {/* Camera to skills */}

              <group position={[-9, 2.5, -0.4]}>
                <mesh ref={fitSkills} visible={false}>
                  <boxGeometry args={[8, 3, 0.3]} />
                </mesh>
              </group>


              {/* Camera to certificates */}

              <group position={[-9, 15.1, -0.4]}>
                <mesh ref={fitCertifications} visible={false}>
                  <boxGeometry args={[8, 4.5, 0.3]} />
                </mesh>
              </group>

              {/* Room  */}
              <Room />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Home;
