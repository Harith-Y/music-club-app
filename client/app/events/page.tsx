'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/layout/AnimatedSection';
import EventCard from '../components/ui/EventCard';
import { pastEvents, upcomingEvents, Event } from '../data/events2024';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCalendarAlt, FaMusic, FaMicrophone, FaTrophy, FaChalkboardTeacher } from 'react-icons/fa';

type EventCategory = 'All' | 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops';

// Convert category to URL-friendly format
const categoryToHash = (category: EventCategory): string => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

// Convert hash to category
const hashToCategory = (hash: string): EventCategory => {
  const categoryMap: Record<string, EventCategory> = {
    'all': 'All',
    'performances': 'Performances',
    'open-mics': 'Open Mics',
    'competitions': 'Competitions',
    'workshops': 'Workshops'
  };
  
  return categoryMap[hash] || 'All';
};

const availableYears = [
  {
    year: '2024',
    title: '2024 Events',
    description: 'View all events from 2024, including performances, competitions, and workshops.',
    icon: <FaCalendarAlt className="text-2xl text-primary" />,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    year: '2025',
    title: '2025 Events',
    description: 'Explore upcoming and past events for 2025, featuring the latest musical activities.',
    icon: <FaCalendarAlt className="text-2xl text-primary" />,
    gradient: 'from-purple-500 to-pink-500'
  }
];

export default function EventsSelectionPage() {
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
            Choose a year to view all events, including performances, competitions, workshops, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {availableYears.map((year, index) => (
            <motion.div
              key={year.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/${year.year}events`}>
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

        {/* Quick Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaMusic className="text-xl text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{pastEvents.length + upcomingEvents.length}</p>
                <p className="text-gray-400">Total Events</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaMicrophone className="text-xl text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {pastEvents.filter(e => e.category === 'Open Mics').length}
                </p>
                <p className="text-gray-400">Open Mics</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaTrophy className="text-xl text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl font-bold text-white">
                  {pastEvents.filter(e => e.category === 'Competitions').length}
                </p>
                <p className="text-gray-400 truncate">Competitions</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaChalkboardTeacher className="text-xl text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl font-bold text-white">
                  {pastEvents.filter(e => e.category === 'Workshops').length}
                </p>
                <p className="text-gray-400 truncate">Workshops</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 