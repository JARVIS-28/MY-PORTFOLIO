import { motion } from 'framer-motion'

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JARVIS-28',
      icon: '🐙',
    },
    {
      name: 'Email',
      url: 'mailto:janviirv@gmail.com',
      icon: '📧',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/janvii-rv',
      icon: '💼',
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2>Get In Touch</h2>
          <p>Always open to collaborations in AI/ML & automation tools. Feel free to reach out!</p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">📧</div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.25rem' }}>Email</p>
                <a href="mailto:janviirv@gmail.com">janviirv@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">🎓</div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.25rem' }}>Education</p>
                <p style={{ color: '#ffffff', fontSize: '1.125rem', margin: 0 }}>PES University, Bangalore</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">💼</div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.25rem' }}>Status</p>
                <p style={{ color: '#ffffff', fontSize: '1.125rem', margin: 0 }}>Open to opportunities</p>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="social-link"
                >
                  <span className="icon">{social.icon}</span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer">
            <p>© 2025 Janvii R V. All rights reserved. Made with ❤️ and lots of ☕</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
