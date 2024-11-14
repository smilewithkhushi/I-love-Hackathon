'use client';

import React from 'react';
import { motion } from 'framer-motion';
import day_one from '../../data/day_one_schedule';
import day_two from '../../data/day_two_schedule';
import { Clock } from 'lucide-react';

interface Event {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TimelineEvent = ({ event, index }: { event: Event; index: number }) => {
  const { time, title, description, icon: Icon, color } = event;

  return (
    <motion.div
      className="flex gap-4 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline line */}
      {index !== day_one.length - 1 && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200" />
      )}

      {/* Icon */}
      <div className={`relative z-10 w-12 h-12 rounded-full ${color} flex items-center justify-center shrink-0`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <motion.div
        className="pb-8"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-sm font-semibold text-gray-500">{time}</span>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </motion.div>
    </motion.div>
  );
};


const Schedule = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-center mb-8 text-white relative z-10"
      >
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
          Hackathon Schedule
        </h1>
      </motion.h2>


      <div
        className='flex flex-row gap-4 md:gap-24'>
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className='text-lg md:text-2xl font-bold text-white my-6'>Day 1</h1>
          {day_one.map((event, index) => (
            <TimelineEvent key={event.time} event={event} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          <h1 className='text-lg md:text-2xl font-bold text-white my-6'>Day 2</h1>
          {day_two.map((event, index) => (
            <TimelineEvent key={event.time} event={event} index={index} />
          ))}
        </motion.div>

      </div>


      <motion.div
        className="text-center mt-8 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Clock className="inline-block w-4 h-4 mr-2" />
        All times are in local timezone
      </motion.div>
    </div>
  );
};

export default Schedule;
