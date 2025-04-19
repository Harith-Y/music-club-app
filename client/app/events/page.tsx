'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/layout/AnimatedSection';
import EventCard from '../components/ui/EventCard';
import { pastEvents, upcomingEvents, Event } from '../data/events';
import { useRouter } from 'next/navigation';

type EventCategory = 'All' | 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops';

export default function EventsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');

  const categories: EventCategory[] = ['All', 'Performances', 'Open Mics', 'Competitions', 'Workshops'];

  // Read URL hash on component mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      
      // Handle tab selection
      if (hash === 'upcoming' || hash === 'past') {
        setActiveTab(hash as 'upcoming' | 'past');
      }
      
      // Handle category selection
      const categoryMatch = categories.find(
        category => category.toLowerCase() === hash
      );
      
      if (categoryMatch) {
        setSelectedCategory(categoryMatch);
      }
    };

    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update URL hash when filters change
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const newHash = activeTab === 'upcoming' ? 'upcoming' : 'past';
    
    if (selectedCategory !== 'All') {
      window.location.hash = `${newHash}#${selectedCategory.toLowerCase()}`;
    } else {
      window.location.hash = newHash;
    }
  }, [activeTab, selectedCategory]);

  const filteredEvents = (activeTab === 'upcoming' ? upcomingEvents : pastEvents).filter(
    (event) => selectedCategory === 'All' || event.category === selectedCategory
  );

  const handleTabChange = (tab: 'past' | 'upcoming') => {
    setActiveTab(tab);
  };

  const handleCategoryChange = (category: EventCategory) => {
    setSelectedCategory(category);
  };

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
              <a
                href="#upcoming"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('upcoming');
                }}
                className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Upcoming Events
              </a>
              <a
                href="#past"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('past');
                }}
                className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === 'past'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Past Events
              </a>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${activeTab}#${category.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange(category);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </a>
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