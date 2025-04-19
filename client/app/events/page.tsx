'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/layout/AnimatedSection';
import EventCard from '../components/ui/EventCard';
import { pastEvents, upcomingEvents, Event } from '../data/events';

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

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');

  const categories: EventCategory[] = ['All', 'Performances', 'Open Mics', 'Competitions', 'Workshops'];

  // Initialize category from URL hash on component mount
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const category = hashToCategory(hash);
        setSelectedCategory(category);
      }
    };

    // Set initial category from hash
    handleHashChange();

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
              Events
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join us for exciting musical experiences and workshops
            </p>
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