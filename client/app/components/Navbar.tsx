'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const pathname = usePathname();

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
    { name: 'About', href: pathname === '/' ? '#about' : '/#about' },
    { name: 'Events', href: pathname === '/' ? 'events' : '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: pathname === '/' ? '#contact' : '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <FaMusic className="text-primary-400 text-2xl" />
            <span className="text-xl font-bold text-white">Music Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Team Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsTeamDropdownOpen(true)}
              onMouseLeave={() => setIsTeamDropdownOpen(false)}
            >
              <button className="text-gray-300 hover:text-white transition-colors duration-300">
                Team
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isTeamDropdownOpen ? 1 : 0, y: isTeamDropdownOpen ? 0 : 10 }}
                className="absolute top-full left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-xl py-2"
              >
                <Link
                  href="/bands"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                >
                  Internal Bands
                </Link>
                <Link
                  href="/2024team"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                >
                  2024 Team
                </Link>
                <Link
                  href="/2025team"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                >
                  2025 Team
                </Link>
              </motion.div>
            </div>

            <Link
              href={navLinks[4].href}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="py-2">
              <Link
                href="/bands"
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                Internal Bands
              </Link>
              <Link
                href="/2024team"
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                2024 Team
              </Link>
              <Link
                href="/2025team"
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                2025 Team
              </Link>
            </div>
            <Link
              href={navLinks[4].href}
              className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;