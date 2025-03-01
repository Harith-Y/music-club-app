export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
    description: string;
  }
  
  export const events: Event[] = [
    {
      id: 1,
      title: 'Art of Noise',
      date: 'March 28, 2025',
      location: 'Open Stage',
      image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Join us for a night of amazing performances featuring the best musical talents.',
    },
    {
      id: 2,
      title: 'Open Mic Night',
      date: 'March 25, 2025',
      location: 'Music Room',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Show off your talent at our monthly open mic night. All students are welcome to participate.',
    },
    {
      id: 3,
      title: 'Workshop: Music Production',
      date: 'March 15, 2025',
      location: 'Exhibition Hall',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Learn the basics of music production with professionals. Limited seats available.',
    },
  ];