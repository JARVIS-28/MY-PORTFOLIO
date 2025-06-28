import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section
            id="about"
            className="py-16 px-8 bg-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <div className="space-y-4 text-lg">
                <p>🎓 B.Tech CSE @ PES University</p>
                <p>🤖 Passionate about Generative AI, Machine Learning, and building intelligent tools</p>
                <p>🛠️ I love turning ideas into real-world applications</p>
                <p>📚 Currently diving deep into LLMs, ChromaDB, CrewAI, and Knowledge Graphs</p>
            </div>
        </motion.section>
    );
}
