'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MusicNotesAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-full bg-transparent" />;
  }

  // Create notes for the home section
  const notes = [];
  const numNotes = 12; // Reduced number of notes
  
  // Create notes in a wider area
  for (let i = 0; i < numNotes; i++) {
    // Distribute notes across a wider area
    const x = 10 + Math.random() * 80; // Between 10% and 90% of screen width
    const y = 10 + Math.random() * 80; // Between 10% and 90% of screen height
    
    notes.push({
      id: i + 1,
      x,
      y,
      delay: i * 0.08, // Slightly slower sequence of delays
      size: 20 + Math.random() * 25, // Larger size between 20-45
      angle: Math.random() * 360, // Random initial angle
      // Add some variation to the movement
      moveX: (Math.random() - 0.5) * 15, // Wider X movement
      moveY: (Math.random() - 0.5) * 15, // Wider Y movement
      // Add bass drum phase offset for each note
      bassOffset: Math.random() * 0.8, // Random offset between 0-0.8 seconds
    });
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {notes.map((note) => (
        <motion.div
          key={note.id}
          className="absolute"
          style={{
            left: `${note.x}%`,
            top: `${note.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ 
            opacity: 0,
            scale: 0.5,
            rotate: note.angle
          }}
          animate={{ 
            x: [
              0, 
              note.moveX, 
              -note.moveX, 
              0
            ],
            y: [
              0, 
              note.moveY, 
              -note.moveY, 
              0
            ],
            opacity: [0, 1, 1, 0.8],
            scale: [
              0.5, 
              1, 
              1.15, // First bass beat
              1, 
              1.2, // Second bass beat
              1, 
              1.15, // Third bass beat
              1
            ],
            rotate: [note.angle, note.angle + 45, note.angle - 45, note.angle]
          }}
          transition={{
            duration: 6 + Math.random() * 4, // Random duration between 6-10 seconds
            delay: note.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 1], // Timing for the bass drum effect
            scale: {
              duration: 2.4, // Slower duration for bass drum rhythm (2.4 seconds per beat)
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              times: [0, 0.4, 0.6, 0.8, 0.9, 1], // Timing for the bass drum effect
              delay: note.bassOffset // Random offset for each note
            }
          }}
        >
          <svg
            width={note.size}
            height={note.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-400 drop-shadow-lg"
          >
            <path
              d="M12 3V12.5C11.5 12.3 11 12.2 10.5 12.2C8.5 12.2 7 13.7 7 15.7C7 17.7 8.5 19.2 10.5 19.2C12.5 19.2 14 17.7 14 15.7V7H17V3H12Z"
              fill="currentColor"
            />
            <path
              d="M17 12.5C16.5 12.3 16 12.2 15.5 12.2C13.5 12.2 12 13.7 12 15.7C12 17.7 13.5 19.2 15.5 19.2C17.5 19.2 19 17.7 19 15.7V7H22V3H17V12.5Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default MusicNotesAnimation; 