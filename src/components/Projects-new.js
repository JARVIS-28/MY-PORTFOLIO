import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "Emotion-Based Playlist Generator",
            description: "A music recommendation system that analyzes a user's diary entry and crafts a personalized playlist to guide them through an emotional journey. Uses NLP and sentiment analysis to understand emotions.",
            tech: ["Python", "NLP", "Machine Learning", "Spotify API"],
            link: "https://github.com/JARVIS-28/EMOTION_BASED_PLAYLIST_GENERATOR",
        },
        {
            title: "Pixel Art Converter",
            description: "Converts regular images into pixel art using advanced image processing algorithms. Features customizable pixel sizes and color palettes for artistic effects.",
            tech: ["Python", "OpenCV", "Image Processing", "PIL"],
            link: "https://github.com/JARVIS-28/PIXEL-ART-CONVERTER",
        },
        {
            title: "Search Engine",
            description: "A custom search engine implementation with web crawling, indexing, and ranking algorithms. Features include boolean queries and relevance scoring.",
            tech: ["Python", "Web Crawling", "Information Retrieval", "Algorithms"],
            link: "https://github.com/JARVIS-28/Search-Engine",
        },
        {
            title: "Streaming and Batch Processing Analysis",
            description: "Comprehensive data analysis system that handles both real-time streaming data and batch processing for large datasets with visualization dashboards.",
            tech: ["Python", "Apache Kafka", "Data Analysis", "Visualization"],
            link: "https://github.com/JARVIS-28/Streaming-And-Batch-Processing-Analysis",
        },
        {
            title: "Credit Card Fraud Detection",
            description: "Machine learning system to detect fraudulent credit card transactions using ensemble methods and anomaly detection algorithms.",
            tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
            link: "https://github.com/JARVIS-28/CREDIT-CARD-FRAUD-DETECTION",
        },
        {
            title: "URL Shortener",
            description: "A Python-based URL shortening service with analytics, custom aliases, and expiration features. Built with FastAPI and PostgreSQL.",
            tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
            link: "https://github.com/JARVIS-28/URL-SHORTENER",
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
                    <h2>Check out some of my projects</h2>
                    <p>A collection of projects showcasing my skills in AI, ML, and software development</p>
                </motion.div>

                <div className="cards-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="card project-card"
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="tech-tags">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
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
                                className="project-link"
                            >
                                <span>View on GitHub</span>
                                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
