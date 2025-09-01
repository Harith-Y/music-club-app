import { Event } from './events2024';

export const pastEvents: Event[] = [
  {
    id: 1,
    title: "Independence Day (Club Performance)",
    date: "August 15, 2025",
    time: "8:30 AM",
    location: "Main Gate",
    description: "Patriotic performance to celebrate the Nation's Independence.",
    image: "/events/events2025-26/Independence_Day_2025/Independence Day2025.png",
    category: "Performances",
    galleryRoute: "/2025events/independence_day-2025",
  }
];

export const upcomingEvents: Event[] = [
  {
    id: 2,
    title: "Winter Concert (Club Performance)",
    date: "November 10, 2025",
    time: "6:00 PM",
    location: "H05",
    description: "A grand musical finale to the year, featuring performances from all club sections.",
    image: "/events/events2025-26/Winter_Concert_2025/WinterConcert2025.jpg",
    // image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2025-26%2FWinter_Concert_2025%2FWinterConcert2025.jpg?alt=media&token=47e09df5-f77f-479e-a0e2-c8e69a575edc",
    category: 'Performances' as const,
    // youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    galleryRoute: "/2025events/winter_concert-2025",
    order: 2
  },
  {
    id: 1,
    title: "Jazz Night",
    date: "October 19, 2025",
    time: "7:00 PM",
    location: "Cafeteria",
    description: "An elegant evening of smooth jazz, featuring both classic standards and modern interpretations.",
    image: "/events/events2025-26/Jazz_Night_2025/JazzNight2025.jpg",
    // image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2025-26%2FJazz_Night_2025%2FJazzNight2025.jpg?alt=media&token=34cee50b-78b9-4fbc-a083-238610b2a008",
    category: 'Open Mics' as const,
    order: 1
  },
  {
    id: 0,
    title: "Music Theory Workshop",
    date: "October 5, 2025",
    time: "4:00 PM",
    location: "Music Room",
    description: "A comprehensive workshop covering music theory fundamentals and practical composition techniques.",
    image: "/events/events2025-26/Music_Theory_Workshop_2025/MusicTheoryWorkshop2025.jpg",
    // image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2025-26%2FMusic_Theory_Workshop_2025%2FMusicTheoryWorkshop2025.jpg?alt=media&token=9c98c712-183c-46f3-8909-93ced4f77cdf",
    category: 'Workshops' as const,
    order: 0
  },
<<<<<<< HEAD
  {
    id: 3,
    title: "Independence Day (Club Performance)",
    date: "August 15, 2025",
    time: "8:30 AM",
    location: "Main Gate",
    description: "Patriotic performance to celebrate the Nation's Independence.",
    image: "/events/events2025-26/Independence_Day_2025/Independence Day2025.png",
    category: "Performances",
    galleryRoute: "/2025events/independence_day-2025",
    order: 3
  },

  {
    id: 4,
    title: "Ganesh Chaturthi (Club Performance)",
    date: "August 27, 2025",
    time: "2:00 PM",
    location: "Ashwatha Hostel",
    description: "Performance to celebrate the feastival of Lord Ganesha.",
    image: "/events/events2025-26/Ganesh_Chaturthi_2025/Ganesh Chaturthi.jpg",
    category: "Performances",
    galleryRoute: "/2025events/ganesh_chaturthi-2025",
    order: 4
  }
=======
  
>>>>>>> 984323bb7006e1113c6ed17d60bd6b2a92b5a627
].map((item, index) => ({
  ...item,
  order: index,
  category: item.category as 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops'
}));