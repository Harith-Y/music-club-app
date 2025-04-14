'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/layout/AnimatedSection';
import EventCard from '../components/ui/EventCard';
import { pastEvents, upcomingEvents, Event } from '../data/events';

type EventCategory = 'All' | 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');

  const categories: EventCategory[] = ['All', 'Performances', 'Open Mics', 'Competitions', 'Workshops'];

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
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-800 p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
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