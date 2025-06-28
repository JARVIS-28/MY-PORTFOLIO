import { motion } from 'framer-motion'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import ThreeBackground from '../components/ThreeBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Janvii R V - Full Stack Developer & AI Engineer | Portfolio</title>
        <meta name="description" content="Computer Science student passionate about AI, ML, and building creative tech solutions. Explore my projects including emotion-based playlist generators, search engines, and more." />
        <meta name="keywords" content="Janvii R V, Full Stack Developer, AI Engineer, Machine Learning, React, Python, Portfolio, Web Development" />
        <meta name="author" content="Janvii R V" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.vercel.app/" />
        <meta property="og:title" content="Janvii R V - Full Stack Developer & AI Engineer" />
        <meta property="og:description" content="Computer Science student passionate about AI, ML, and building creative tech solutions." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-portfolio-url.vercel.app/" />
        <meta property="twitter:title" content="Janvii R V - Full Stack Developer & AI Engineer" />
        <meta property="twitter:description" content="Computer Science student passionate about AI, ML, and building creative tech solutions." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://your-portfolio-url.vercel.app/" />
      </Head>
      
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <ThreeBackground />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 10 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}
