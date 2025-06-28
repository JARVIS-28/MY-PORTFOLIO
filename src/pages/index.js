import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Repos from '../components/Repos';
import AdditionalProjects from '../components/AdditionalProjects';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <About />
            <TechStack />
            <Projects />
            <Repos />
            <AdditionalProjects />
            <Footer />
        </div>
    );
}
