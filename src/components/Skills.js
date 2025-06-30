import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'Python', icon: '🐍', level: 90, color: '#3776ab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: '⚡', level: 85, color: '#f7df1e', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: '⚛️', level: 80, color: '#61dafb', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: '▲', level: 75, color: '#000000', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: '🟢', level: 80, color: '#68a063', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Machine Learning', icon: '🤖', level: 85, color: '#ff6b35', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'AI/LLMs', icon: '🧠', level: 80, color: '#8b5cf6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'SQL', icon: '🗄️', level: 75, color: '#336791', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', icon: '📋', level: 85, color: '#f05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Java', icon: '☕', level: 70, color: '#ed8b00', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'HTML/CSS', icon: '🎨', level: 90, color: '#e34c26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Figma', icon: '🎨', level: 85, color: '#f24e1e', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
  ]

  return (
    <section id="skills" className="section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
          style={{ position: 'relative' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-glow"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              marginBottom: '1rem'
            }}
            whileHover={{
              textShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
            }}
          >
            My Skills
            
            {/* Animated underline */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                width: '0%',
                height: '4px',
                background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)',
                borderRadius: '2px'
              }}
              initial={{ width: '0%', x: '-50%' }}
              animate={isInView ? { width: '100%', x: '-50%' } : { width: '0%', x: '-50%' }}
              transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
            />
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: '400',
              letterSpacing: '0.5px'
            }}
            whileHover={{
              color: 'rgba(255, 255, 255, 1)',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(1rem, 2.5vw, 1.5rem)',
            marginBottom: '4rem',
            maxWidth: '1000px',
            margin: '0 auto 4rem auto',
            padding: '0 1rem'
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="cursor-reactive"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))',
                backgroundSize: '400% 400%',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                minHeight: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '240px'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                backgroundPosition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.2
                }
              }}
              whileHover={{ 
                boxShadow: `0 0 30px ${skill.color}60, 0 0 60px ${skill.color}30, 0 0 90px ${skill.color}20`,
                border: `1px solid ${skill.color}80`
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated border glow */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  padding: '2px',
                  background: `linear-gradient(45deg, ${skill.color}40, transparent, ${skill.color}40)`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  opacity: 0
                }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              />

              {/* Tech Logo */}
              <motion.div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  marginBottom: '1rem'
                }}
              >
                <motion.img
                  src={skill.logo}
                  alt={skill.name}
                  style={{
                    width: 'clamp(60px, 8vw, 80px)',
                    height: 'clamp(60px, 8vw, 80px)',
                    objectFit: 'contain',
                    filter: 'brightness(0.9)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    filter: 'brightness(1.2)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <motion.div
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    display: 'none'
                  }}
                >
                  {skill.icon}
                </motion.div>
              </motion.div>
              
              <motion.h4
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  position: 'relative',
                  zIndex: 1
                }}
                whileHover={{
                  color: skill.color,
                  textShadow: `0 0 20px ${skill.color}40`
                }}
              >
                {skill.name}
              </motion.h4>
              
              <div style={{ position: 'relative', marginBottom: '1rem', zIndex: 1 }}>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={isInView ? { 
                      width: `${skill.level}%`, 
                      opacity: 1 
                    } : { 
                      width: 0, 
                      opacity: 0 
                    }}
                    transition={{ 
                      delay: 1 + index * 0.1, 
                      duration: 1.2,
                      ease: 'easeOut'
                    }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      borderRadius: '4px',
                      position: 'relative',
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        borderRadius: '4px'
                      }}
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 2 + index * 0.1,
                        ease: 'linear'
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              <motion.span
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                  fontWeight: '500',
                  position: 'relative',
                  zIndex: 1
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '700px',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            whileHover={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              boxShadow: '0 12px 40px rgba(139, 92, 246, 0.2)',
              transform: 'translateY(-5px)'
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Animated background gradient */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))',
                backgroundSize: '400% 400%',
                borderRadius: '20px',
                opacity: 0.5
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            <motion.h3
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600',
                position: 'relative',
                zIndex: 1
              }}
              whileHover={{
                textShadow: '0 0 20px rgba(139, 92, 246, 0.6)'
              }}
            >
              Currently Learning & Exploring
            </motion.h3>
            
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                position: 'relative',
                zIndex: 1
              }}
            >
              {['ChromaDB', 'CrewAI', 'Knowledge Graphs', 'Advanced LLMs', 'Vector Databases', 'LangChain'].map((item, index) => (
                <motion.span
                  key={item}
                  style={{
                    padding: '0.75rem 1.25rem',
                    background: 'rgba(6, 182, 212, 0.2)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#e5e7eb',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    background: 'rgba(6, 182, 212, 0.3)',
                    border: '1px solid rgba(6, 182, 212, 0.5)',
                    boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      borderRadius: '25px'
                    }}
                    animate={{
                      left: ['100%', '-100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 3 + index * 0.2,
                      ease: 'linear'
                    }}
                  />
                  <span style={{ position: 'relative', zIndex: 1 }}>{item}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
