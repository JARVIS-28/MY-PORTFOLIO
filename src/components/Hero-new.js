import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: '#8b5cf6' }}
            >
              |
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A passionate computer science undergrad creating exciting projects and having fun along the way 🚀
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '1rem auto' }}
          >
            Passionate about <span style={{ color: '#8b5cf6', fontWeight: '600' }}>Generative AI</span>, 
            <span style={{ color: '#3b82f6', fontWeight: '600' }}> Machine Learning</span>, and 
            <span style={{ color: '#22c55e', fontWeight: '600' }}> building intelligent tools</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hero-buttons"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
