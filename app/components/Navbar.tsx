'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FaMusic className="text-purple-600 text-2xl" />
            <span className="font-poppins font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
              Music Club <span className="text-purple-600">IIITDM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-4"
          >
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;