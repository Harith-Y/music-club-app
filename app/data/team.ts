export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    social?: {
      github?: string;
      linkedin?: string;
      instagram?: string;
    };
  }
  
  export const coreMembers: TeamMember[] = [
    { id: 1, name: 'Nivedh Biju', role: 'Pianist', image: '/cores/Nivedh.png', bio: 'Classical Pianist with many years of experience.' },
    { id: 2, name: 'Kshitij', role: 'Guitarist', image: '/cores/Kshitij.jpg', bio: 'Guitarist and a Drummer with a passion for fusion.' },
    { id: 3, name: 'Rikitha Ravi', role: 'Vocalist', image: '/cores/Rikitha.jpg', bio: 'Vocalist specializing in Carnatic music.' },
  ];
  
  export const coordinators: TeamMember[] = [
    { id: 1, name: 'DJ Sharon', role: 'Coordinator', image: '/coordinators/DJ.jpg', bio: 'Pianist, Beatboxer, DAW Expert and Professional Music Producer.' },
    { id: 2, name: 'Dikshant Ubale', role: 'Coordinator', image: '/coordinators/Dikshant.jpg', bio: 'Drummer and Event Management Expert.' },
    { id: 3, name: 'Harith Y', role: 'Coordinator', image: '/coordinators/Harith.jpg', bio: 'Classical Pianist with 8 years of experience, Music Composer and Video Editor.' },
    { id: 4, name: 'Meera K', role: 'Coordinator', image: '/coordinators/MeeraK.jpg', bio: 'Classical Vocalist and Social media enthusiast.' },
    { id: 5, name: 'Meera R', role: 'Coordinator', image: '/coordinators/MeeraR.jpg', bio: 'Professional Vocalist and Graphic designer.' },
    { id: 6, name: 'Shriya Y', role: 'Coordinator', image: '/coordinators/Shriya.jpg', bio: 'Vocalist, Songwriter and Experienced Guitarist.' },
  ];
  
  export const crew: TeamMember[] = [
    { id: 1, name: 'Omkar Anand Iyer', role: 'Lead Guitarist', image: '/crew/Omkar.jpg', bio: 'Electric and Acoustic guitar virtuoso with a love for rock music.' },
    { id: 2, name: 'Harini', role: 'Vocalist', image: '/crew/Harini.jpg', bio: 'Versatile singer with a sweet voice, proficient in multiple genres.' },
    { id: 3, name: 'Adi Khera', role: 'Bassist', image: '/crew/Adi.jpg', bio: 'Groove-oriented Guitarist and Bassist with jazz background.' },
    { id: 4, name: 'Tarun Mamillapalli', role: 'Keyboardist', image: '/crew/Tarun.jpg', bio: 'Classically trained pianist with a flair for improvisation.' },
    { id: 5, name: 'Bhadresh L', role: 'Vocalist', image: '/crew/Bhadresh.jpg', bio: 'Rhythmic powerhouse with experience in multiple bands.' },
    { id: 6, name: 'Yashas', role: 'Percussionist', image: '/crew/Yashas.jpg', bio: 'Drummer and Tabla player with a knack for cross-cultural rhythms.' },
  ];
  
  export const mentors: TeamMember[] = [
    { id: 1, name: 'Hilton', role: 'Former Club Core', image: '/mentors/Hilton.png', bio: 'Vocalist trained in Carnatic Music.' },
    { id: 2, name: 'Vishnu', role: 'Former Club Core', image: '/mentors/Vishnu.png', bio: 'Talented Pianist.' },
    { id: 3, name: 'Anmol', role: 'Former Club Core', image: '/mentors/Anmol.png', bio: 'Professional Guitarist.' },
  ];
