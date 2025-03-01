'use client';

import Image from 'next/image';

import { FaMusic, FaGuitar, FaMicrophone, FaDrum } from 'react-icons/fa';
import AnimatedSection from '../layout/AnimatedSection';

const AboutSection = () => {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          <div>
            <p className="text-lg mb-6">
              The Music Club of IIITDM Kancheepuram is a vibrant community of music enthusiasts dedicated to promoting and nurturing musical talent within the institute. Founded in 2016, our club has been a platform for students to explore their passion for music, develop their skills, and showcase their talents.
            </p>
            <p className="text-lg mb-6">
              We organize various events throughout the academic year, including concerts, open mic nights, workshops, and jam sessions. Our club is open to all students, regardless of their level of musical experience.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <FaMusic className="text-purple-600 text-2xl" />
                <span className="font-medium">Regular Jam Sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaGuitar className="text-purple-600 text-2xl" />
                <span className="font-medium">Instrument Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMicrophone className="text-purple-600 text-2xl" />
                <span className="font-medium">Vocal Workshops</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaDrum className="text-purple-600 text-2xl" />
                <span className="font-medium">Live Performances</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Music Club Activities"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
