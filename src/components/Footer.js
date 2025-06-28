import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            className="text-center py-8 bg-gray-800 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <p className="mb-4">📧 Contact: <a href="mailto:janviirv@gmail.com" className="text-green-400 hover:underline">janviirv@gmail.com</a></p>
            <p className="mb-4">🌐 <a href="https://github.com/JARVIS-28" className="text-green-400 hover:underline">GitHub Profile</a></p>
            <p>💬 Always open to collaborations in AI/ML & automation tools</p>
        </motion.footer>
    );
}
