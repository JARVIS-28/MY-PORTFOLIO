import React from 'react';

export default function Projects() {
    return (
        <section id="projects" style={{ padding: '2rem' }}>
            <h2>Featured Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Emotion-Based Playlist Generator</h3>
                    <p>Generates playlists based on user emotions.</p>
                    <a href="https://github.com/JARVIS-28/EMOTION_BASED_PLAYLIST_GENERATOR">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Pixel Art Converter</h3>
                    <p>Converts images into pixel art.</p>
                    <a href="https://github.com/JARVIS-28/PIXEL-ART-CONVERTER">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Search Engine</h3>
                    <p>A custom search engine implementation.</p>
                    <a href="https://github.com/JARVIS-28/Search-Engine">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Streaming and Batch Processing Analysis</h3>
                    <p>Analyzes streaming and batch data.</p>
                    <a href="https://github.com/JARVIS-28/Streaming-And-Batch-Processing-Analysis">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}
