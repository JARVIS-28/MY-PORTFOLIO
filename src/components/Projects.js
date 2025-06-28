import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.9 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const projects = [
        {
            title: "Emotion-Based Playlist Generator",
            description: "A sophisticated music recommendation system that analyzes diary entries using NLP and sentiment analysis to create personalized playlists that guide users through emotional journeys. Features React frontend with Tailwind UI, FastAPI backend, and integrates Spotify API, ChromaDB vector database, and Ollama LLMs.",
            tech: ["Python", "FastAPI", "React", "TypeScript", "ChromaDB", "Ollama", "Spotify API", "NLP", "Machine Learning", "Sentence Transformers"],
            link: "https://github.com/JARVIS-28/EMOTION_BASED_PLAYLIST_GENERATOR",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
            icon: "🎵"
        },
        {
            title: "Infinite Dataverse Search Engine",
            description: "A modern multi-source search engine with React frontend and Flask backend. Integrates Reddit, Wikipedia, ArXiv, News APIs, and YouTube for comprehensive results. Features semantic search using Sentence Transformers, real-time particle animations, dark/light themes, and intelligent result ranking with TF-IDF scoring.",
            tech: ["React", "Flask", "Python", "JavaScript", "BeautifulSoup", "Sentence Transformers", "NLTK", "Reddit API", "NewsAPI", "DuckDuckGo API", "scikit-learn"],
            link: "https://github.com/JARVIS-28/Search-Engine",
            gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
            icon: "🔍"
        },
        {
            title: "Pixel Art Converter",
            description: "A desktop application built with Electron that transforms regular images into stylized pixel art. Features multiple pixelation styles (Basic, Color-Limited, Mosaic, ASCII, Isometric, Cartoon), live preview, retro-themed UI with Press Start 2P font, and Canvas API for image processing.",
            tech: ["Electron", "Node.js", "JavaScript", "HTML5", "CSS3", "Canvas API", "Image Processing"],
            link: "https://github.com/JARVIS-28/PIXEL-ART-CONVERTER",
            gradient: "linear-gradient(135deg, #f97316 0%, #22c55e 100%)",
            icon: "🎨"
        },
        {
            title: "Streaming and Batch Processing Analysis",
            description: "Comprehensive data analysis system that handles both real-time streaming data and batch processing for large datasets with visualization dashboards.",
            tech: ["Python", "Apache Kafka", "Data Analysis", "Visualization"],
            link: "https://github.com/JARVIS-28/Streaming-And-Batch-Processing-Analysis",
            gradient: "linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)",
            icon: "📊"
        },
        {
            title: "Credit Card Fraud Detection",
            description: "Machine learning system to detect fraudulent credit card transactions using ensemble methods and anomaly detection algorithms.",
            tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
            link: "https://github.com/JARVIS-28/CREDIT-CARD-FRAUD-DETECTION",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
            icon: "🛡️"
        },
        {
            title: "URL Shortener",
            description: "A Python-based URL shortening service with analytics, custom aliases, and expiration features. Built with FastAPI and PostgreSQL.",
            tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
            link: "https://github.com/JARVIS-28/URL-SHORTENER",
            gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            icon: "🔗"
        }
    ];

    return (
        <section id="projects" className="section section-alt" ref={ref}>
            <div className="container">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                    >
                        Check out some of my projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        A collection of projects showcasing my skills in AI, ML, and software development
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="cards-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -15,
                                scale: 1.03,
                                rotateY: 5,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="card project-card"
                            style={{
                                background: `linear-gradient(145deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 0, 51, 0.6) 100%)`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Animated background gradient on hover */}
                            <motion.div
                                className="card-bg-gradient"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: project.gradient,
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease'
                                }}
                                whileHover={{ opacity: 0.1 }}
                            />

                            {/* Animated icon */}
                            <motion.div
                                style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ 
                                    delay: index * 0.1 + 0.5, 
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ 
                                    scale: 1.2,
                                    rotate: 360,
                                    transition: { duration: 0.5 }
                                }}
                            >
                                {project.icon}
                            </motion.div>

                            <motion.h3
                                style={{ position: 'relative', zIndex: 1 }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                            >
                                {project.title}
                            </motion.h3>

                            <motion.p
                                style={{ position: 'relative', zIndex: 1 }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.9, duration: 0.6 }}
                            >
                                {project.description}
                            </motion.p>
                            
                            <motion.div 
                                className="tech-tags"
                                style={{ position: 'relative', zIndex: 1 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 1.1, duration: 0.6 }}
                            >
                                {project.tech.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className="tech-tag"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            delay: index * 0.1 + 1.3 + techIndex * 0.1,
                                            duration: 0.4,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        whileHover={{ 
                                            scale: 1.1,
                                            background: project.gradient,
                                            color: '#ffffff'
                                        }}
                                        style={{
                                            background: 'rgba(139, 92, 246, 0.2)',
                                            border: '1px solid rgba(139, 92, 246, 0.4)',
                                            borderRadius: '20px',
                                            padding: '0.5rem 1rem',
                                            margin: '0.25rem',
                                            display: 'inline-block',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                            
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: '1.5rem',
                                    padding: '0.75rem 1.5rem',
                                    background: project.gradient,
                                    borderRadius: '30px',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 1.5, duration: 0.6 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.span
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    View on GitHub
                                </motion.span>
                                <motion.svg 
                                    style={{ width: '16px', height: '16px' }} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 45 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </motion.svg>
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
