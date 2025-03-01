'use client';

import Link from 'next/link';

import AnimatedSection from '../layout/AnimatedSection';
import GalleryItem from '../ui/GalleryItem';
import { galleryItems } from '../../data/gallery';

interface GallerySectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const GallerySection = ({ 
  activeFilter, 
  setActiveFilter 
}: GallerySectionProps) => {
  // Filter gallery items based on active filter
  const filteredGalleryItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <AnimatedSection id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Our Gallery</h2>
        
        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeFilter === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('performances')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeFilter === 'performances'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900'
            }`}
          >
            Performances
          </button>
          <button
            onClick={() => setActiveFilter('workshops')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeFilter === 'workshops'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900'
            }`}
          >
            Workshops
          </button>
          <button
            onClick={() => setActiveFilter('jams')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeFilter === 'jams'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900'
            }`}
          >
            Jam Sessions
          </button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="#" className="btn-secondary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GallerySection;
