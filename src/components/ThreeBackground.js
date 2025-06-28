import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField({ count = 5000 }) {
  const ref = useRef()
  const sphere = useRef()
  
  // Generate a sphere of random points
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Create points in a sphere
      const radius = Math.random() * 25 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Purple/pink gradient colors
      const intensity = Math.random()
      colors[i * 3] = 0.5 + intensity * 0.5     // Red
      colors[i * 3 + 1] = 0.2 + intensity * 0.3 // Green
      colors[i * 3 + 2] = 0.8 + intensity * 0.2 // Blue
    }
    
    return [positions, colors]
  }, [count])
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
    }
    if (sphere.current) {
      sphere.current.rotation.x = state.clock.elapsedTime * 0.1
      sphere.current.rotation.y = -state.clock.elapsedTime * 0.05
    }
  })
  
  return (
    <>
      <Points ref={ref} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.002}
          sizeAttenuation={true}
          alphaTest={0.5}
          vertexColors
        />
      </Points>
      
      {/* Secondary layer with different movement */}
      <Points ref={sphere} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          color="#ec4899"
          size={0.001}
          sizeAttenuation={true}
          alphaTest={0.5}
          vertexColors
          opacity={0.6}
        />
      </Points>
    </>
  )
}

function FloatingOrbs() {
  const orbs = useRef()
  const count = 50
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [count])
  
  useFrame((state) => {
    if (orbs.current) {
      orbs.current.rotation.y = state.clock.elapsedTime * 0.01
      const positions = orbs.current.geometry.attributes.position.array
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.005
      }
      
      orbs.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <Points ref={orbs} positions={positions}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation={true}
        alphaTest={0.5}
        opacity={0.3}
      />
    </Points>
  )
}

function AnimatedCamera() {
  const { camera } = useThree()
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 1
    camera.lookAt(0, 0, 0)
  })
  
  return null
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={['#000000', 10, 50]} />
        <StarField />
        <FloatingOrbs />
        <AnimatedCamera />
        
        {/* Ambient lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ec4899" />
      </Canvas>
    </div>
  )
}
