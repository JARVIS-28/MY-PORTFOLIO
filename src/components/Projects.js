import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "Emotion-Based Playlist Generator",
            description: "A sophisticated music recommendation system that analyzes diary entries using NLP and sentiment analysis to create personalized playlists that guide users through emotional journeys. Features React frontend with Tailwind UI, FastAPI backend, and integrates Spotify API, ChromaDB vector database, and Ollama LLMs.",
            tech: ["Python", "FastAPI", "React", "TypeScript", "ChromaDB", "Ollama", "Spotify API", "NLP", "Machine Learning", "Sentence Transformers"],
            link: "https://github.com/JARVIS-28/EMOTION_BASED_PLAYLIST_GENERATOR",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            icon: "🎵"
        },
        {
            title: "Infinite Dataverse Search Engine",
            description: "A modern multi-source search engine with React frontend and Flask backend. Integrates Reddit, Wikipedia, ArXiv, News APIs, and YouTube for comprehensive results. Features semantic search using Sentence Transformers, real-time particle animations, dark/light themes, and intelligent result ranking with TF-IDF scoring.",
            tech: ["React", "Flask", "Python", "JavaScript", "BeautifulSoup", "Sentence Transformers", "NLTK", "Reddit API", "NewsAPI", "DuckDuckGo API", "scikit-learn"],
            link: "https://github.com/JARVIS-28/Search-Engine",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            icon: "🔍"
        },
        {
            title: "Pixel Art Converter",
            description: "A desktop application built with Electron that transforms regular images into stylized pixel art. Features multiple pixelation styles (Basic, Color-Limited, Mosaic, ASCII, Isometric, Cartoon), live preview, retro-themed UI with Press Start 2P font, and Canvas API for image processing.",
            tech: ["Electron", "Node.js", "JavaScript", "HTML5", "CSS3", "Canvas API", "Image Processing"],
            link: "https://github.com/JARVIS-28/PIXEL-ART-CONVERTER",
            gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
            icon: "🎨"
        },
        {
            title: "Streaming and Batch Processing Analysis",
            description: "Comprehensive data analysis system that handles both real-time streaming data and batch processing for large datasets with visualization dashboards.",
            tech: ["Python", "Apache Kafka", "Data Analysis", "Visualization"],
            link: "https://github.com/JARVIS-28/Streaming-And-Batch-Processing-Analysis",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            icon: "📊"
        },
        {
            title: "Credit Card Fraud Detection",
            description: "Machine learning system to detect fraudulent credit card transactions using ensemble methods and anomaly detection algorithms.",
            tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
            link: "https://github.com/JARVIS-28/CREDIT-CARD-FRAUD-DETECTION",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
            icon: "🛡️"
        },
        {
            title: "URL Shortener",
            description: "A Python-based URL shortening service with analytics, custom aliases, and expiration features. Built with FastAPI and PostgreSQL.",
            tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
            link: "https://github.com/JARVIS-28/URL-SHORTENER",
            gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
            icon: "🔗"
        }
    ];

    return (
        <section id="projects" className="section section-alt">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2>Featured Projects</h2>
                    <p>A collection of projects showcasing my skills in AI, ML, and full-stack development</p>
                </motion.div>

                <div className="cards-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -15, 
                                scale: 1.03,
                                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)",
                                transition: { duration: 0.3 }
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
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ 
                                    delay: index * 0.1 + 0.5, 
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {project.icon}
                            </motion.div>

                            <motion.h3
                                style={{ 
                                    position: 'relative', 
                                    zIndex: 1,
                                    background: project.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '1rem',
                                    fontSize: '1.4rem',
                                    fontWeight: '700'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {project.title}
                            </motion.h3>

                            <motion.p
                                style={{ 
                                    position: 'relative', 
                                    zIndex: 1,
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {project.description}
                            </motion.p>
                            
                            <motion.div 
                                className="tech-tags"
                                style={{ 
                                    position: 'relative', 
                                    zIndex: 1,
                                    marginBottom: '2rem'
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {project.tech.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className="tech-tag"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            delay: index * 0.1 + 0.6 + techIndex * 0.05,
                                            duration: 0.4,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: 'rgba(139, 92, 246, 0.3)',
                                            borderColor: '#8b5cf6'
                                        }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(139, 92, 246, 0.3)',
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            margin: '0.25rem',
                                            display: 'inline-block',
                                            backdropFilter: 'blur(10px)',
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
                                    padding: '0.75rem 1.5rem',
                                    background: project.gradient,
                                    borderRadius: '30px',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                                viewport={{ once: true }}
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
                                    View Project
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
                </div>
            </div>
        </section>
    );
}
