'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center hero-gradient text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Music Club"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">Music Club IIITDM</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Uniting talents, creating harmony, and fostering a vibrant musical community at IIITDM Kancheepuram
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#events" className="btn-primary">
              Upcoming Events
            </Link>
            <Link href="#contact" className="btn-primary">
              Join the Club
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;