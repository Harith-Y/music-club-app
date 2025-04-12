'use client';

import { useState } from 'react';
import GallerySection from '../components/sections/GallerySection';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="pt-20">
        <GallerySection 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
          showViewFullButton={false}
          showAllImages={true}
          showFilters={true}
        />
      </div>
    </main>
  );
} 