'use client';

import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Event } from '../../data/events';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />
        <Image
          src={event.image}
          alt={event.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-2xl transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
          {event.title}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-400">
            <FaCalendarAlt className="mr-2 text-primary-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <FaMapMarkerAlt className="mr-2 text-primary-400" />
            <span>{event.location}</span>
          </div>
          {event.time && (
            <div className="flex items-center text-gray-400">
              <FaClock className="mr-2 text-primary-400" />
              <span>{event.time}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-400 line-clamp-3">{event.description}</p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
        >
          Register Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard;