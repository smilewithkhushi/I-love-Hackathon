'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities = [
    { name: "Bengaluru", path: "/bengaluru" },
    { name: "Bhubaneswar", path: "/bhubaneswar" },
    { name: "Chennai", path: "/chennai" },
    { name: "Pune", path: "/pune" },
    { name: "Indore", path: "/indore" }
  ];

  // Set initial selected city based on URL path
  useEffect(() => {
    const currentCity = cities.find(city => pathname === city.path);
    if (currentCity) {
      setSelectedCity(currentCity.name);
    }
  }, [pathname]);

  const menuItems = [
    {
      name: "About",
      href: "/about",
      dropdown: null
    },
    {
      name: "Cities",
      href: "/cities",
      dropdown: cities
    },
    {
      name: "Themes",
      href: "/problem-statements",
      dropdown: null
    },
    {
      name: "Contact",
      href: "https://discord.com/invite/76zRubDkkj",
      dropdown: null
    }
  ];

  const handleCitySelect = (city: { name: string, path: string }) => {
    setSelectedCity(city.name);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    router.push(city.path);
  };

  function getDisplayText(item: { name: string; dropdown: { name: string; path: string; }[] | null; }) {
    if (item.name === "Cities") {
      if (selectedCity) {
        return (
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{selectedCity}</span>
            <span className="text-xs text-gray-400">(Change)</span>
          </div>
        );
      }
      return (
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>Cities</span>
        </div>
      );
    }
    return item.name;
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`backdrop-blur-xl bg-gradient-to-br from-[#822d1f] to-white-200 w-full px-4 fixed top-0 left-0 right-0 z-[100]`}
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
                    <div className="relative">
                      <button
                        className="text-gray-300 hover:text-white flex items-center space-x-1"
                        onClick={() => setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )}
                      >
                        {getDisplayText(item)}
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
                            className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-[150]"
                            style={{
                              filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.1))'
                            }}
                          >
                            {item.dropdown.map((city, idx) => (
                              <motion.button
                                key={idx}
                                className={`w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors ${
                                  selectedCity === city.name ? 'bg-gray-100 font-medium' : ''
                                }`}
                                onClick={() => handleCitySelect(city)}
                                whileHover={{ x: 5 }}
                              >
                                {city.name}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
                          {getDisplayText(item)}
                          <ChevronDown className={`w-4 h-4 transform transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2"
                            >
                              {item.dropdown.map((city, idx) => (
                                <motion.button
                                  key={idx}
                                  className={`w-full text-left py-2 text-gray-300 hover:text-white ${
                                    selectedCity === city.name ? 'font-medium' : ''
                                  }`}
                                  onClick={() => handleCitySelect(city)}
                                  whileHover={{ x: 5 }}
                                >
                                  {city.name}
                                </motion.button>
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
                  href="https://unstop.com/college-fests/i-love-hackathon-series-i-hackathon-285139"
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
        className="fixed top-0 left-0 right-0 h-1 bg-[#822d1f] origin-left z-[200]"
        style={{
          scaleX: useScroll().scrollYProgress
        }}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default NavigationBar;