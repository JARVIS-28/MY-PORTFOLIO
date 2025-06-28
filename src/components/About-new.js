import { motion } from 'framer-motion';

export default function About() {
    const aboutItems = [
        {
            icon: "🎓",
            title: "Education",
            description: "B.Tech CSE @ PES University"
        },
        {
            icon: "🤖",
            title: "Current Focus",
            description: "I am writing a research paper about home-based physiotherapy based on a project I worked on during my internship at the PES University Research Centre."
        },
        {
            icon: "📚",
            title: "Final Year Project",
            description: "Working on a group-based recommendation system focused on student research community. Busy researching and cleaning data..."
        },
        {
            icon: "🧠",
            title: "AI Journey",
            description: "Recently working with LLMs and exploring their capacities and limitations. Currently diving deep into ChromaDB, CrewAI, and Knowledge Graphs."
        },
        {
            icon: "🎵",
            title: "Non-technical Interests",
            description: "Film enthusiast + Music lover. So much that I made a playlist recommender based on a user's diary entry :P"
        }
    ]

    return (
        <section id="about" className="section section-alt">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2>About me!</h2>
                    <p>A software developer in the making. Bright, curious and always up to fix a new problem!</p>
                </motion.div>

                <div className="cards-grid">
                    {aboutItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="card"
                        >
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div className="icon">{item.icon}</div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
