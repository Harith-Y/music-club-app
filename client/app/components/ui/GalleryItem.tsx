'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCamera, FaPlay } from 'react-icons/fa';
import { GalleryItem as GalleryItemType } from '../../data/gallery';
import { useState } from 'react';
import Modal from './Modal';

interface GalleryItemProps {
  item: GalleryItemType;
}

const getCategoryDisplayName = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    'performances': 'Performances',
    'jams': 'Jam Sessions',
    'workshops': 'Workshops',
    'team': 'Team',
    'covers': 'Covers'
  };
  return categoryMap[category] || category;
};

const GalleryItem = ({ item }: GalleryItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (item.type === 'video') {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-10" />
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Video Play Button Overlay */}
          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <FaPlay className="w-6 h-6 text-white" />
              </div>
            </div>
          )}
          
          {/* Overlay content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-white"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <FaCamera className="w-8 h-8 mx-auto mb-3 text-primary-400" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {item.title}
              </h3>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary-600/80 backdrop-blur-sm">
                {getCategoryDisplayName(item.category)}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {item.type === 'video' && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={item.videoUrl}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default GalleryItem;