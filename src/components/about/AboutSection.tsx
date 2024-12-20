"use client";

import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Code, Users, Trophy, Rocket, Brain, Coffee } from "lucide-react";
const AboutSection = () => {
  const [] = useState<{
    id: number;
    src: string;
    alt: string;
    title: string;
  } | null>(null);
  useScroll();


  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code Innovation",
      description:
        "Build groundbreaking solutions using cutting-edge technologies",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Building",
      description:
        "Form diverse teams and collaborate with talented developers",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Learning Experience",
      description:
        "Access workshops, mentorship, and hands-on learning opportunities",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Awesome Prizes",
      description:
        "Win exciting prizes and get recognition for your innovations",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch Pad",
      description: "Turn your prototype into a real-world product",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Network & Fun",
      description: "Connect with industry experts while having a great time",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-blackpy-20 px-4 pt-16 pb-10 p-4 lg:p-16">
      {/* Main content */}
      <motion.div className="max-w-6xl mx-auto">
        {/* Header */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-center mb-8 text-white relative z-10"
        >
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
            About the Hackathon
          </h1>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-xl text-white text-justify md:text-center mx-auto">
            The I ❤️ Hackathon is a series of 24-hour hybrid hackathons across
            5+ cities in India, where developers will gather to build innovative
            blockchain solutions focused on governance, decentralized finance,
            gaming, real world assets, tokenization and more!
            <br />
            We’re bringing it to Chennai, Jaipur, Bhubaneswar, Indore, and Pune, allowing you to compete, create, and connect
            with the top minds in Web3.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col align-center items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#822d1f]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#822d1f]">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#822d1f]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
