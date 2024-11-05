'use client';

import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, MapPin, Calendar, Briefcase, Rocket, Trophy } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isInView && (
          <motion.span
            initial={{ value: from }}
            animate={{ value: to }}
            transition={{ duration }}
            // eslint-disable-next-line react/no-children-prop
            children={({ value }: { value: number }) => Math.floor(value)}
          />
        )}
      </motion.span>
    </motion.span>
  );
};

const HackathonStats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      label: "Registrations",
      value: 15000,
      suffix: "+",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      label: "Sponsors",
      value: 50,
      suffix: "+",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      label: "Events",
      value: 100,
      suffix: "+",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      label: "Cities",
      value: 75,
      suffix: "+",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      label: "Hackers",
      value: 5000,
      suffix: "+",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: "Projects",
      value: 1200,
      suffix: "+",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      label: "Prize Pool",
      value: 50000,
      prefix: "$",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-20 relative overflow-hidden" ref={containerRef}>
      {/* Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#822d1f]/10 to-transparent"
        style={{ y, opacity }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hackathon in Numbers
          </h2>
          <div className="w-24 h-1 bg-[#822d1f] mx-auto"/>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-[#111111] rounded-xl p-6 h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} text-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Stats */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
                  <span >{stat.prefix}</span>
                  <Counter from={0} to={stat.value} />
                  <span >{stat.suffix}</span>
                </h3>
                <p>{stat.label}</p>

                {/* Decorative Line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${stat.color} mt-4 rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default HackathonStats;