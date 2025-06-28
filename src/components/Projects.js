import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "Emotion-Based Playlist Generator",
            description: "Generates playlists based on user emotions.",
            link: "https://github.com/JARVIS-28/EMOTION_BASED_PLAYLIST_GENERATOR",
        },
        {
            title: "Pixel Art Converter",
            description: "Converts images into pixel art.",
            link: "https://github.com/JARVIS-28/PIXEL-ART-CONVERTER",
        },
        {
            title: "Search Engine",
            description: "A custom search engine implementation.",
            link: "https://github.com/JARVIS-28/Search-Engine",
        },
        {
            title: "Streaming and Batch Processing Analysis",
            description: "Analyzes streaming and batch data.",
            link: "https://github.com/JARVIS-28/Streaming-And-Batch-Processing-Analysis",
        },
    ];

    return (
        <section id="projects" className="py-16 px-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            className="text-green-500 font-medium hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
