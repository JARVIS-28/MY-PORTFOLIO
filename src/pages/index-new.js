import { motion } from 'framer-motion'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Janvii R V - Portfolio</title>
        <meta name="description" content="Computer Science student passionate about AI, ML, and building creative tech solutions!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <ParticleBackground />
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
