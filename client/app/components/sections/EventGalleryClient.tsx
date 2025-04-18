'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../../components/layout/AnimatedSection';
import GalleryItem from '../../components/ui/GalleryItem';
import { GalleryItem as GalleryItemType } from '../../types';

type EventGalleryClientProps = {
  event: {
    title: string;
    galleryRoute?: string;
    date: string;
    description: string;
    location: string;
    image: string;
  } | undefined;
  galleryItems: GalleryItemType[];
};

export default function EventGalleryClient({ event, galleryItems }: EventGalleryClientProps) {
  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl text-white text-center">Event not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <AnimatedSection id="event-gallery" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 pb-1">
              {event.title} Gallery
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore moments captured during {event.title}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GalleryItem item={item} />
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="fixed top-20 left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-float" />
          <div className="fixed bottom-20 right-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </AnimatedSection>
    </main>
  );
}