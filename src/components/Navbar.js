import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="navbar"
      style={{
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.95)' 
          : 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(139, 92, 246, 0.3)' 
          : '1px solid rgba(139, 92, 246, 0.1)',
        transition: 'all 0.3s ease'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container">
        {/* Logo */}
        <motion.div
          className="logo"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.75rem',
            fontWeight: '900',
            cursor: 'pointer'
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
          }}
          onClick={() => handleNavClick('#home')}
        >
          Janvii R V
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          style={{ 
            display: 'flex', 
            gap: '2.5rem',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              style={{
                color: activeSection === item.id 
                  ? '#8b5cf6' 
                  : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                position: 'relative',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ 
                color: '#ffffff',
                background: 'rgba(139, 92, 246, 0.2)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                    borderRadius: '25px',
                    border: '1px solid rgba(139, 92, 246, 0.5)',
                    zIndex: -1
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Hover glow effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                  borderRadius: '25px',
                  opacity: 0,
                  zIndex: -1
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              <span style={{ position: 'relative', zIndex: 1 }}>
                {item.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="mobile-menu-btn"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                width: '25px',
                height: '3px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                borderRadius: '2px'
              }}
              animate={{
                rotate: isOpen && i === 0 ? 45 : isOpen && i === 2 ? -45 : 0,
                y: isOpen && i === 0 ? 7 : isOpen && i === 2 ? -7 : 0,
                opacity: isOpen && i === 1 ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderTop: 'none',
              borderRadius: '0 0 1rem 1rem',
              padding: '2rem',
              zIndex: 50
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                style={{
                  display: 'block',
                  color: activeSection === item.id ? '#8b5cf6' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.25rem',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ 
                  color: '#ffffff',
                  background: 'rgba(139, 92, 246, 0.2)',
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add mobile styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}
