import Image from 'next/image';
import { Band } from '../data/bands';

interface BandCardProps {
  band: Band;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <div className="w-full bg-zinc-900 rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Band members grid */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-3 gap-2">
            {band.members.map((member) => (
              <div key={member.id} className="relative aspect-square w-full group overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-sm transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                {/* Overlay with member info */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium text-sm truncate w-full">{member.name}</p>
                    <p className="text-xs text-gray-300 truncate w-full">{member.instrument}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Band info */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-white">{band.name}</h2>
          <p className="text-gray-300 mb-6">{band.description}</p>
          
          <h3 className="text-xl font-semibold mb-3 text-white">Members</h3>
          <div className="grid grid-cols-1 gap-2">
            {band.members.map((member) => (
              <div key={member.id} className="flex items-center text-gray-300">
                <span className="font-medium">{member.name}</span>
                <span className="mx-2">•</span>
                <span className="text-gray-400">{member.instrument}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 