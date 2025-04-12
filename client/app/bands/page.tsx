'use client';

import { bands } from '../data/bands';
import BandCard from '../components/BandCard';

export default function BandsPage() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Internal Bands</h1>
      <div className="space-y-8">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </main>
  );
} 