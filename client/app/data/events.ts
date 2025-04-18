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
  }
  
  export const pastEvents: Event[] = [
    {
      id: 24,
      title: "Unofficial Open Mic Night - 4",
      date: "April 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/UnofficialOpenMicApril5.jpg',
      category: 'Open Mics'
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
      category: 'Competitions',
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
      category: 'Performances',
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
      category: 'Competitions',
      galleryRoute: '/events/pixsonic-x-voxels'
    },
    {
      id: 20,
      title: "Open Mic Night - 3",
      date: "March 11, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicMarch11.jpg',
      registrationLink: "https://forms.gle/DU5h1GB93rY7Ek6T9",
      category: 'Open Mics',
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
      category: 'Workshops'
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
      category: 'Open Mics',
      galleryRoute: '/events/openstagenight-feb2'
    },
    {
      id: 17,
      title: "Music Reel Challenge",
      date: "January 1, 2025",
      time: "All Day",
      location: "Instagram",
      description: "Musicians of IIITDM ! Get ready to showcase you talent and be featured on the Music Club Instagram page.",
      image: '/events/MusicReelChallenge.jpg',
      registrationLink: "https://forms.gle/P7ft2r92SSeoT31o7",
      category: 'Competitions',
      galleryRoute: '/events/music-reel-challenge'
    },
    {
      id: 16,
      title: "Skyfall (CVIP)",
      date: "December 19, 2024",
      time: "5:00 PM",
      location: "H05",
      description: "An evening of live performances from our talented members.",
      image: '/events/CVIP2024.png',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/hH1Gp6kmaUQ'
    },
    {
      id: 15,
      title: "Intehaan (CVIP)",
      date: "December 19, 2024",
      time: "5:00 PM",
      location: "H05",
      description: "An evening of live performances from our talented members.",
      image: '/events/CVIP2024.png',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/vw5Wj1u8rrw'
    },
    {
      id: 14,
      title: "The Chain (CVIP)",
      date: "December 19, 2024",
      time: "5:00 PM",
      location: "H05",
      description: "An evening of live performances from our talented members.",
      image: '/events/CVIP2024.png',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/mZSY_ommAyo'
    },
    {
      id: 13,
      title: "Dream a Little Dream of Me (CVIP)",
      date: "December 19, 2024",
      time: "5:00 PM",
      location: "H05",
      description: "An evening of live performances from our talented members.",
      image: '/events/CVIP2024.png',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/T66xfsmisgc'
    },
    {
      id: 12,
      title: "Open Mic Night - 2",
      date: "November 9, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicNovember9.jpg',
      registrationLink: "https://forms.gle/UZJm6wCpGrvxMM7EA",
      category: 'Open Mics',
      galleryRoute: '/events/openmicnight-nov9'
    },
    {
      id: 11,
      title: "Urvasi Urvase X Sheela Ki Jawani (Meraki)",
      date: "October 20, 2024",
      time: "10:00 PM",
      location: "Open Air Theatre",
      description: "An evening of live performances from our talented members.",
      image: '/events/Meraki2024.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/2jMVx2vp-gs'
    },
    {
      id: 10,
      title: "Chandralekha (Meraki)",
      date: "October 20, 2024",
      time: "10:00 PM",
      location: "Open Air Theatre",
      description: "An evening of live performances from our talented members.",
      image: '/events/Meraki2024.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/RQd9IN4N_xM'
    },
    {
      id: 9,
      title: "Muskaanein Jhooti Hai (Meraki)",
      date: "October 20, 2024",
      time: "10:00 PM",
      location: "Open Air Theatre",
      description: "An evening of live performances from our talented members.",
      image: '/events/Meraki2024.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/xHauVEB3a48'
    },
    {
      id: 8,
      title: "Let's Kill Tonight (Meraki)",
      date: "October 20, 2024",
      time: "10:00 PM",
      location: "Open Air Theatre",
      description: "An evening of live performances from our talented members.",
      image: '/events/Meraki2024.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/NhMqICsZZfM'
    },
  
     {
      id: 7,
      title: "Spooky Symphonies: Battle of Bands Meraki",
      date: "October 31, 2024",
      time: "6:00 PM",
      location: "Open Air Theatre",
      description: "An electrifying battle of bands featuring the most talented musicians competing for glory.",
      image: '/events/spookysymphonies.png',
      viewBandsLink: '/meraki2024/bands',
      registrationLink: "https://forms.gle/ziAvj19nCU4h6eLj9",
      category: 'Competitions'
    },
    {
      id: 6,
      title: "Kande Pohe (Ganesh Chaturthi)",
      date: "September 7, 2024",
      time: "3:00 PM",
      location: "Ashwatha Hostel",
      description: "An afternoon of live performances from our talented members.",
      image: '/events/GaneshChaturthi2024-2.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/NQi_6k_if-g'
    },
    {
      id: 5,
      title: "Mahaganapathim (Ganesh Chaturthi)",
      date: "September 7, 2024",
      time: "3:00 PM",
      location: "Ashwatha Hostel",
      description: "An afternoon of live performances from our talented members.",
      image: '/events/GaneshChaturthi2024-1.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/8aSGtWMdvzw'
    },
    {
      id: 4,
      title: "Open Mic Night - 1",
      date: "August 31, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicAugust31.jpg',
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSelkpTGhxMxEuojAIPusqn7NdhrTgFti8cbEAjVCCBg1OxFHQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAabKzmPnBJRiCtzElxUb8nQcsBTkxguNC1jwqhWJA3QQUkmZPQFvhaO-QpA_aem_TN4C4Nm6qV1njYskj7YLgg",
      category: 'Open Mics',
      galleryRoute: '/events/openmicnight-aug31'
    },
    {
      id: 3,
      title: "Bulleya (Orientation)",
      date: "August 16, 2024",
      time: "10:30 AM",
      location: "H05",
      description: "A wonderful morning of live performances from our talented members.",
      image: '/events/Orientation2024-3.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/K36PvD_09bk'
    },
    {
      id: 2,
      title: "Jiye Kyun (Orientation)",
      date: "August 16, 2024",
      time: "10:30 AM",
      location: "H05",
      description: "A wonderful morning of live performances from our talented members.",
      image: '/events/Orientation2024-2.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/e9Fdm7klZwc'
    },
    {
      id: 1,
      title: "Rolling in the Deep (Orientation)",
      date: "August 16, 2024",
      time: "10:30 AM",
      location: "H05",
      description: "A wonderful morning of live performances from our talented members.",
      image: '/events/Orientation2024-1.jpg',
      category: 'Performances',
      youtubeUrl: 'https://www.youtube.com/embed/-AlngyopEG0'
    },
  ];
  
  export const upcomingEvents: Event[] = [
    {
      id: 4,
      title: "Winter Concert",
      date: "December 15, 2025",
      time: "6:00 PM",
      location: "H05",
      description: "Our annual winter concert featuring performances from all sections.",
      image: "https://images.unsplash.com/photo-1620642477222-7aef692dd0df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBjb25jZXJ0fGVufDB8MnwwfHx8MA%3D%3D",
      category: 'Performances',
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
      category: 'Open Mics'
    },
    {
      id: 6,
      title: "Music Theory Workshop",
      date: "October 5, 2025",
      time: "4:00 PM",
      location: "Music Room",
      description: "Learn the fundamentals of music theory and composition.",
      image: "https://images.unsplash.com/photo-1564019998-ac86b13fdadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3b3Jrc2hvcHN8ZW58MHwyfDB8fHww",
      category: 'Workshops'
    }
  ];