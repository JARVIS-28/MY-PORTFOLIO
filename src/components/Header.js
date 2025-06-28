import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="bg-green-500 text-white py-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold">Janvii R V</h1>
                <p className="mt-4 text-lg">Computer Science student passionate about AI, ML, and building creative tech solutions!</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100"
                >
                    Explore My Work
                </motion.button>
            </motion.div>
        </header>
    );
}
