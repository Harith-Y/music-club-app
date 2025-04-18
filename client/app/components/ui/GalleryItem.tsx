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
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleClick = () => {
    if (item.type === 'video') {
      setIsModalOpen(true);
    }
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={handleClick}
        onHoverStart={() => setIsContentVisible(true)}
        onHoverEnd={() => setIsContentVisible(false)}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-[1]" />
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Video Play Button Overlay */}
          {item.type === 'video' && (
            <div className="absolute top-4 right-4 z-[3]">
              <div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary-500/50 transition-all duration-300">
                <FaPlay className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
          
          {/* Overlay content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isContentVisible ? 1 : 0 }}
            className="absolute inset-0 z-[2] flex flex-col items-center justify-center p-6 text-white bg-black/60 md:bg-black/60 md:group-hover:opacity-100 md:opacity-0 transition-opacity duration-300"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isContentVisible ? 0 : 20, opacity: isContentVisible ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {item.type === 'video' ? (
                <FaPlay className="w-8 h-8 mx-auto mb-3 text-primary-400" />
              ) : (
                <FaCamera className="w-8 h-8 mx-auto mb-3 text-primary-400" />
              )}
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
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