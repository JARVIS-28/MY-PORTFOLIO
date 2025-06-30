import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField({ count = 6000, mousePosition }) {
  const ref = useRef()
  const materialRef = useRef()
  
  // Generate realistic stars with twinkling effect
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    // Realistic star colors based on temperature
    const starColors = [
      [1.0, 1.0, 1.0],    // White (hottest)
      [0.9, 0.9, 1.0],    // Blue-white
      [0.8, 0.8, 1.0],    // Blue
      [1.0, 0.9, 0.7],    // Yellow-white
      [1.0, 0.8, 0.6],    // Yellow
      [1.0, 0.7, 0.4],    // Orange
      [1.0, 0.5, 0.3],    // Red-orange
      [0.9, 0.4, 0.9],    // Purple (nebula reflection)
      [0.4, 0.9, 0.9],    // Cyan (nebula reflection)
    ]
    
    for (let i = 0; i < count; i++) {
      // Spread stars across a vast space
      const radius = Math.random() * 200 + 50
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Assign star color
      const colorIndex = Math.floor(Math.random() * starColors.length)
      const baseColor = starColors[colorIndex]
      const brightness = 0.7 + Math.random() * 0.3
      
      colors[i * 3] = baseColor[0] * brightness
      colors[i * 3 + 1] = baseColor[1] * brightness
      colors[i * 3 + 2] = baseColor[2] * brightness
      
      // Variable star sizes for depth
      sizes[i] = Math.random() * 2 + 0.5
    }
    
    return [positions, colors, sizes]
  }, [count])
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime
      
      // Gentle stellar drift
      ref.current.rotation.x += 0.0001
      ref.current.rotation.y += 0.0002
      
      // Mouse parallax effect
      if (mousePosition) {
        ref.current.rotation.x += mousePosition.y * 0.0003
        ref.current.rotation.y += mousePosition.x * 0.0003
      }
      
      // Twinkling effect
      if (materialRef.current) {
        materialRef.current.opacity = 0.8 + Math.sin(time * 3) * 0.2
      }
    }
  })
  
  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={1.5}
        sizeAttenuation={true}
        alphaTest={0.1}
        opacity={0.9}
      />
    </Points>
  )
}

function ColorfulNebula({ mousePosition }) {
  const ref = useRef()
  const materialRef = useRef()
  
  const nebulaPoints = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Create nebula-like clouds
      const radius = Math.random() * 150 + 30
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta) * 0.3
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.3
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.3
      
      // Nebula colors - purples, pinks, blues
      const nebulaPalette = [
        [0.6, 0.2, 1.0],    // Purple
        [1.0, 0.2, 0.6],    // Pink
        [0.2, 0.4, 1.0],    // Blue
        [0.8, 0.3, 0.9],    // Magenta
        [0.3, 0.8, 1.0],    // Cyan
      ]
      
      const colorIndex = Math.floor(Math.random() * nebulaPalette.length)
      const color = nebulaPalette[colorIndex]
      const intensity = Math.random() * 0.3 + 0.1
      
      colors[i * 3] = color[0] * intensity
      colors[i * 3 + 1] = color[1] * intensity
      colors[i * 3 + 2] = color[2] * intensity
    }
    
    return [positions, colors]
  }, [])
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime
      
      // Slow nebula drift
      ref.current.rotation.y = time * 0.01
      ref.current.rotation.x = Math.sin(time * 0.005) * 0.1
      
      // Mouse interaction
      if (mousePosition) {
        ref.current.rotation.x += mousePosition.y * 0.0002
        ref.current.rotation.y += mousePosition.x * 0.0002
      }
      
      // Breathing effect
      if (materialRef.current) {
        materialRef.current.opacity = 0.3 + Math.sin(time * 0.5) * 0.1
      }
    }
  })
  
  return (
    <Points ref={ref} positions={nebulaPoints[0]}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={3}
        sizeAttenuation={true}
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function MouseTracker({ mousePosition }) {
  const { camera, scene } = useThree()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (mousePosition) {
      // Smooth camera movement following mouse
      const targetX = mousePosition.x * 5
      const targetY = mousePosition.y * 3
      
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.02)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.02)
    }
    
    // Gentle floating motion
    camera.position.z = 15 + Math.sin(time * 0.2) * 1
    camera.lookAt(0, 0, 0)
  })
  
  return null
}

export default function ThreeBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ 
          background: 'radial-gradient(ellipse at center, #0a0015 0%, #000000 70%)',
        }}
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        {/* Space-like lighting */}
        <ambientLight intensity={0.1} color="#ffffff" />
        <pointLight position={[50, 50, 50]} intensity={0.2} color="#8b5cf6" />
        <pointLight position={[-50, -50, 50]} intensity={0.15} color="#ec4899" />
        <pointLight position={[0, 0, -50]} intensity={0.1} color="#06b6d4" />
        
        <StarField mousePosition={mousePosition} />
        <ColorfulNebula mousePosition={mousePosition} />
        <MouseTracker mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
