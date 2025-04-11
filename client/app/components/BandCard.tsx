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
          <div className="grid grid-cols-3 gap-2 aspect-square">
            {band.members.map((member) => (
              <div key={member.id} className="relative w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-sm"
                />
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