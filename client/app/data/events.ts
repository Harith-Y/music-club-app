export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    registrationLink?: string;
    category: 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops';
    youtubeUrl?: string;
    viewBandsLink?: string;
    galleryRoute?: string;
    order?: number;
  }
  
  // Helper function to generate a new ID
  export function generateNewId(items: Event[]): number {
    if (items.length === 0) return 1;
    return Math.max(...items.map(item => item.id)) + 1;
  }
  
  // Helper function to insert an item at a specific position
  export function insertEvent(items: Event[], newItem: Omit<Event, 'id'>, position: number): Event[] {
    const id = generateNewId(items);
    const itemWithId = { ...newItem, id };
    
    // Create a copy of the array
    const newItems = [...items];
    
    // Insert the new item at the specified position
    newItems.splice(position, 0, itemWithId);
    
    // Update the order property for all items
    return newItems.map((item, index) => ({
      ...item,
      order: index
    }));
  }
  
  export const pastEvents: Event[] = [
    {
      id: 17,
      title: "4rth [Unofficial] Open Mic Night",
      date: "April 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An intimate evening showcasing raw talent and spontaneous performances in our cozy music room.",
      image: '/events/Unofficial_Open_Mic_April_2025/UnofficialOpenMicApril5.jpg',
      category: 'Open Mics' as const,
      galleryRoute: '/events/unofficial_open_mic-april-2025'
    },
    {
      id: 16,
      title: "Art of Noise",
      date: "March 30, 2025",
      time: "6:30 PM",
      location: "Main Stage",
      description: "A groundbreaking showcase of experimental soundscapes and avant-garde electronic compositions.",
      image: "/events/Art_of_Noise_2025/ArtOfNoise.png",
      registrationLink: "https://forms.gle/GrCrQL9VYE1L1nQd8",
      category: 'Competitions' as const,
      galleryRoute: '/events/art_of_noise-2025'
    },
    {
      id: 15,
      title: "Pixsonic X Voxels",
      date: "March 30, 2025",
      time: "1:00 PM",
      location: "H05",
      description: "A fusion of visual art and sound design, where digital creativity meets musical innovation.",
      image: "/events/PixsonicXVoxels.png",
      registrationLink: "https://forms.gle/5qR5WMhS2Rs8tWVx7",
      category: 'Competitions' as const,
      galleryRoute: '/events/pixsonic_x_voxels-2025'
    },
    {
      id: 14,
      title: "3rd Open Mic Night",
      date: "March 11, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "A vibrant evening of diverse musical performances and creative expressions.",
      image: '/events/Open_Mic_March_2025/OpenMicMarch11.jpg',
      registrationLink: "https://forms.gle/DU5h1GB93rY7Ek6T9",
      category: 'Open Mics' as const,
      galleryRoute: '/events/open_mic-march-2025'
    },
    {
      id: 13,
      title: "Workshop: How to form a Band",
      date: "March 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "A week-long workshop covering different instruments each day: Vocals & Beatboxing, Guitar, Keyboard, Drums, and Mixing - everything you need to form your perfect band.",
      image: '/events/OpenMicMarch5.jpg',
      registrationLink: "https://forms.gle/hCTKN1Rrw1So8cs37",
      category: 'Workshops' as const
    },
    {
      id: 12,
      title: "Open Stage Night - 1",
      date: "February 2, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "A celebration of artistic diversity featuring music, poetry, storytelling, and spoken word performances.",
      image: '/events/OpenMicFebruary2.jpg',
      registrationLink: "https://forms.gle/M7chRkYD8EBmSZ2D7",
      category: 'Open Mics' as const,
      galleryRoute: '/events/open_stage-feb-2025'
    },
    {
      id: 11,
      title: "Republic Day (Club Performance)",
      date: "January 26, 2025",
      time: "7:00 AM",
      location: "Open Air Theatre",
      description: "Patriotic melodies and cultural performances to celebrate our nation's spirit.",
      image: '/events/RepublicDay2025.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/republic_day-2025'
    },
    {
      id: 10,
      title: "Music Reel Challenge",
      date: "January 1, 2025",
      time: "All Day",
      location: "Instagram",
      description: "Showcase your musical talent in 60 seconds and get featured on our official Instagram page.",
      image: '/events/Music_Reel_Challenge_2025/MusicReelChallenge2025.jpg',
      registrationLink: "https://forms.gle/P7ft2r92SSeoT31o7",
      category: 'Competitions' as const,
      galleryRoute: '/events/music_reel_challenge-2025'
    },
    {
      id: 9,
      title: "CVIP (Club Performance)",
      date: "December 19, 2024",
      time: "5:00 PM",
      location: "H05",
      description: "A special performance showcasing the club's finest musicians at the CVIP event.",
      image: '/events/CVIP_2024/CVIP2024.png',
      category: 'Performances' as const,
      galleryRoute: '/events/cvip-2024'
    },
    {
      id: 8,
      title: "2nd Open Mic Night",
      date: "November 9, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of fresh talent and musical experimentation in our signature open mic format.",
      image: '/events/Open_Mic_November_2024/OpenMicNovember9.jpg',
      registrationLink: "https://forms.gle/UZJm6wCpGrvxMM7EA",
      category: 'Open Mics' as const,
      galleryRoute: '/events/open_mic-nov-2024'
    },
    {
      id: 7,
      title: "Meraki (Club Performance)",
      date: "October 20, 2024",
      time: "10:00 PM",
      location: "Open Air Theatre",
      description: "A grand musical spectacle under the stars, featuring our most talented performers.",
      image: '/events/Meraki_2024/Meraki2024.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/meraki-2024'
    },  
    {
      id: 6,
      title: "Spooky Symphonies: Battle of Bands Meraki",
      date: "October 31, 2024",
      time: "6:00 PM",
      location: "Open Air Theatre",
      description: "A thrilling Halloween-themed battle of bands where musical prowess meets creative costumes.",
      image: '/events/spookysymphonies.png',
      viewBandsLink: '/meraki2024/bands',
      registrationLink: "https://forms.gle/ziAvj19nCU4h6eLj9",
      category: 'Competitions' as const
    },
    {
      id: 5,
      title: "Ganesh Chaturthi (Club Performance)",
      date: "September 7, 2024",
      time: "3:00 PM",
      location: "Ashwatha Hostel",
      description: "Traditional and contemporary musical performances celebrating the festival of Lord Ganesha.",
      image: '/events/Ganesh_Chaturthi_2024/GaneshChaturthi2024-2.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/ganesh_chaturthi-2024'
    },
    {
      id: 4,
      title: "1st Open Mic Night",
      date: "August 31, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "The inaugural open mic night, setting the stage for future musical collaborations.",
      image: '/events/Open_Mic_August_2024/OpenMicAugust31.jpg',
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSelkpTGhxMxEuojAIPusqn7NdhrTgFti8cbEAjVCCBg1OxFHQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAabKzmPnBJRiCtzElxUb8nQcsBTkxguNC1jwqhWJA3QQUkmZPQFvhaO-QpA_aem_TN4C4Nm6qV1njYskj7YLgg",
      category: 'Open Mics' as const,
      galleryRoute: '/events/open_mic-aug-2024'
    },
    {
      id: 3,
      title: "Blastroduction (Club Performance)",
      date: "August 27, 2024",
      time: "6:00 PM",
      location: "H05",
      description: "A spectacular showcase introducing the Music Club's talent to the institute, featuring our finest performers and diverse musical styles.",
      image: '/events/Blastroduction_2024/Blastroduction2024.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/blastroduction-2024'
    },
    {
      id: 2,
      title: "Orientation (Club Performance)",
      date: "August 16, 2024",
      time: "10:30 AM",
      location: "H05",
      description: "A welcoming showcase introducing new students to the musical talent at our institute.",
      image: '/events/Orientation2024-1.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/orientation-2024'
    },
    {
      id: 1,
      title: "Independence Day (Club Performance)",
      date: "August 15, 2024",
      time: "7:00 AM",
      location: "Open Air Theatre",
      description: "Patriotic performances and cultural expressions celebrating our nation's independence.",
      image: '/events/IndependenceDay2024.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/independence_day-2024'
    },
  ].map((item, index) => ({
    ...item,
    order: index
  }));
  
  export const upcomingEvents: Event[] = [
    {
      id: 4,
      title: "Winter Concert (Club Performance)",
      date: "December 15, 2025",
      time: "6:00 PM",
      location: "H05",
      description: "A grand musical finale to the year, featuring performances from all club sections.",
      image: "https://images.unsplash.com/photo-1620642477222-7aef692dd0df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBjb25jZXJ0fGVufDB8MnwwfHx8MA%3D%3D",
      category: 'Performances' as const,
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
    },
    {
      id: 5,
      title: "Jazz Night",
      date: "November 10, 2025",
      time: "7:00 PM",
      location: "Cafeteria",
      description: "An elegant evening of smooth jazz, featuring both classic standards and modern interpretations.",
      image: "https://images.unsplash.com/photo-1621841019942-2a8c701ebc30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGphenolMjBuaWdodHxlbnwwfDJ8MHx8fDA%3D",
      category: 'Open Mics' as const
    },
    {
      id: 6,
      title: "Music Theory Workshop",
      date: "October 5, 2025",
      time: "4:00 PM",
      location: "Music Room",
      description: "A comprehensive workshop covering music theory fundamentals and practical composition techniques.",
      image: "https://images.unsplash.com/photo-1564019998-ac86b13fdadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3b3Jrc2hvcHN8ZW58MHwyfDB8fHww",
      category: 'Workshops' as const
    }
  ].map((item, index) => ({
    ...item,
    order: index
  }));