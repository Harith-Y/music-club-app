'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const JoinUsSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-[length:180%_180%] animate-gradient" />
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Musical Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-100">
            Whether you're a seasoned musician or just starting out, there's a place for you in our club. Join us and be part of something special.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://linktr.ee/MusicClub_IIITDM" className="px-8 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300">
              Join Now
            </Link>
            <Link href="events" className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-600 transition-colors duration-300">
              Explore Events
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
