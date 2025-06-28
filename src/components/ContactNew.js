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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Always open to collaborations in AI/ML & automation tools. Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="text-white/80">Email</p>
                  <a href="mailto:janviirv@gmail.com" className="text-white hover:text-purple-400 transition-colors text-lg">
                    janviirv@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-2xl">🎓</div>
                <div>
                  <p className="text-white/80">Education</p>
                  <p className="text-white text-lg">PES University, Bangalore</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-2xl">💼</div>
                <div>
                  <p className="text-white/80">Status</p>
                  <p className="text-white text-lg">Open to opportunities</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex justify-center space-x-6">
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
                    className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="text-3xl">{social.icon}</span>
                    <span className="text-white font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/60">
              © 2025 Janvii R V. All rights reserved. Made with ❤️ and lots of ☕
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
