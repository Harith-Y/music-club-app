import { pastEvents } from '../../data/events2024';
import { upcomingEvents } from '../../data/events2025';
import { galleryItems } from '../../data/gallery2024';
import EventGalleryClient from '../../components/sections/EventGalleryClient';

// @ts-ignore - Force ignore TypeScript errors for this component
export default function EventGalleryPage({ params }: any) {
  const event = [...pastEvents, ...upcomingEvents].find(e => 
    e.galleryRoute === `/events/${params.slug}` || 
    e.galleryRoute === `/2024events/${params.slug}` ||
    e.galleryRoute === `/2025events/${params.slug}`
  );
  const eventGalleryItems = galleryItems.filter(item => item.event === event?.title);
  
  return <EventGalleryClient event={event} galleryItems={eventGalleryItems} />;
}