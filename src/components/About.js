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
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem'
            }}
          >
            About Me
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Get to know the person behind the code
          </motion.p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="about-image"
          >
            <div className="profile-image cursor-reactive">
              👩‍💻
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="about-content"
          >
            <div className="card cursor-reactive">
              <p>
                Hey there! I'm <span className="text-glow-purple">Janvii</span>, a passionate computer science student with a love for all things tech! 🚀
              </p>
              
              <p>
                I'm currently diving deep into the fascinating worlds of{' '}
                <span className="text-glow-pink">Artificial Intelligence</span>{' '}
                and{' '}
                <span className="text-glow-blue">Machine Learning</span>. 
                There's something magical about teaching machines to think and learn!
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, building cool projects, 
                or brainstorming the next big idea. I believe in creating technology that makes a 
                positive impact on the world! ✨
              </p>

              <div className="about-tags">
                <span>🎯 Problem Solver</span>
                <span>💡 Creative Thinker</span>
                <span>🌟 Tech Enthusiast</span>
                <span>🚀 Innovation Lover</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
