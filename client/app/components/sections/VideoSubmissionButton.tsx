'use client';

import { motion } from 'framer-motion';
import { FaVideo } from 'react-icons/fa';

const VideoSubmissionButton = () => {
  const handleClick = () => {
    window.open('https://forms.gle/zsN2varRNH92CWr2A', '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <FaVideo className="mr-2" />
      Submit Your Video
    </motion.button>
  );
};

export default VideoSubmissionButton; 