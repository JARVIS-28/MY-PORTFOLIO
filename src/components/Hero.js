import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const floatingVariants = {
  animate: {
    y: [-30, 30, -30],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "Hi there! I'm Janvii."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 150)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Floating background elements */}
      <div className="floating-particles" />
      
      <div className="container">
        <motion.div 
          className="hero-content glass-effect-strong animated-border"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated background particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: `linear-gradient(45deg, ${i % 2 === 0 ? '#8b5cf6' : '#ec4899'}, ${i % 2 === 0 ? '#ec4899' : '#06b6d4'})`,
                borderRadius: '50%',
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i % 3) * 20}%`,
                zIndex: 0
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              }}
            />
          ))}

          <motion.h1 
            variants={titleVariants}
            className="hero-title text-glow"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <motion.span
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
            >
              {text}
            </motion.span>
            <motion.span
              animate={{ 
                opacity: [1, 0, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ 
                color: '#8b5cf6',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.8)'
              }}
            >
              |
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="hero-subtitle"
            style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            A passionate computer science undergrad creating exciting projects and having fun along the way 🚀
          </motion.p>

          <motion.p
            variants={itemVariants}
            style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255,255,255,0.8)', 
              maxWidth: '700px', 
              margin: '0 auto 3rem',
              lineHeight: '1.7'
            }}
          >
            Passionate about{' '}
            <motion.span 
              style={{ color: '#8b5cf6', fontWeight: '700' }}
              whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
            >
              Generative AI
            </motion.span>, {' '}
            <motion.span 
              style={{ color: '#ec4899', fontWeight: '700' }}
              whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }}
            >
              Machine Learning
            </motion.span>, and {' '}
            <motion.span 
              style={{ color: '#22c55e', fontWeight: '700' }}
              whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
            >
              building intelligent tools
            </motion.span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="hero-buttons"
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View My Work →
              </motion.span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ 
                scale: 1.08,
                borderColor: "rgba(139, 92, 246, 1)",
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Get In Touch →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Animated floating elements */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{
              position: 'absolute',
              top: '15%',
              right: '5%',
              fontSize: '5rem',
              opacity: 0.1,
              zIndex: -1,
              filter: 'blur(1px)'
            }}
          >
            💻
          </motion.div>

          <motion.div
            variants={{
              animate: {
                y: [20, -20, 20],
                rotate: [-5, 5, -5],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }
            }}
            animate="animate"
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '5%',
              fontSize: '4rem',
              opacity: 0.1,
              zIndex: -1,
              filter: 'blur(1px)'
            }}
          >
            🚀
          </motion.div>

          <motion.div
            variants={{
              animate: {
                y: [-15, 15, -15],
                x: [10, -10, 10],
                rotate: [0, 360],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }
            }}
            animate="animate"
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              fontSize: '3rem',
              opacity: 0.08,
              zIndex: -1,
              filter: 'blur(2px)'
            }}
          >
            ⚡
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
