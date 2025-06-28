import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="logo"
        >
          Janvii R V
        </motion.div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: '500' }}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
