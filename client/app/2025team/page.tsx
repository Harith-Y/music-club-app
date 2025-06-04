'use client';

import { useState, useEffect } from 'react';
import TeamSection from '../components/sections/TeamSection';
import SliderCSS from '../components/layout/SliderCSS';
import { coreMembers2025, leads2025, coordinators2025, crew2025, mentors2025, externalMentors2025 } from '../data/team2025';

export default function Team2025() {
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
      <TeamSection 
        windowWidth={windowWidth} 
        isClient={isClient}
        coreMembers={coreMembers2025}
        leads={leads2025}
        coordinators={coordinators2025}
        crew={crew2025}
        mentors={mentors2025}
        externalMentors={externalMentors2025}
        mentorsAsCarousel={true}
      />
    </main>
  );
} 