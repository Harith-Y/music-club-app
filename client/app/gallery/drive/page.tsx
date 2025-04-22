'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DriveRedirect() {
  const [isRedirecting, setIsRedirecting] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://drive.google.com/drive/folders/1Low62FNIcbyp2_Sd2Syz0SZLD_s30vJV?usp=sharing';
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Redirecting to Music Club Raw Media...</h1>
        <div className="w-16 h-16 border-4 border-primary-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">If you are not redirected automatically, <a href="https://drive.google.com/drive/folders/1Low62FNIcbyp2_Sd2Syz0SZLD_s30vJV?usp=sharing" className="text-primary-400 hover:underline">click here</a>.</p>
      </div>
    </div>
  );
} 