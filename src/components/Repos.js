import React from 'react';

export default function Repos() {
    return (
        <section id="repos" style={{ padding: '2rem' }}>
            <h2>Other Cool Repos</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>CD-LAB</h3>
                    <p>Compiler Design Lab programs and explanations.</p>
                    <a href="https://github.com/JARVIS-28/CD-LAB">View on GitHub</a>
                </div>
                <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 2rem)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3>Credit Card Fraud Detection</h3>
                    <p>ML system to flag fraudulent transactions.</p>
                    <a href="https://github.com/JARVIS-28/CREDIT-CARD-FRAUD-DETECTION">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}
