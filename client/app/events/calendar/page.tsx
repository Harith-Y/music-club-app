'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CalendarRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the Google Calendar
    window.location.href = 'https://calendar.google.com/calendar/embed?src=musicclub.iiitdm@gmail.com';
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Redirecting to Music Club Calendar...</h1>
        <p className="text-gray-400">If you are not redirected automatically, <a href="https://calendar.google.com/calendar/embed?src=musicclub.iiitdm@gmail.com" className="text-primary-400 hover:underline">click here</a>.</p>
      </div>
    </div>
  );
} 