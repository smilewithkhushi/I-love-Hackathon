'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Heart
} from 'lucide-react';

const StyledFooter = () => {
  // const quickLinks = [
  //   { name: "About", href: "#about" },
  //   { name: "Schedule", href: "#schedule" },
  //   { name: "Sponsors", href: "#sponsors" },
  //   { name: "Register", href: "#register" },
  //   { name: "FAQs", href: "#faqs" }
  // ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/INBMOfficial", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/india-blockchain-month-inbm/mycompany/", label: "LinkedIn" },

  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I ❤️ Hackathon
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Join us for 24 hours of innovation, creation and celebration of Web3 in India for a month.
            </motion.p>
            {/* <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ x: 5, color: '#ffffff' }}
              >
                <Mail className="w-5 h-5" />
                <span>hello@ihackathon.dev</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ x: 5, color: '#ffffff' }}
              >
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ x: 5, color: '#ffffff' }}
              >
                <MapPin className="w-5 h-5" />
                <span>Tech Hub, Innovation Street</span>
              </motion.div>
            </div> */}
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#822d1f] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span>© 2024 I ❤️ Hackathon. Made with</span>
              <Heart className="w-4 h-4 text-[#822d1f]" />
              <span>by Hackers</span>
            </motion.p>
            {/* <div className="mt-4 md:mt-0">
              <motion.a 
                href="#terms" 
                className="text-gray-400 hover:text-white mr-6"
                whileHover={{ x: 5 }}
              >
                Terms
              </motion.a>
              <motion.a 
                href="#privacy" 
                className="text-gray-400 hover:text-white"
                whileHover={{ x: 5 }}
              >
                Privacy
              </motion.a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="text-[20vw] font-bold leading-none text-transparent"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            fontFamily: 'sans-serif'
          }}
        >
          
          I  ❤️  HACKATHON
        </motion.div>
      </div>
    </footer>
  );
};

export default StyledFooter;