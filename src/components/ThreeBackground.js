import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField({ count = 8000, mousePosition }) {
  const ref = useRef()
  const materialRef = useRef()
  
  // Generate stars scattered throughout space
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    // Color palette for multi-color stars
    const colorPalette = [
      [0.5, 0.2, 1.0],    // Purple
      [1.0, 0.3, 0.7],    // Pink
      [0.3, 0.8, 1.0],    // Blue
      [0.8, 0.4, 1.0],    // Violet
      [1.0, 0.6, 0.2],    // Orange
      [0.2, 1.0, 0.8],    // Cyan
      [1.0, 1.0, 0.3],    // Yellow
      [0.9, 0.2, 0.4],    // Red-pink
    ]
    
    for (let i = 0; i < count; i++) {
      // Spread stars in a large 3D space
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
      
      // Random color from palette
      const colorIndex = Math.floor(Math.random() * colorPalette.length)
      const baseColor = colorPalette[colorIndex]
      const intensity = 0.8 + Math.random() * 0.4
      
      colors[i * 3] = baseColor[0] * intensity
      colors[i * 3 + 1] = baseColor[1] * intensity
      colors[i * 3 + 2] = baseColor[2] * intensity
      
      // Variable star sizes
      sizes[i] = Math.random() * 0.8 + 0.2
    }
    
    return [positions, colors, sizes]
  }, [count])
  
  useFrame((state) => {
    if (ref.current) {
      // Gentle rotation
      ref.current.rotation.x += 0.0002
      ref.current.rotation.y += 0.0001
      
      // Mouse interaction - move stars based on mouse position
      if (mousePosition) {
        const time = state.clock.elapsedTime
        ref.current.rotation.x += (mousePosition.y * 0.0001)
        ref.current.rotation.y += (mousePosition.x * 0.0001)
        
        // Add subtle pulsing effect
        if (materialRef.current) {
          materialRef.current.opacity = 0.8 + Math.sin(time * 2) * 0.1
        }
      }
    }
  })
  
  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={0.8}
        sizeAttenuation={true}
        alphaTest={0.1}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ShootingStars({ mousePosition }) {
  const ref = useRef()
  const [stars] = useState(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30
      ],
      velocity: [
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.05
      ],
      color: [
        Math.random(),
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.3 + 0.7
      ],
      life: Math.random()
    }))
  })
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime
      
      // Mouse influence on shooting stars
      if (mousePosition) {
        ref.current.rotation.x += mousePosition.y * 0.00005
        ref.current.rotation.y += mousePosition.x * 0.00005
      }
      
      // Animate shooting stars
      stars.forEach((star, i) => {
        star.position[0] += star.velocity[0] + (mousePosition?.x || 0) * 0.001
        star.position[1] += star.velocity[1] + (mousePosition?.y || 0) * 0.001
        star.position[2] += star.velocity[2]
        
        star.life -= 0.005
        
        if (star.life <= 0) {
          star.position = [
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 30
          ]
          star.life = 1
        }
      })
    }
  })
  
  return (
    <group ref={ref}>
      {stars.map((star) => (
        <mesh key={star.id} position={star.position}>
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial
            color={star.color}
            transparent
            opacity={star.life * 0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

function MouseInteractiveCamera({ mousePosition }) {
  const { camera } = useThree()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (mousePosition) {
      // Smooth camera movement based on mouse position
      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        mousePosition.x * 3,
        0.05
      )
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        mousePosition.y * 2,
        0.05
      )
    }
    
    // Gentle floating motion
    camera.position.z = 10 + Math.sin(time * 0.5) * 0.5
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
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Enhanced lighting for better star visibility */}
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={0.3} color="#8b5cf6" />
        <pointLight position={[-20, -20, -20]} intensity={0.2} color="#ec4899" />
        <pointLight position={[0, 20, -20]} intensity={0.15} color="#06b6d4" />
        
        <StarField mousePosition={mousePosition} />
        <ShootingStars mousePosition={mousePosition} />
        <MouseInteractiveCamera mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
