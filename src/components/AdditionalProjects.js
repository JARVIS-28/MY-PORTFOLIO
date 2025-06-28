import React from 'react';

export default function AdditionalProjects() {
    return (
        <section id="additional-projects" style={{ padding: '2rem' }}>
            <h2>Additional Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>URL Shortener</h3>
                    <p>A Python-based URL shortening service.</p>
                    <a href="https://github.com/JARVIS-28/URL-SHORTENER">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Parking Lot Finder</h3>
                    <p>A JavaScript project to locate parking lots.</p>
                    <a href="https://github.com/JARVIS-28/PARKING-LOT-FINDER">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Video Streaming Project</h3>
                    <p>A Python project for video streaming analysis.</p>
                    <a href="https://github.com/JARVIS-28/Video-Streaming-Project">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Syntax Validation Project</h3>
                    <p>A Python project for syntax validation.</p>
                    <a href="https://github.com/JARVIS-28/Syntax-Validation-Project">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Iverilog Vending Machine Project</h3>
                    <p>A Verilog project simulating a vending machine.</p>
                    <a href="https://github.com/JARVIS-28/Iverilog-Vending-Machine-Project">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}
