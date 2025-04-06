'use client';

import { useState, useEffect } from 'react';
import TeamSection from '../components/sections/TeamSection';
import SliderCSS from '../components/layout/SliderCSS';

export default function Team2024() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="overflow-hidden">
      {isClient && <SliderCSS />}
      <TeamSection windowWidth={windowWidth} isClient={isClient} />
    </main>
  );
} 