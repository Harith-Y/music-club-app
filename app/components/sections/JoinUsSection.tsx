'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const JoinUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Musical Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you're a seasoned musician or just starting out, there's a place for you in our club. Join us and be part of something special.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#contact" className="px-8 py-3 bg-white text-purple-600 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300">
              Join Now
            </Link>
            <Link href="#events" className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Explore Events
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
