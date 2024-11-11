"use client";

import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Code, Users, Trophy, Rocket, Brain, Coffee } from "lucide-react";
import Image from "next/image";

const AboutBlockonSection = () => {
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
    <div className="py-20 px-4 pt-16 pb-10 p-4 lg:p-16">
      {/* Main content */}
      <motion.div className="max-w-6xl mx-auto">
        {/* Header */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-center mb-12 text-white relative z-10"
        >
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
            About the Organizers
          </h1>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row gap-8 justify-around mb-16"
        >
        <div className="w-full" >
        <Image src="/assets/partners/blockon.png" 
        alt="BlockOn Ventures" 
        width={160}
        height={160}

        className="w-40 h-40 object-fit mx-auto" />
        </div>
          
          <div>
          <p className="text-sm md:text-lg text-white text-justify">

            BlockOn Ventures is a leading blockchain-focused venture capital firm with a strong presence across Asia, including Singapore, India (Gift City), Thailand, and Dubai. BlockOn is dedicated to advancing the blockchain ecosystem through strategic investments, ecosystem partnerships, and industry events. With a mission to drive impactful growth, BlockOn established the Blockchain Center in Malaysia to provide vital resources and support for blockchain and cryptocurrency ventures.
            <br />
            As organizers of prominent events like Malaysia Blockchain Week, India Blockchain Week, and the Global Blockchain Leadership Awards (GLOBLA), BlockOn plays a pivotal role in fostering blockchain innovation and collaboration worldwide. Through initiatives like India Blockchain Month, BlockOn continues to champion the blockchain community’s potential to transform industries and drive technological progress across the region.
          </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AboutBlockonSection;
