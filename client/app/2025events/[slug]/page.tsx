import { upcomingEvents, pastEvents } from '../../data/events2025';
import { galleryItems } from '../../data/gallery2025';
import EventGalleryClient from '../../components/sections/EventGalleryClient';

// @ts-ignore - Force ignore TypeScript errors for this component
export default async function EventGalleryPage({ params }: any) {
  const resolvedParams = await params;
  const allEvents = [...upcomingEvents, ...pastEvents];
  const event = allEvents.find(e => e.galleryRoute === `/2025events/${resolvedParams.slug}`);
  const eventGalleryItems = galleryItems.filter(item => item.event === event?.title);
  
  return <EventGalleryClient event={event} galleryItems={eventGalleryItems} />;
} 