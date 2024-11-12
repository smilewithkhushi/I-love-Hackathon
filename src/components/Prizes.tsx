'use client';
import React from 'react';
import { motion } from 'framer-motion';

const prizes = [
    {
        title: 'First Place',
        description: 'Winner team from each city will be awarded. Every winning team member will receive exclusive goodies and official certificates. All winning teams will be invited for a grand felicitation at the Goa conference. ',
        prize: '$1500',
    },
    {
        title: 'Second Place',
        description: 'Runner Up Team from each city will be awarded. Every winning team member will receive exclusive goodies and official certificates. ',
        prize: '$1000',
    },
    {
        title: 'Third Place',
        description: 'Second Runner Up team from each city will be awarded. Every winning team member will receive exclusive goodies and official certificates. ',
        prize: '$500',
    },
];

const Prizes: React.FC = () => {
    return (
        <div className="w-full bg-black px-4 py-20 lg:px-24">

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-bold text-center my-8 text-white relative z-10"
            >
                <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
                    Prizes
                </h1>
            </motion.h2>

            <div className="grid align-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                {prizes.map((prize, index) => (
                    <motion.div
                        key={index} ß
                        className="bg-white flex flex-col item-center p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={`/assets/trophy.png`} alt={prize.title} className="w-35 h-50 object-fit mb-4 rounded-t-lg" />


                        <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-lg md:text-2xl">
                            {prize.title}
                        </h3>
                         <p className="text-gray-700 text-sm my-4 text-justify">{prize.description}</p>
                        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#6C0D00] textl-lg md:text-2xl font-bold">{prize.prize}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Prizes;