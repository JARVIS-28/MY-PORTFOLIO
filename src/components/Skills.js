import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'JavaScript', icon: '🟨', level: 85 },
    { name: 'React', icon: '⚛️', level: 80 },
    { name: 'Next.js', icon: '▲', level: 75 },
    { name: 'Node.js', icon: '🟢', level: 80 },
    { name: 'Machine Learning', icon: '🤖', level: 85 },
    { name: 'AI/LLMs', icon: '🧠', level: 80 },
    { name: 'SQL', icon: '🗄️', level: 75 },
    { name: 'Git', icon: '📋', level: 85 },
    { name: 'Java', icon: '☕', level: 70 },
    { name: 'HTML/CSS', icon: '🎨', level: 90 },
    { name: 'Tailwind CSS', icon: '💨', level: 85 }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My skill set
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-white font-semibold mb-3">{skill.name}</h3>
              
              {/* Skill Level Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                />
              </div>
              <span className="text-white/60 text-sm">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['ChromaDB', 'CrewAI', 'Knowledge Graphs', 'Advanced LLMs', 'Vector Databases'].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-white/80 text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
