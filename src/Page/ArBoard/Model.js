import React, { useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { fabric } from 'fabric'
import * as THREE from 'three'

function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/thisMayWork.glb')
    const { gl } = useThree()
    let canvas = Array.from(document.getElementsByTagName('canvas'))[1],
      ctx,
      texture
    ctx = canvas.getContext('2d')
    texture = new THREE.CanvasTexture(ctx.canvas)
    texture.anisotropy = gl.capabilities.getMaxAnisotropy()
    texture.needsUpdate = true
  
    useFrame(() => {
      texture.needsUpdate = true
    })
    return (
      <group position={[0, -100, 0]} ref={group} {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material}>
          <meshStandardMaterial attach="material" map={texture}>
            <canvasTexture attach="map" image={canvas} />
          </meshStandardMaterial>
        </mesh>
      </group>
    )
  }
  export default Model