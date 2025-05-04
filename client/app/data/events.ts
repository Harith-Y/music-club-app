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
      id: 24,
      title: "4th [Unofficial] Open Mic Night",
      date: "April 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/UnofficialOpenMicApril5.jpg',
      category: 'Open Mics' as const,
      galleryRoute: '/events/unofficialopenmicnight-april5'
    },
    {
      id: 23,
      title: "Art of Noise",
      date: "March 30, 2025",
      time: "6:30 PM",
      location: "Main Stage",
      description: "A showcase of experimental sound design and electronic music production.",
      image: "/events/ArtOfNoise.png",
      registrationLink: "https://forms.gle/GrCrQL9VYE1L1nQd8",
      category: 'Competitions' as const,
      galleryRoute: '/events/art-of-noise'
    },
    {
      id: 22,
      title: "Opening Ceremony (Art of Noise)",
      date: "March 30, 2025",
      time: "6:00 PM",
      location: "Main Stage",
      description: "A showcase of experimental sound design and electronic music production.",
      image: "/events/OpeningArtOfNoise.jpg",
      category: 'Performances' as const,
      youtubeUrl: 'https://www.youtube.com/embed/MMoPQU21OfM?si=lfeDcLykyQgmZvQK'
    },
    {
      id: 21,
      title: "Pixsonic X Voxels",
      date: "March 30, 2025",
      time: "1:00 PM",
      location: "H05",
      description: "A showcase of experimental sound design and electronic music production.",
      image: "/events/PixsonicXVoxels.png",
      registrationLink: "https://forms.gle/5qR5WMhS2Rs8tWVx7",
      category: 'Competitions' as const,
      galleryRoute: '/events/pixsonic-x-voxels'
    },
    {
      id: 20,
      title: "3rd Open Mic Night",
      date: "March 11, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicMarch11.jpg',
      registrationLink: "https://forms.gle/DU5h1GB93rY7Ek6T9",
      category: 'Open Mics' as const,
      galleryRoute: '/events/openmicnight-march11'
    },
    {
      id: 19,
      title: "Workshop: Music Production",
      date: "March 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "Learn the basics of music production and digital audio workstations.",
      image: '/events/OpenMicMarch5.jpg',
      registrationLink: "https://forms.gle/hCTKN1Rrw1So8cs37",
      category: 'Workshops' as const
    },
    {
      id: 18,
      title: "Open Stage Night - 1",
      date: "February 2, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members along with stories, poems, shayaris, raps and more.",
      image: '/events/OpenMicFebruary2.jpg',
      registrationLink: "https://forms.gle/M7chRkYD8EBmSZ2D7",
      category: 'Open Mics' as const,
      galleryRoute: '/events/openstagenight-feb2'
    },
    {
      id: 17,
      title: "Republic Day (Club Performance)",
      date: "January 26, 2025",
      time: "7:00 AM",
      location: "Open Air Theatre",
      description: "A wonderful morning of live performances from our talented members.",
      image: '/events/RepublicDay2025.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/RepublicDay2025'
    },
    {
      id: 16,
      title: "Music Reel Challenge",
      date: "January 1, 2025",
      time: "All Day",
      location: "Instagram",
      description: "Musicians of IIITDM ! Get ready to showcase you talent and be featured on the Music Club Instagram page.",
      image: '/events/MusicReelChallenge.jpg',
      registrationLink: "https://forms.gle/P7ft2r92SSeoT31o7",
      category: 'Competitions' as const,
      galleryRoute: '/events/music-reel-challenge'
    },
    {
      id: 15,
      title: "CVIP (Club Performance)",
      date: "December 19, 2024",
      time: "5:00 PM",
      location: "H05",
      description: "An evening of live performances from our talented members.",
      image: '/events/CVIP2024.png',
      category: 'Performances' as const,
      galleryRoute: '/events/cvip2024'
    },
    {
      id: 11,
      title: "2nd Open Mic Night",
      date: "November 9, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicNovember9.jpg',
      registrationLink: "https://forms.gle/UZJm6wCpGrvxMM7EA",
      category: 'Open Mics' as const,
      galleryRoute: '/events/openmicnight-nov9'
    },
    {
      id: 10,
      title: "Meraki (Club Performance)",
      date: "October 20, 2024",
      time: "10:00 PM",
      location: "Open Air Theatre",
      description: "An evening of live performances from our talented members.",
      image: '/events/Meraki2024.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/meraki2024'
    },  
    {
      id: 9,
      title: "Spooky Symphonies: Battle of Bands Meraki",
      date: "October 31, 2024",
      time: "6:00 PM",
      location: "Open Air Theatre",
      description: "An electrifying battle of bands featuring the most talented musicians competing for glory.",
      image: '/events/spookysymphonies.png',
      viewBandsLink: '/meraki2024/bands',
      registrationLink: "https://forms.gle/ziAvj19nCU4h6eLj9",
      category: 'Competitions' as const
    },
    {
      id: 8,
      title: "Ganesh Chaturthi (Club Performance)",
      date: "September 7, 2024",
      time: "3:00 PM",
      location: "Ashwatha Hostel",
      description: "An afternoon of live performances from our talented members.",
      image: '/events/GaneshChaturthi2024-2.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/ganeshchaturthi2024'
    },
    {
      id: 6,
      title: "1st Open Mic Night",
      date: "August 31, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicAugust31.jpg',
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSelkpTGhxMxEuojAIPusqn7NdhrTgFti8cbEAjVCCBg1OxFHQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAabKzmPnBJRiCtzElxUb8nQcsBTkxguNC1jwqhWJA3QQUkmZPQFvhaO-QpA_aem_TN4C4Nm6qV1njYskj7YLgg",
      category: 'Open Mics' as const,
      galleryRoute: '/events/openmicnight-aug31'
    },
    {
      id: 3,
      title: "Orientation (Club Performance)",
      date: "August 16, 2024",
      time: "10:30 AM",
      location: "H05",
      description: "A wonderful morning of live performances from our talented members.",
      image: '/events/Orientation2024-1.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/orientation2024'
    },
    {
      id: 1,
      title: "Independence Day (Club Performance)",
      date: "August 15, 2024",
      time: "7:00 AM",
      location: "Open Air Theatre",
      description: "A wonderful morning of live performances from our talented members.",
      image: '/events/IndependenceDay2024.jpg',
      category: 'Performances' as const,
      galleryRoute: '/events/independence-day-2024'
    },
  ].map((item, index) => ({
    ...item,
    order: index
  }));
  
  export const upcomingEvents: Event[] = [
    {
      id: 4,
      title: "Winter Concert",
      date: "December 15, 2025",
      time: "6:00 PM",
      location: "H05",
      description: "Our annual winter concert featuring performances from all sections.",
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
      description: "An evening of smooth jazz and improvisation.",
      image: "https://images.unsplash.com/photo-1621841019942-2a8c701ebc30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGphenolMjBuaWdodHxlbnwwfDJ8MHx8fDA%3D",
      category: 'Open Mics' as const
    },
    {
      id: 6,
      title: "Music Theory Workshop",
      date: "October 5, 2025",
      time: "4:00 PM",
      location: "Music Room",
      description: "Learn the fundamentals of music theory and composition.",
      image: "https://images.unsplash.com/photo-1564019998-ac86b13fdadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3b3Jrc2hvcHN8ZW58MHwyfDB8fHww",
      category: 'Workshops' as const
    }
  ].map((item, index) => ({
    ...item,
    order: index
  }));