"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Award, MapPin, Briefcase, Rocket, Trophy } from "lucide-react";

const CounterComponent = ({
  end,
  duration = 10,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number | null) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime! - startTime!) / (duration * 1000),
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span ref={ref} className="inline-flex items-center justify-center">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const HackathonStats = () => {
  const stats = [
    {
      icon: <MapPin className="w-8 h-8" />,
      label: "Cities",
      value: 75,
      suffix: "+",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Registrations",
      value: 3000,
      suffix: "+",
      color: "from-blue-500 to-purple-500",
    },

    {
      icon: <Award className="w-8 h-8" />,
      label: "Projects",
      value: 1200,
      suffix: "+",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      label: "Sponsors",
      value: 10,
      suffix: "+",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      label: "Hackers",
      value: 1500,
      suffix: "+",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      label: "Prize Pool",
      value: 5000,
      prefix: "$",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] py-10 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-center mb-8 text-white relative z-10"
      >
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
          Our Highlights
        </h1>
      </motion.h2>
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-content "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#111111] rounded-xl p-6 h-full relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Counter */}
                <h3 className="text-xl md:text-4xl font-bold text-white mb-2">
                  <CounterComponent
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </h3>
                <p className="text-gray-400">{stat.label}</p>

                {/* Animated Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`h-1 bg-gradient-to-r ${stat.color} mt-4 rounded-full`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HackathonStats;
