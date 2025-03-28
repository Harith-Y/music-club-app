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
    <AnimatedSection id="about" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-heading text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400"
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
              The Music Club of IIITDM Kancheepuram is a vibrant community of music enthusiasts dedicated to promoting and nurturing musical talent within the institute. Founded in 2016, our club has been a platform for students to explore their passion for music, develop their skills, and showcase their talents.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We organize various events throughout the academic year, including concerts, open mic nights, workshops, and jam sessions. Our club is open to all students, regardless of their level of musical experience.
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
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Music Club Activities"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
