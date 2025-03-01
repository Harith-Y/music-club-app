'use client';

import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Event } from '../../data/events';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="event-card">
      <div className="relative h-48 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <FaMapMarkerAlt className="mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
        <button className="btn-primary w-full">Register Now</button>
      </div>
    </div>
  );
};

export default EventCard;