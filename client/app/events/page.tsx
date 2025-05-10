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
              <div>
                <p className="text-2xl font-bold text-white">
                  {pastEvents.filter(e => e.category === 'Competitions').length}
                </p>
                <p className="text-gray-400">Competitions</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaChalkboardTeacher className="text-xl text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {pastEvents.filter(e => e.category === 'Workshops').length}
                </p>
                <p className="text-gray-400">Workshops</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export function EventsPage() {
  // Initialize state from URL hash
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      return hash ? hashToCategory(hash) : 'All';
    }
    return 'All';
  });

  const categories: EventCategory[] = ['All', 'Performances', 'Open Mics', 'Competitions', 'Workshops'];

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const category = hashToCategory(hash);
        setSelectedCategory(category);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update URL hash when category changes
  const handleCategoryChange = (category: EventCategory) => {
    setSelectedCategory(category);
    const hash = categoryToHash(category);
    window.location.hash = hash;
  };

  const filteredEvents = (activeTab === 'upcoming' ? upcomingEvents : pastEvents).filter(
    (event) => selectedCategory === 'All' || event.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <AnimatedSection id="events-page" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
              2024 Events
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
              Join us for exciting musical experiences and workshops
            </p>
            <a 
              href="/events/calendar" 
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              View Calendar
            </a>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-800 p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === 'past'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <motion.div
            key={`${activeTab}-${selectedCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
} 