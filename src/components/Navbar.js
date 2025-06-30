import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Icon components
const HomeIcon = ({ size = 20, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
)

const UserIcon = ({ size = 20, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const ZapIcon = ({ size = 20, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
)

const CodeIcon = ({ size = 20, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
)

const MailIcon = ({ size = 20, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
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
    { name: 'Home', href: '#home', id: 'home', icon: HomeIcon, color: '#8b5cf6' },
    { name: 'About', href: '#about', id: 'about', icon: UserIcon, color: '#ec4899' },
    { name: 'Skills', href: '#skills', id: 'skills', icon: ZapIcon, color: '#06b6d4' },
    { name: 'Projects', href: '#projects', id: 'projects', icon: CodeIcon, color: '#22c55e' },
    { name: 'Contact', href: '#contact', id: 'contact', icon: MailIcon, color: '#f97316' },
  ]

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Logo - Fixed top left */}
      <motion.div
        className="logo-container cursor-reactive"
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: '15px',
          padding: '0.75rem 1.5rem',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.4), 0 8px 32px rgba(0, 0, 0, 0.4)'
        }}
      >
        <motion.div
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.5rem',
            fontWeight: '900',
            cursor: 'pointer'
          }}
          onClick={() => handleNavClick('#home')}
        >
          Janvii R V
        </motion.div>
      </motion.div>

      {/* Floating Navigation - Thin, responsive horizontal at bottom center */}
      <motion.nav
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: '50px',
          padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.8rem, 3vw, 1.2rem)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          gap: 'clamp(0.3rem, 1.5vw, 0.5rem)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'clamp(260px, 70vw, 350px)',
          maxWidth: '90vw',
          height: 'clamp(50px, 12vw, 60px)'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.3 }}
        className="floating-nav cursor-reactive"
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className="nav-button"
            style={{
              background: activeSection === item.id 
                ? `linear-gradient(135deg, ${item.color}40, ${item.color}20)` 
                : 'transparent',
              border: activeSection === item.id 
                ? `1px solid ${item.color}60` 
                : '1px solid transparent',
              borderRadius: '50%',
              padding: 'clamp(0.5rem, 1.5vw, 0.65rem)',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              width: 'clamp(36px, 8vw, 44px)',
              height: 'clamp(36px, 8vw, 44px)',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: `${item.color}20`,
              border: `1px solid ${item.color}60`,
              boxShadow: `0 0 20px ${item.color}40`
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 + 0.5,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeSection === item.id ? item.color : '#ffffff',
                filter: activeSection === item.id ? 'brightness(1.3)' : 'brightness(0.8)',
                width: 'clamp(16px, 4vw, 20px)',
                height: 'clamp(16px, 4vw, 20px)'
              }}
              animate={{
                rotate: activeSection === item.id ? [0, 5, -5, 0] : 0,
                scale: activeSection === item.id ? [1, 1.05, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: activeSection === item.id ? Infinity : 0,
                ease: 'easeInOut'
              }}
            >
              <item.icon 
                size={18} 
                color={activeSection === item.id ? item.color : '#ffffff'} 
              />
            </motion.div>

            {activeSection === item.id && (
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${item.color}20, transparent, ${item.color}20)`,
                  borderRadius: '50%'
                }}
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.nav>
    </>
  )
}