'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EventsSection from './components/sections/EventsSection';
import GallerySection from './components/sections/GallerySection';
import TeamSection from './components/sections/TeamSection';
import JoinUsSection from './components/sections/JoinUsSection';
import ContactSection from './components/sections/ContactSection';
import SliderCSS from './components/layout/SliderCSS';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('all'); // ✅ Define state for Gallery filter

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);

    // Set window width on client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Import slider CSS on client side */}
      {isClient && <SliderCSS />}

      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GallerySection 
        activeFilter={activeGalleryFilter} 
        setActiveFilter={setActiveGalleryFilter} 
      />
      <TeamSection windowWidth={windowWidth} isClient={isClient} />
      <JoinUsSection />
      <ContactSection />
    </main>
  );
}
