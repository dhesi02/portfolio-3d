import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import roomModel from './room.glb';
export function Room(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(roomModel)
  const { actions ,names} = useAnimations(animations, group)

  useEffect(()=>{
    actions[names[5]].play()
    actions[names[1]].play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} position={[0,-1.4,16]}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0.131, 0.142, -14.943]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="258f02bf2699460eb04e7d3cd716bfcefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="BEAN_BAG001"
                  position={[-16.184, 0, 19.572]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="BUILDING"
                  position={[0, 2.532, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Camera"
                  position={[7.469, 122.386, 541.907]}
                  rotation={[3.141, 1.48, 3.121]}
                  scale={100}>
                  <group name="Object_60" />
                </group>
                <group
                  name="GAMING_CHAIR"
                  position={[61.302, 81.729, -15.395]}
                  rotation={[0, -0.615, 0]}
                  scale={4.674}>
                  <mesh
                    name="GAMING_CHAIR_GAMING_CHAIR_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.GAMING_CHAIR_GAMING_CHAIR_0.geometry}
                    material={materials.GAMING_CHAIR}
                    position={[16.396, 0, 12.871]}
                  />
                </group>
                <group name="JENDELA" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group
                  name="KABEL"
                  position={[-38.053, 91.356, -142.327]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={6.832}>
                  <mesh
                    name="KABEL_CableColor_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.KABEL_CableColor_0.geometry}
                    material={materials.CableColor}
                  />
                </group>
                <group
                  name="KEYBOARD"
                  position={[-4.25, 97.39, -82.616]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={6.251}>
                  <mesh
                    name="KEYBOARD_Keyboard_Keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.KEYBOARD_Keyboard_Keys_0.geometry}
                    material={materials.Keyboard_Keys}
                  />
                </group>
                <group
                  name="LAMP"
                  position={[-36.002, -15, 35.358]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="LAMP_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.LAMP_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                  <mesh
                    name="LAMP_lambert5_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.LAMP_lambert5_0.geometry}
                    material={materials.lambert5}
                  />
                  <group
                    name="Sun005"
                    position={[-1.039, 1.535, 2.018]}
                    rotation={[-1.997, -1.559, 2.723]}
                    scale={[0.458, 0.228, 0.354]}>
                    <group name="Object_41" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_42" />
                    </group>
                  </group>
                </group>
                <group
                  name="MEJA"
                  position={[-25.3, 0, 35.358]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="MEJA_LED_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.MEJA_LED_0.geometry}
                    material={materials.material_5}
                  />
                  <mesh
                    name="MEJA_PUTIH_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.MEJA_PUTIH_0.geometry}
                    material={materials.PUTIH}
                  />
                </group>
                <group
                  name="MONITOR"
                  position={[-2.12, 130.676, -124.299]}
                  rotation={[-1.585, 0.001, 0.004]}
                  scale={8.785}
                />
                <group
                  name="MOUSE"
                  position={[46.911, 97.108, -83.116]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={6.251}>
                  <mesh
                    name="MOUSE_LED_KEYBOARD_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.MOUSE_LED_KEYBOARD_0.geometry}
                    material={materials.LED_KEYBOARD}
                  />
                  <mesh
                    name="MOUSE_PC_kasa_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.MOUSE_PC_kasa_0.geometry}
                    material={materials.PC_kasa}
                  />
                </group>
                <group
                  name="PC_CASE"
                  position={[-88.425, 25.778, -103.72]}
                  rotation={[Math.PI, 0, 0]}
                  scale={6.832}>
                  <mesh
                    name="PC_CASE_CableColor_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.PC_CASE_CableColor_0.geometry}
                    material={materials.CableColor}
                  />
                  <mesh
                    name="PC_CASE_CableColor_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.PC_CASE_CableColor_0001.geometry}
                    material={materials.CableColor}
                  />
                </group>
                <group
                  name="Plane"
                  position={[-25.3, 0, 35.358]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Plane_LED_KEYBOARD_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_LED_KEYBOARD_0.geometry}
                    material={materials.LED_KEYBOARD}
                  />
                  <mesh
                    name="Plane_PUTIH_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_PUTIH_0.geometry}
                    material={materials.PUTIH}
                  />
                </group>
                <group
                  name="POSTER_1"
                  position={[-78.36, 227.232, -152.87]}
                  scale={[27.034, 35.07, 53.83]}>
                  <mesh
                    name="POSTER_1_POSTER_1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.POSTER_1_POSTER_1_0.geometry}
                    material={materials.luffy}
                    position={[0, 0, -0.296]}
                    rotation={[3.131, 0, 0]}
                  />
                  <mesh
                    name="POSTER_1_Side_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.POSTER_1_Side_Frame_0.geometry}
                    material={materials['Material.002']}
                    position={[0, 0, -0.296]}
                  />
                </group>
                <group
                  name="POSTER_2"
                  position={[-0.972, 227.232, -152.87]}
                  scale={[27.034, 35.07, 53.83]}>
                  <mesh
                    name="POSTER_2_POSTER_2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.POSTER_2_POSTER_2_0.geometry}
                    material={materials['Material.003']}
                    position={[0, 0, -0.296]}
                    rotation={[3.129, 0, 0]}
                  />
                  <mesh
                    name="POSTER_2_Side_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.POSTER_2_Side_Frame_0.geometry}
                    material={materials['Material.004']}
                    position={[0, 0, -0.296]}
                  />
                </group>
                <group
                  name="POSTER_3"
                  position={[76.424, 227.232, -152.87]}
                  scale={[27.034, 35.07, 53.83]}>
                  <mesh
                    name="POSTER_3_POSTER_3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.POSTER_3_POSTER_3_0.geometry}
                    material={materials['Material.005']}
                    position={[0, 0, -0.296]}
                    rotation={[3.129, 0, 0]}
                  />
                  <mesh
                    name="POSTER_3_Side_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.POSTER_3_Side_Frame_0.geometry}
                    material={materials['Material.006']}
                    position={[0, 0, -0.296]}
                  />
                </group>
                <group
                  name="SPEAKER"
                  position={[-75.007, 94.928, -109.642]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={20.407}>
                  <mesh
                    name="SPEAKER_DefaultMaterial_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SPEAKER_DefaultMaterial_0.geometry}
                    material={materials.DefaultMaterial}
                  />
                </group>
                <group
                  name="SPEAKER001"
                  position={[72.515, 94.928, -109.642]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={20.407}>
                  <mesh
                    name="SPEAKER001_DefaultMaterial_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SPEAKER001_DefaultMaterial_0.geometry}
                    material={materials.DefaultMaterial}
                  />
                </group>
                <group
                  name="Sun002"
                  position={[323.892, 309.845, -94.507]}
                  rotation={[1.316, -1.525, 0.192]}
                  scale={[2127.345, 2116.451, 3290.534]}>
                  <group name="Object_15" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_16" />
                  </group>
                </group>
                <group
                  name="Sun003"
                  position={[-103.856, 201.842, 21.406]}
                  rotation={[2.715, -1.559, 2.723]}
                  scale={[45.824, 22.765, 35.39]}>
                  <group name="Object_18" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_19" />
                  </group>
                </group>
                <group
                  name="Sun004"
                  position={[-18.365, 309.845, 172.94]}
                  rotation={[1.316, -1.525, 0.192]}
                  scale={[2127.345, 2116.451, 3290.534]}>
                  <group name="Object_12" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_13" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[0.131, 0.142, -14.943]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="31e4b930837f4af793f05de91cb46e6efbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode001">
              <group name="Monitor" position={[-0.04, 122.936, -108.232]} scale={100}>
                <mesh
                  name="Monitor_Screen1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Monitor_Screen1_0.geometry}
                  material={materials.Screen1}
                />
                <mesh
                  name="Monitor_Screen2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Monitor_Screen2_0.geometry}
                  material={materials.Screen2}
                />
                <mesh
                  name="Monitor_WhiteRough_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Monitor_WhiteRough_0.geometry}
                  material={materials.WhiteRough}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.wall}
          scale={16.637}
        />
      </group>
    </group>
  )
}

useGLTF.preload(roomModel)