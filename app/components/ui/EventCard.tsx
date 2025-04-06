'use client';

import Image from 'next/image';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Event } from '../../data/events';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="aspect-video relative">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400">
            <FaCalendar className="mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <FaClock className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <FaMapMarkerAlt className="mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-400 mb-4">{event.description}</p>
        
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            Register Now
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;