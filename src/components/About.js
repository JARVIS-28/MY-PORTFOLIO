import React from 'react';
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
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About me!
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        A software developer in the making. Bright, curious and always up to fix a new problem!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {aboutItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="text-4xl">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
