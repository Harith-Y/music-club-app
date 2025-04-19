'use client';

import { useState, useEffect } from 'react';
import GallerySection from '../components/sections/GallerySection';

// Convert filter to URL-friendly format
const filterToHash = (filter: string): string => {
  return filter.toLowerCase();
};

// Convert hash to filter
const hashToFilter = (hash: string): string => {
  const validFilters = ['all', 'performances', 'workshops', 'jams', 'covers', 'team'];
  return validFilters.includes(hash) ? hash : 'all';
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Initialize filter from URL hash on component mount
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const filter = hashToFilter(hash);
        setActiveFilter(filter);
      }
    };

    // Set initial filter from hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update URL hash when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    const hash = filterToHash(filter);
    window.location.hash = hash;
  };

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="pt-20">
        <GallerySection 
          activeFilter={activeFilter} 
          setActiveFilter={handleFilterChange}
          showViewFullButton={false}
          showAllImages={true}
          showFilters={true}
        />
      </div>
    </main>
  );
} 