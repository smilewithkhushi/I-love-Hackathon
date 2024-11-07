'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Events",
      dropdown: [
        { name: "Schedule", href: "#schedule" },
        { name: "Workshops", href: "#workshops" },
        { name: "Speakers", href: "#speakers" }
      ]
    },
    {
      name: "Sponsors",
      href: "#sponsors"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`backdrop-blur-xl bg-gradient-to-b from-[#822d1f] to-green-900 w-full px-4 z-50 transition-all duration-300`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="text-xl font-bold text-white">
                I ❤️ Hackathon
              </motion.span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button
                      className="text-gray-300 hover:text-white flex items-center space-x-1"
                      onClick={() => setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <motion.a
                      href={item.href}
                      className="text-gray-300 hover:text-white"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.name}
                    </motion.a>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 rounded-xl backdrop-blur-md py-2 shadow-xl"
                      >
                        {item.dropdown.map((dropdownItem, idx) => (
                          <motion.a
                            key={idx}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#822d1f]/20"
                            whileHover={{ x: 5 }}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Register Button */}
              <motion.a
                href="#register"
                className="px-6 py-2 rounded-full bg-[#822d1f] text-white font-medium hover:bg-[#822d1f]/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-md"
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <button
                          className="w-full flex items-center justify-between text-gray-300 hover:text-white"
                          onClick={() => setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transform transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="pl-4 space-y-2"
                            >
                              {item.dropdown.map((dropdownItem, idx) => (
                                <motion.a
                                  key={idx}
                                  href={dropdownItem.href}
                                  className="block text-gray-400 hover:text-white"
                                  whileHover={{ x: 5 }}
                                >
                                  {dropdownItem.name}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        href={item.href}
                        className="block text-gray-300 hover:text-white"
                        whileHover={{ x: 5 }}
                      >
                        {item.name}
                      </motion.a>
                    )}
                  </div>
                ))}
                
                {/* Mobile Register Button */}
                <motion.a
                  href="#register"
                  className="block w-full text-center px-6 py-3 rounded-full bg-[#822d1f] text-white font-medium hover:bg-[#822d1f]/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.8 }}
                >
                  Register Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#822d1f] origin-left z-50"
        style={{
          scaleX: useScroll().scrollYProgress
        }}
      />
    </>
  );
};

export default NavigationBar;