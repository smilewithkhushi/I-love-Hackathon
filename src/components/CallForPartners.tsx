"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Brain, Check, ExternalLink } from "lucide-react";

interface JoinCardProps {
  title: string;
  role: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
}

const JoinCard: React.FC<JoinCardProps> = ({
  title,
  role,
  benefits,
  buttonText,
  buttonLink,
  icon: Icon,
  gradient,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden`}
    >
      {/* Card Header */}
      <div className={`p-6 ${gradient} text-white`}>
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-lg text-white/80">{role}</p>
      </div>

      {/* Benefits List */}
      <div className="p-6 space-y-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-sm md:text-md">{benefit}</p>
          </motion.div>
        ))}
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0">
        <motion.a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button className="text-sm md:text-md w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors group">
            <span>{buttonText}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.a>
      </div>
    </motion.div>
  );
};

const CallForPartners = () => {
  const cards = [
    {
      title: "Sponsors",
      role: "Power the Innovation",
      icon: Building2,
      gradient: "bg-gradient-to-r from-purple-600 to-blue-600",
      benefits: [
        "Brand visibility to 10,000+ participants",
        "Access to talent pool of 5000+ developers",
        "Product showcase opportunities",
        "Speaking slots at keynote sessions",
        "Exclusive hiring opportunities",
      ],
      buttonText: "Become a Sponsor",
      buttonLink: "mailto:ilovehackathonconnect@gmail.com",
    },
    {
      title: "Community Partners",
      role: "Grow Together",
      icon: Users,
      gradient: "bg-gradient-to-r from-[#822d1f] to-orange-600",
      benefits: [
        "Co-branding opportunities",
        "Co-hosting opportunities",
        "Community network expansion",
        "Joint promotional activities",
        "Exclusive access to all events",
      ],
      buttonText: "Partner With Us",
      buttonLink: "https://lu.ma/nr8m64pl",
    },
    {
      title: "Mentors",
      role: "Guide the Future",
      icon: Brain,
      gradient: "bg-gradient-to-r from-green-600 to-teal-600",
      benefits: [
        "Share your expertise",
        "Network with industry experts",
        "Personal brand building",
        "Recognition and rewards",
        "Impact young innovators",
      ],
      buttonText: "Join as Mentor",
      buttonLink: "https://lu.ma/zwffpc16",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-center mb-8 text-white relative z-10"
      >
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
          Join our Innovation Journey
        </h1>
      </motion.h2>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-sm md:text-xl max-w-4xl mx-auto">
            Be part of India&apos;s largest hackathon series and help shape the
            future of technology
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <JoinCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallForPartners;
