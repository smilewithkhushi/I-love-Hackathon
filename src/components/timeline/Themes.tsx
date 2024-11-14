'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import themes from '../../data/themes.js';
import { Lightbulb } from 'lucide-react';

interface Theme {
    id: number;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    gradient: string;
    description: string;
    topics: string[];
}

const ThemeCard = ({ theme, isSelected, onClick }: { theme: Theme; isSelected: boolean; onClick: () => void }) => {
    const Icon = theme.icon;

    return (
        <motion.div
            layout
            onClick={onClick}
            className={`cursor-pointer rounded-xl p-6 ${isSelected ? 'col-span-2 row-span-2' : 'col-span-1'
                } bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-colors`}
            whileHover={{ scale: isSelected ? 1 : 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div layout className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${theme.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                    <motion.h3 layout className="text-xl font-bold text-white mb-2">
                        {theme.title}
                    </motion.h3>

                    <AnimatePresence>
                        {isSelected && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-gray-300 mb-4">
                                    {theme.description}
                                </p>
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {theme.topics.map((topic, index) => (
                                        <motion.span
                                            key={topic}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`text-sm px-3 py-1 rounded-full bg-white/10
                                text-white/80 text-center`}
                                        >
                                            {topic}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};

const HackathonThemes = () => {
    const [selectedTheme, setSelectedTheme] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 lg:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto mb-16 text-center"
            >

                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                    }}
                >
                    <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                </motion.div>

                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-bold text-center mb-12 text-white relative z-10"
                >
                    <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
                        Hackathon Themes
                    </h1>
                    <p className="text-gray-400 my-8 max-w-2xl mx-auto">
                        Choose from our carefully selected themes and build something amazing.
                        Each theme offers unique challenges and opportunities to innovate.
                    </p>

                </motion.h2>

            </motion.div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
                {themes.map((theme) => (
                    <ThemeCard
                        key={theme.id}
                        theme={theme}
                        isSelected={selectedTheme === theme.id}
                        onClick={() => setSelectedTheme(selectedTheme === theme.id ? null : theme.id)}
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12 text-gray-400"
            >
                <p>Click on any theme to learn more about it</p>
            </motion.div>
        </div>
    );
};

export default HackathonThemes;