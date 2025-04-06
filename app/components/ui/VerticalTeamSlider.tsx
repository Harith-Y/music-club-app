'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import MemberCard from './MemberCard';
import { TeamMember } from '../../data/team2024';

interface VerticalTeamSliderProps {
  title: string;
  members: TeamMember[];
  titleColor?: string;
}

const VerticalTeamSlider = ({ 
  title, 
  members,
  titleColor = 'text-primary-400'
}: VerticalTeamSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex === totalPages - 1) {
      setCurrentIndex(0); // Reset to first page when at the end
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentMembers = members.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="relative">
      <h3 className={`text-2xl font-bold mb-8 text-center ${titleColor}`}>{title}</h3>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Members Grid */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Down Arrow */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
        >
          <FaChevronDown className="text-xl text-white" />
        </button>

        {/* Page Indicator */}
        <div className="flex space-x-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTeamSlider; 
 