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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'janviirv28@gmail.com',
      href: 'mailto:janviirv28@gmail.com',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      description: 'Drop me a line anytime!'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/janvii-r-v',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
      description: 'Let\'s network professionally'
    },
    {
      icon: '👩‍💻',
      label: 'GitHub',
      value: 'Check out my code',
      href: 'https://github.com/JARVIS-28',
      gradient: 'linear-gradient(135deg, #f97316 0%, #22c55e 100%)',
      description: 'Explore my projects'
    }
  ]

  return (
    <section id="contact" className="section section-alt" ref={ref}>
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
            Let's Connect!
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{ 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '1.25rem',
              lineHeight: '1.6'
            }}
          >
            Have an exciting project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you! 🚀
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="card glass-effect animated-border"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 0, 51, 0.6) 100%)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: method.gradient,
                  opacity: 0
                }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating particles */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  pointerEvents: 'none'
                }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: '6px',
                      height: '6px',
                      background: method.gradient,
                      borderRadius: '50%',
                      left: `${15 + i * 15}%`,
                      top: '85%'
                    }}
                    animate={{
                      y: [-20, -80, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </motion.div>

              {/* Icon with animation */}
              <motion.div
                style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                  textAlign: 'center'
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: index * 0.2 + 0.5, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 15,
                  transition: { duration: 0.3 }
                }}
              >
                {method.icon}
              </motion.div>

              {/* Content */}
              <motion.div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  textAlign: 'center'
                }}
              >
                <motion.h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    background: method.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                >
                  {method.label}
                </motion.h3>

                <motion.p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.9, duration: 0.6 }}
                >
                  {method.description}
                </motion.p>

                <motion.div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: method.gradient,
                    borderRadius: '30px',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.2 + 1.1, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
                  }}
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {method.value}
                  </motion.span>
                  <motion.span
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional fun message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2rem',
            background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.6) 0%, rgba(26, 0, 51, 0.3) 100%)',
            borderRadius: '2rem',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            maxWidth: '600px',
            margin: '4rem auto 0',
            position: 'relative',
            overflow: 'hidden'
          }}
          whileHover={{
            borderColor: 'rgba(139, 92, 246, 0.6)',
            transition: { duration: 0.3 }
          }}
        >
          {/* Animated background */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              opacity: 0
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            style={{
              position: 'relative',
              zIndex: 1
            }}
          >
            <motion.h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Ready to create something amazing together? ✨
            </motion.h3>
            
            <motion.p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6'
              }}
            >
              I'm always excited to discuss new opportunities, creative projects, 
              or just chat about the latest in tech and AI!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
