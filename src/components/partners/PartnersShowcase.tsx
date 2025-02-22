'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import partners from '../../data/partners';

const PartnersShowcase = () => {

  return (
    <div className="bg-[#0A0A0A] py-20 overflow-hidden">
      {/* Section Title */}
      <div className="relative">
   
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-center mb-8 text-white relative z-10"
        >
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
            Our Partners
          </h1>
        </motion.h2>

      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* First Row */}
        <div className="flex mb-12">
          <motion.div
            className="flex space-x-8 animate-scroll"
            animate={{
              x: [0, -1035],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <motion.div
                key={index}
                className="relative group w-[200px] h-[120px] bg-gray-800 hover:bg-[#F29244] rounded-xl flex items-center justify-center p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"
                />
                <Image
                width={200}
                height={80}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-w-[200px] max-h-[80px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex">
          <motion.div
            className="flex space-x-8 animate-scroll"
            animate={{
              x: [-1035, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <motion.div
                key={index}
                className="relative group w-[200px] h-[120px] bg-gray-700  hover:bg-[#F29244] rounded-xl flex items-center justify-center p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"
                />
                <Image
                width={200}
                height={80}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-w-[200px] max-h-[80px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-[20%] h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[20%] h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
      </div>

      {/* Red Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="w-48 h-1 bg-red-600 mx-auto mt-8"
      />
    </div>
  );
};

export default PartnersShowcase;