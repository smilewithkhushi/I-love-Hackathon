"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import events from "@/data/events";

const HackathonTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#822d1f]/5 to-green-900/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-center mb-8 text-white relative z-10"
      >
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f72c11] to-[#13A326] font-bold text-2xl md:text-5xl">
          Timeline
        </h1>
      </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-20"
        >
          <p className="text-sm md:text-lg text-gray-200 mx-auto">
            Join us as we travel across Indian tech hubs, bringing innovation
            and excitement to five major cities.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex min-w-max md:justify-center space-x-4 p-4">
            {events.map((event, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedEvent(index)}
                className={`relative px-6 py-3 rounded-full ${
                  selectedEvent === index
                    ? "bg-[#822d1f] text-white"
                    : "bg-[#111111] text-gray-300 hover:bg-[#822d1f]/20"
                } transition-all focus:outline-none`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm md:text-lg relative z-10 font-medium">{event.city}</span>
                {index < events.length - 1 && (
                  <motion.div
                    className="absolute top-1/2 -right-4"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Image Section */}
            <motion.div
              className="relative rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={events[selectedEvent].image}
                alt={events[selectedEvent].city}
                layout="responsive"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <div className="flex items-center space-x-2 text-white mb-2">
                  <Calendar className="w-5 h-5" />
                  <span>{events[selectedEvent].date}</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span>{events[selectedEvent].timing}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Details Section */}
            <div className="bg-[#111111] rounded-xl p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {events[selectedEvent].city}
                </h3>
                <div className="flex items-start space-x-2 text-gray-400 mb-6">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>{events[selectedEvent].venue}</span>
                </div>
                <p className="text-gray-400 mb-8">
                  {events[selectedEvent].description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-medium flex items-center space-x-2 ${
                  events[selectedEvent].registrationOpen
                    ? "bg-[#822d1f] text-white"
                    : "bg-gray-800 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!events[selectedEvent].registrationOpen}
                  onClick={() => {
                  if (events[selectedEvent].registrationOpen) {
                    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfwPRAaudSzJvij7C7DcyLj4FwsLMVWkURtdHhQ_gSPjHVTMw/viewform?pli=1";
                  }
                  }}
                >
                  <span>
                  {events[selectedEvent].registrationOpen
                    ? "Register Now"
                    : "Coming Soon"}
                  </span>
                  {events[selectedEvent].registrationOpen && (
                  <ArrowRight className="w-5 h-5" />
                  )}
                </motion.button>

              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Timeline Progress */}
        <motion.div
          className="mt-12 h-2 bg-[#111111] rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-[#822d1f]"
            initial={{ width: "0%" }}
            animate={{
              width: `${((selectedEvent + 1) / events.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HackathonTimeline;
