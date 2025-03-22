'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

import AnimatedSection from '../layout/AnimatedSection';
import EventCard from '../ui/EventCard';
import { events } from '../../data/events';

const EventsSection = () => {
  return (
    <AnimatedSection id="events" className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            Upcoming Events
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for exciting musical performances, workshops, and jam sessions throughout the year
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            href="#" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Events
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </AnimatedSection>
  );
};

export default EventsSection;
