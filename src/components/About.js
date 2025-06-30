import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-glow"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
          >
            Get to know the person behind the code
          </motion.p>
        </motion.div>

        <div className="about-grid">
          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              position: 'relative',
              justifySelf: 'center'
            }}
          >
            <motion.div
              className="glass-effect animated-border profile-image"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
                  backgroundSize: '400% 400%',
                  borderRadius: '50%',
                  opacity: 0.1
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Avatar Emoji */}
              <motion.span
                style={{ position: 'relative', zIndex: 1 }}
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                👩‍💻
              </motion.span>

              {/* Floating particles around avatar */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: `hsl(${280 + i * 20}, 70%, 60%)`,
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%'
                  }}
                  animate={{
                    x: [0, 100 * Math.cos(i * Math.PI / 4)],
                    y: [0, 100 * Math.sin(i * Math.PI / 4)],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ 
              textAlign: 'left',
              position: 'relative'
            }}
          >
            <motion.div
              variants={itemVariants}
              className="card"
              style={{
                background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 0, 51, 0.4) 100%)',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background elements */}
              <motion.div
                className="floating-particles"
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.3
                }}
              />

              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Hey there! I'm <motion.span 
                  className="text-glow"
                  style={{ 
                    fontWeight: '700', 
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  Janvii
                </motion.span>, a passionate computer science student with a love for all things tech! 🚀
              </motion.p>

              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                I'm currently diving deep into the fascinating worlds of{' '}
                <motion.span 
                  className="text-glow-pink"
                  style={{ fontWeight: '600', color: '#ec4899' }}
                  whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }}
                >
                  Artificial Intelligence
                </motion.span>{' '}
                and{' '}
                <motion.span 
                  className="text-glow"
                  style={{ fontWeight: '600', color: '#8b5cf6' }}
                  whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
                >
                  Machine Learning
                </motion.span>. 
                There's something magical about teaching machines to think and learn!
              </motion.p>

              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                When I'm not coding, you'll find me exploring new technologies, building cool projects, 
                or brainstorming the next big idea. I believe in creating technology that makes a 
                positive impact on the world! ✨
              </motion.p>

              {/* Fun facts with animated icons */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {[
                  { icon: '🎯', text: 'Problem Solver' },
                  { icon: '💡', text: 'Creative Thinker' },
                  { icon: '🌟', text: 'Tech Enthusiast' },
                  { icon: '🚀', text: 'Innovation Lover' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(139, 92, 246, 0.2)',
                      padding: '0.75rem 1rem',
                      borderRadius: '25px',
                      border: '1px solid rgba(139, 92, 246, 0.4)',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: 'rgba(139, 92, 246, 0.3)',
                      borderColor: 'rgba(139, 92, 246, 0.6)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  >
                    <motion.span
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'easeInOut'
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
