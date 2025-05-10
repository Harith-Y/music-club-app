'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUsers, FaUserFriends, FaMusic } from 'react-icons/fa';

const teamSections = [
  {
    id: '2024',
    title: '2024 Team',
    description: 'Meet the dedicated team members who led Music Club in 2024.',
    icon: <FaUsers className="text-2xl text-primary" />,
    gradient: 'from-blue-500 to-purple-500',
    href: '/2024team'
  },
  {
    id: '2025',
    title: '2025 Team',
    description: 'Get to know the current team members leading Music Club in 2025.',
    icon: <FaUserFriends className="text-2xl text-primary" />,
    gradient: 'from-purple-500 to-pink-500',
    href: '/2025team'
  }
];

const bandsSection = {
  id: 'bands',
  title: 'Internal Bands',
  description: 'Discover the talented bands that make up our Music Club community.',
  icon: <FaMusic className="text-2xl text-primary" />,
  gradient: 'from-pink-500 to-orange-500',
  href: '/internal-bands'
};

export default function TeamSelectionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-purple-400 to-secondary-400">
            Our Team
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the talented individuals who make Music Club possible, from our dedicated team members to our amazing bands.
          </p>
        </motion.div>

        {/* Team Sections */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400"
          >
            Team Members
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={section.href}>
                  <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          {section.icon}
                        </div>
                        <h2 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                          {section.title}
                        </h2>
                      </div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {section.description}
                      </p>
                      
                      {/* Hover Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-900 text-gray-400 text-sm">And</span>
          </div>
        </div>

        {/* Bands Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400"
          >
            Our Bands
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href={bandsSection.href}>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${bandsSection.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {bandsSection.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {bandsSection.title}
                      </h2>
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {bandsSection.description}
                    </p>
                    
                    {/* Hover Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 