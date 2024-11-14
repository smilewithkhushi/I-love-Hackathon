"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const prizes = [
    {
        title: 'First Place',
        description: 'Winner team from each city will be awarded. Every winning team member will receive exclusive goodies and official certificates. All winning teams will be invited for a grand felicitation at the Goa conference.',
        prize: '$1500',
        icon: Trophy,
        gradient: 'from-yellow-300 via-yellow-400 to-yellow-500',
        shadowColor: 'shadow-yellow-500/20',
        position: '1st'
    },
    {
        title: 'Second Place',
        description: 'Runner Up Team from each city will be awarded. Every winning team member will receive exclusive goodies and official certificates.',
        prize: '$1000',
        icon: Award,
        gradient: 'from-gray-300 via-gray-400 to-gray-500',
        shadowColor: 'shadow-gray-500/20',
        position: '2nd'
    },
    {
        title: 'Third Place',
        description: 'Second Runner Up team from each city will be awarded. Every winning team member will receive exclusive goodies and official certificates.',
        prize: '$500',
        icon: Medal,
        gradient: 'from-amber-500 via-amber-600 to-amber-700',
        shadowColor: 'shadow-amber-500/20',
        position: '3rd'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const Prizes = () => {
    return (
        <div className="w-full min-h-screen bg-black px-4 py-20 lg:px-24 relative overflow-hidden">
            {/* Background decoration */}
         
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-bold text-center mb-12 text-white relative z-10"
            >
                <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
                    Prizes and Rewards
                </h1>
                <p className="text-gray-400 my-8 max-w-2xl mx-auto">
                    Compete for exciting prizes and get recognized for your innovation
                </p>

            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10"
            >
                {prizes.map((prize, index) => {
                    const Icon = prize.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`bg-white/5 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center 
                                      border border-white/10 ${prize.shadowColor} shadow-xl
                                      ${index === 0 ? 'md:scale-110 md:-mt-4' : ''}`}
                        >
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${prize.gradient} 
                                          flex items-center justify-center mb-6 shadow-lg`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>

                            <span className={`text-sm font-medium px-4 py-1 rounded-full 
                                           bg-gradient-to-r ${prize.gradient} text-white mb-4`}>
                                {prize.position}
                            </span>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                {prize.title}
                            </h3>

                            <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 
                                          bg-clip-text text-transparent mb-4">
                                {prize.prize}
                            </div>

                            <p className="text-gray-400 text-center text-sm leading-relaxed">
                                {prize.description}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Prizes;