import { upcomingEvents } from '../../data/events2025';
import { galleryItems } from '../../data/gallery';
import EventGalleryClient from '../../components/sections/EventGalleryClient';

// @ts-ignore - Force ignore TypeScript errors for this component
export default function EventGalleryPage({ params }: any) {
  const event = upcomingEvents.find(e => e.galleryRoute === `/2025events/${params.slug}`);
  const eventGalleryItems = galleryItems.filter(item => item.event === event?.title);
  
  return <EventGalleryClient event={event} galleryItems={eventGalleryItems} />;
} 