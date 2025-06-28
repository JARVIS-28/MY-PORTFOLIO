import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    
    const projects = [
        {
            title: "Emotion-Based Playlist Generator",
            description: "A music recommendation system that analyzes a user's diary entry and crafts a personalized playlist to guide them through an emotional journey. Uses NLP and sentiment analysis to understand emotions.",
            tech: ["Python", "NLP", "Machine Learning", "Spotify API"],
            link: "https://github.com/JARVIS-28/EMOTION_BASED_PLAYLIST_GENERATOR",
            color: "from-pink-500 to-purple-500"
        },
        {
            title: "Pixel Art Converter",
            description: "Converts regular images into pixel art using advanced image processing algorithms. Features customizable pixel sizes and color palettes for artistic effects.",
            tech: ["Python", "OpenCV", "Image Processing", "PIL"],
            link: "https://github.com/JARVIS-28/PIXEL-ART-CONVERTER",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Search Engine",
            description: "A custom search engine implementation with web crawling, indexing, and ranking algorithms. Features include boolean queries and relevance scoring.",
            tech: ["Python", "Web Crawling", "Information Retrieval", "Algorithms"],
            link: "https://github.com/JARVIS-28/Search-Engine",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Streaming and Batch Processing Analysis",
            description: "Comprehensive data analysis system that handles both real-time streaming data and batch processing for large datasets with visualization dashboards.",
            tech: ["Python", "Apache Kafka", "Data Analysis", "Visualization"],
            link: "https://github.com/JARVIS-28/Streaming-And-Batch-Processing-Analysis",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Credit Card Fraud Detection",
            description: "Machine learning system to detect fraudulent credit card transactions using ensemble methods and anomaly detection algorithms.",
            tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
            link: "https://github.com/JARVIS-28/CREDIT-CARD-FRAUD-DETECTION",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "URL Shortener",
            description: "A Python-based URL shortening service with analytics, custom aliases, and expiration features. Built with FastAPI and PostgreSQL.",
            tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
            link: "https://github.com/JARVIS-28/URL-SHORTENER",
            color: "from-teal-500 to-blue-500"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Check out some of my projects
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        A collection of projects showcasing my skills in AI, ML, and software development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                            
                            <div className="relative p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-white/70 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    <span>View on GitHub</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </motion.a>
                            </div>
                            
                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
