'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaImages, FaVideo } from 'react-icons/fa';
import Link from 'next/link';
import DriveButton from '../components/sections/DriveButton';
import VideoSubmissionButton from '../components/sections/VideoSubmissionButton';

const availableYears = [
  {
    year: '2024',
    title: '2024 Gallery',
    description: 'View all photos and videos from 2024 events, performances, and workshops.',
    icon: <FaImages className="text-2xl text-primary" />,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    year: '2025',
    title: '2025 Gallery',
    description: 'Explore photos and videos from 2025 events and activities.',
    icon: <FaVideo className="text-2xl text-primary" />,
    gradient: 'from-purple-500 to-pink-500'
  }
];

export default function GallerySelectionPage() {
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
            Select Year
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose a year to view all photos and videos from our events, performances, and workshops.
          </p>
        </motion.div>

        {/* Video Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          <DriveButton />
          <VideoSubmissionButton />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {availableYears.map((year, index) => (
            <motion.div
              key={year.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/${year.year}gallery`}>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${year.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {year.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {year.title}
                      </h2>
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {year.description}
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
    </main>
  );
} 