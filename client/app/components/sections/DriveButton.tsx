'use client';

import { FaGoogleDrive } from 'react-icons/fa';

export default function DriveButton() {
  const handleDriveRedirect = () => {
    window.location.href = 'https://drive.google.com/drive/folders/1Low62FNIcbyp2_Sd2Syz0SZLD_s30vJV?usp=sharing';
  };

  return (
    <button
      onClick={handleDriveRedirect}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
    >
      <FaGoogleDrive className="text-xl" />
      <span>View Raw Videos</span>
    </button>
  );
} 