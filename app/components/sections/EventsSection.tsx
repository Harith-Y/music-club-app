'use client';

import Link from 'next/link';

import AnimatedSection from '../layout/AnimatedSection';
import EventCard from '../ui/EventCard';
import { events } from '../../data/events';

const EventsSection = () => {
  return (
    <AnimatedSection id="events">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="#" className="btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EventsSection;
