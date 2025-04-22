'use client';

import { FaGoogleDrive } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function DriveButton() {
  const router = useRouter();

  const handleDriveRedirect = () => {
    router.push('/gallery/drive');
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