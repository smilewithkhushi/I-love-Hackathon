'use client';

import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Clock, Globe, Monitor } from 'lucide-react';

interface HackathonDetails {
  offlineModeDesc: ReactNode;
  onlineModeDesc: ReactNode;
  description: ReactNode;
  discordLink: string;
  demoPPTLink: string;
  ideaSubmissionLink: string;
  registrationLink: string;
  name: string;
  date: string;
  venue: string;
  format: {
    offline: {
      available: boolean;
      criteria: string[];
    };
    online: {
      available: boolean;
      criteria: string[];
    };
  };
  prizePool: {
    total: string;
    breakdown: {
      position: string;
      prize: string;
    }[];
  };
  timeline: {
    event: string;
    date: string;
  }[];
  eligibility: string[];
  teamSize: {
    min: number;
    max: number;
  };
}

const HackathonCard = ({ details }: { details: HackathonDetails }) => {
  const [activeTab, setActiveTab] = useState<'offline' | 'online'>('offline');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="max-w-4xl mx-auto p-12 rounded-2xl bg-[#ede3e1] text-black shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="flex flex-col justify-between items-start gap-4 md:items-center mb-10">
        <motion.h1
          className="text-4xl font-bold text-[#822d1f] md:mb-0"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
        >
          {details.name}
        </motion.h1>

        <motion.div
          className="flex items-center space-x-2 text-gray-600"
          initial={{ x: 20 }}
          animate={{ x: 0 }}
        >
          <Calendar className="w-5 h-5" />
          <span>{details.date}</span>
        </motion.div>
      </div>


      <motion.div
        className="p-2 w-full rounded-xl text-justify rounded-lg "
        whileHover={{ scale: 1.02 }}>
        <p>
          {details.description}
        </p>
      </motion.div>

      <motion.div
        className="p-2 my-2 w-full rounded-xl text-justify rounded-lg "
        whileHover={{ scale: 1.02 }}>
        <p>
          {details.onlineModeDesc}
        </p>
      </motion.div>

      <motion.div
        className="p-2 mb-6  w-full rounded-xl text-justify rounded-lg "
        whileHover={{ scale: 1.02 }}>
        <p>
          {details.offlineModeDesc}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">


        <motion.div
          className="p-4 rounded-xl bg-gray-50"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="w-5 h-5 text-[#822d1f]" />
            <h3 className="font-semibold">Venue</h3>
          </div>
          <p>{details.venue}</p>
        </motion.div>

        <motion.div
          className="p-4 rounded-xl bg-gray-50"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-[#822d1f]" />
            <h3 className="font-semibold">Team Size</h3>
          </div>
          <p>{details.teamSize.min}-{details.teamSize.max} members</p>
        </motion.div>
      </div>

      {/* Action Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 my-16">
        <motion.a
          href={details.registrationLink}
          className="flex items-center justify-center space-x-2 bg-[#822d1f] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#9a382a] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Users className="w-5 h-5" />
          <span>Click here to Register</span>
        </motion.a>

        <motion.a
          href={details.ideaSubmissionLink}
          className="flex items-center justify-center space-x-2 bg-[#822d1f] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#9a382a] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Globe className="w-5 h-5" />
          <span>Submit your Idea</span>
        </motion.a>

        <motion.a
          href={details.demoPPTLink}
          className="flex items-center justify-center space-x-2 border-2 border-[#822d1f] text-[#822d1f] py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#822d1f] hover:text-white transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Monitor className="w-5 h-5" />
          <span>Click here for Demo PPT</span>
        </motion.a>

        <motion.a
          href={details.discordLink}
          className="flex items-center justify-center space-x-2 border-2 border-[#822d1f] text-[#822d1f] py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#822d1f] hover:text-white transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <span>Join Discord Server</span>
        </motion.a>
      </div>

      {/* Participation format section */}
      <div className="mb-12">
        <div className="flex space-x-4 mb-4">
          <motion.button
            className={`px-4 py-2 rounded-full ${activeTab === 'offline' ? 'bg-[#822d1f] text-white' : 'bg-gray-100'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('offline')}
          >
            <div className="flex items-center space-x-2">
              <Monitor className="w-4 h-4" />
              <span>Offline Mode</span>
            </div>
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-full ${activeTab === 'online' ? 'bg-[#822d1f] text-white' : 'bg-gray-100'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('online')}
          >
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Online Mode</span>
            </div>
          </motion.button>
        </div>

        <motion.div
          className="bg-gray-50 p-4 rounded-xl"
          initial={false}
          animate={{ height: 'auto' }}
        >
          <h3 className="font-semibold mb-2">Participation Criteria:</h3>
          <ul className="list-disc list-inside space-y-1">
            {details.format[activeTab].criteria.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Prize pool section */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <Trophy className="w-6 h-6 text-[#822d1f]" />
          <h2 className="text-xl font-bold">Prize Pool: {details.prizePool.total}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.prizePool.breakdown.map((prize, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-gray-50 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold mb-2">{prize.position}</h3>
              <p className="text-[#822d1f] font-bold">{prize.prize}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* expanded section */}
      <motion.button
        className="w-full py-4 my-8 text-lg shadow-md rounded-xl px-6 text-[#822d1f] font-medium"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '↑ Show Less ↑ ' : '↓   Show More Details   ↓ '}
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden "
      >
        <div className="py-4 space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#822d1f]" />
              <span>Timeline</span>
            </h3>
            <div className="space-y-2">
              {details.timeline.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 rounded bg-gray-50">
                  <span>{item.event}</span>
                  <span className="text-gray-600">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Eligibility Criteria</h3>
            <ul className="list-disc list-inside space-y-1">
              {details.eligibility.map((criterion, index) => (
                <li key={index}>{criterion}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HackathonCard;