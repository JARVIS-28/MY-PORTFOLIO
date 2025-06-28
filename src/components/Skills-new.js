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
    { name: 'Data Analysis', icon: '📊', level: 85 }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2>My skill set</h2>
          <p>Technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="skill-card"
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              
              <div className="skill-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className="skill-progress"
                />
              </div>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: '4rem' }}
        >
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '1rem' }}>Currently Learning</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {['ChromaDB', 'CrewAI', 'Knowledge Graphs', 'Advanced LLMs', 'Vector Databases'].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="tech-tag"
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
