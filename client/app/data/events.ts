export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    registrationLink?: string;
  }
  
  export const pastEvents: Event[] = [
    {
      id: 6,
      title: "Unofficial Open Mic Night",
      date: "April 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/UnofficialOpenMicApril5.jpg',
      registrationLink: "#"
    },
    {
      id: 5,
      title: "Art of Noise",
      date: "March 30, 2025",
      time: "6:00 PM",
      location: "Main Stage",
      description: "A showcase of experimental sound design and electronic music production.",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      registrationLink: "https://forms.gle/GrCrQL9VYE1L1nQd8"
    },
    {
      id: 4,
      title: "Open Mic Night",
      date: "March 11, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicMarch11.jpg',
      registrationLink: "https://forms.gle/DU5h1GB93rY7Ek6T9"
    },
    {
      id: 3,
      title: "Workshop: Music Production",
      date: "March 5, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "Learn the basics of music production and digital audio workstations.",
      image: '/events/OpenMicMarch5.jpg',
      registrationLink: "https://forms.gle/hCTKN1Rrw1So8cs37"
    },
    {
      id: 2,
      title: "Open Stage Night",
      date: "February 2, 2025",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members along with stories, poems, shayaris, raps and more.",
      image: '/events/OpenMicFebruary2.jpg',
      registrationLink: "https://forms.gle/M7chRkYD8EBmSZ2D7"
    },
    {
      id: 1,
      title: "Open Mic Night",
      date: "November 9, 2024",
      time: "8:00 PM",
      location: "Music Room",
      description: "An evening of live performances from our talented members.",
      image: '/events/OpenMicNovember9.jpg',
      registrationLink: "https://forms.gle/UZJm6wCpGrvxMM7EA"
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
      image: "https://images.unsplash.com/photo-1620642477222-7aef692dd0df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBjb25jZXJ0fGVufDB8MnwwfHx8MA%3D%3D"
    },
    {
      id: 5,
      title: "Jazz Night",
      date: "November 10, 2025",
      time: "7:00 PM",
      location: "Cafeteria",
      description: "An evening of smooth jazz and improvisation.",
      image: "https://images.unsplash.com/photo-1621841019942-2a8c701ebc30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGphenolMjBuaWdodHxlbnwwfDJ8MHx8fDA%3D"
    },
    {
      id: 6,
      title: "Music Theory Workshop",
      date: "October 5, 2025",
      time: "4:00 PM",
      location: "Music Room",
      description: "Learn the fundamentals of music theory and composition.",
      image: "https://images.unsplash.com/photo-1564019998-ac86b13fdadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3b3Jrc2hvcHN8ZW58MHwyfDB8fHww"
    }
  ];