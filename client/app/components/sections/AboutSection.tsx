'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMusic, FaGuitar, FaMicrophone, FaDrum } from 'react-icons/fa';
import AnimatedSection from '../layout/AnimatedSection';

const features = [
  { icon: FaMusic, text: 'Regular Jam Sessions', color: 'primary' },
  { icon: FaGuitar, text: 'Instrument Training', color: 'secondary' },
  { icon: FaMicrophone, text: 'Vocal Workshops', color: 'accent' },
  { icon: FaDrum, text: 'Live Performances', color: 'primary' },
];

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-[length:180%_180%] animate-gradient" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          className="section-heading text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              The Music Club of IIITDM Kancheepuram is a vibrant community of music enthusiasts dedicated to promoting and nurturing musical talent within the institute. Founded in 2014, our club has been a platform for students to explore their passion for music, develop their skills, and showcase their talents.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We organize various events throughout the academic year, including concerts, collaborative performances, themed events, open mic nights, workshops, and jam sessions. Our club is open to all students, regardless of their level of musical experience. Inclusive environment here, fosters growth and lasting friendships.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate musicians unite to create unforgettable experiences through rhythm and melody. Immerse yourself in the power of music and embark on an unforgettable adventure with us!
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card-gradient backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <feature.icon className={`text-${feature.color}-400 text-2xl`} />
                  <span className="font-medium text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              // src="https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Music_Room.jpg?alt=media&token=ee095ede-9085-4d22-8b7b-e570b549fff1"
              src="/Music_Room.jpg"
              alt="Music Club Activities"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
