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
  }
  
  export const pastEvents: Event[] = [
    {
      id: 13,
      title: "Unofficial Open Mic Night",
      date: "April 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/UnofficialOpenMicApril5.jpg',
      category: 'Open Mics'
    },
    {
      id: 12,
      title: "Art of Noise",
      date: "March 30, 2025",
      time: "6:30 PM",
      location: "Main Stage",
      description: "A showcase of experimental sound design and electronic music production.",
      image: "/events/ArtOfNoise.png",
      registrationLink: "https://forms.gle/GrCrQL9VYE1L1nQd8",
      category: 'Competitions'
    },
    {
      id: 12,
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
      id: 11,
      title: "Pixsonic X Voxels",
      date: "March 30, 2025",
      time: "1:00 PM",
      location: "H05",
      description: "A showcase of experimental sound design and electronic music production.",
      image: "/events/PixsonicXVoxels.png",
      registrationLink: "https://forms.gle/5qR5WMhS2Rs8tWVx7",
      category: 'Competitions'
    },
    {
      id: 10,
      title: "Open Mic Night",
      date: "March 11, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicMarch11.jpg',
      registrationLink: "https://forms.gle/DU5h1GB93rY7Ek6T9",
      category: 'Open Mics'
    },
    {
      id: 9,
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
      id: 8,
      title: "Open Stage Night",
      date: "February 2, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members along with stories, poems, shayaris, raps and more.",
      image: '/events/OpenMicFebruary2.jpg',
      registrationLink: "https://forms.gle/M7chRkYD8EBmSZ2D7",
      category: 'Open Mics'
    },
    {
      id: 7,
      title: "Music Reel Challenge",
      date: "January 1, 2025",
      time: "All Day",
      location: "Instagram",
      description: "Musicians of IIITDM ! Get ready to showcase you talent and be featured on the Music Club Instagram page.",
      image: '/events/MusicReelChallenge.jpg',
      registrationLink: "https://forms.gle/P7ft2r92SSeoT31o7",
      category: 'Competitions'
    },
    {
      id: 6,
      title: "Open Mic Night",
      date: "November 9, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicNovember9.jpg',
      registrationLink: "https://forms.gle/UZJm6wCpGrvxMM7EA",
      category: 'Open Mics'
    },
    {
      id: 5,
      title: "Spooky Symphonies",
      date: "October 19, 2025",
      time: "6:00 PM",
      location: "Open Air Theatre",
      description: "A showcase of experimental sound design and electronic music production.",
      image: "/events/SpookySymphonies.jpg",
      registrationLink: "https://forms.gle/ziAvj19nCU4h6eLj9",
      category: 'Competitions'
    },
    {
      id: 4,
      title: "Open Mic Night",
      date: "August 31, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicAugust31.jpg',
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSelkpTGhxMxEuojAIPusqn7NdhrTgFti8cbEAjVCCBg1OxFHQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAabKzmPnBJRiCtzElxUb8nQcsBTkxguNC1jwqhWJA3QQUkmZPQFvhaO-QpA_aem_TN4C4Nm6qV1njYskj7YLgg",
      category: 'Open Mics'
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