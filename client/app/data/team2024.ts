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

export const coreMembers2024: TeamMember[] = [
  { id: 1, name: 'Nivedh Biju', role: 'Pianist', image: '/crew/Team2024/Nivedh.png', bio: 'Accomplished classical pianist with extensive performance experience and a deep understanding of musical theory.' },
  { id: 2, name: 'Kshitij Singh', role: 'Guitarist', image: '/crew/Team2024/Kshitij.jpg', bio: 'Versatile musician excelling in both guitar and drums, with a passion for creating innovative fusion compositions.' },
  { id: 3, name: 'Rikitha Ravi', role: 'Vocalist', image: '/crew/Team2024/Rikitha.jpg', bio: 'Dedicated vocalist with specialized training in Carnatic music and a gift for emotive expression.' },
];

export const coordinators2024: TeamMember[] = [
  { id: 1, name: 'DJ Sharon', role: 'Coordinator', image: '/crew/Team2024/DJ.jpg', bio: 'Skilled beatboxer and professional music producer with expertise in sound mixing and production.' },
  { id: 2, name: 'Dikshant Ubale', role: 'Coordinator', image: '/crew/Team2024/Dikshant.jpg', bio: 'Experienced drummer with exceptional event management skills and organizational expertise.' },
  { id: 3, name: 'Harith Y', role: 'Coordinator', image: '/crew/Team2024/Harith.jpg', bio: 'Multi-instrumentalist proficient, with additional expertise in composition and video editing.' },
  { id: 4, name: 'Meera K', role: 'Coordinator', image: '/crew/Team2024/MeeraK.jpg', bio: 'Classically trained vocalist with a passion for social media and digital engagement.' },
  { id: 5, name: 'Meera R', role: 'Coordinator', image: '/crew/Team2024/MeeraR.jpg', bio: 'Professional vocalist with a creative edge in graphic design and visual arts.' },
  { id: 6, name: 'Shriya Y', role: 'Coordinator', image: '/crew/Team2024/Shriya.jpg', bio: 'Multi-talented artist combining vocal prowess, songwriting skills, and guitar expertise.' },
];

export const crew2024: TeamMember[] = [
  { id: 1, name: 'Omkar Anand Iyer', role: 'Lead Guitarist', image: '/crew/Team2024/Omkar.jpg', bio: 'Masterful guitarist with exceptional command over both electric and acoustic styles.' },
  { id: 2, name: 'Harini', role: 'Vocalist', image: '/crew/Team2024/Harini.jpg', bio: 'Versatile vocalist with a captivating voice and proficiency across multiple musical genres.' },
  { id: 3, name: 'Adi Khera', role: 'Bassist', image: '/crew/Team2024/Adi.jpg', bio: 'Groove-oriented musician with expertise in guitar, drawing from a rich jazz background.' },
  { id: 4, name: 'Tarun Mamillapalli', role: 'Keyboardist', image: '/crew/Team2024/Tarun.jpg', bio: 'Classically trained pianist with a natural talent for improvisation and creative expression.' },
  { id: 5, name: 'Bhadresh L', role: 'Vocalist', image: '/crew/Team2024/Bhadresh.jpg', bio: 'Dynamic vocalist with extensive experience performing in various band settings.' },
  { id: 6, name: 'Yashas', role: 'Percussionist', image: '/crew/Team2024/Yashas.jpg', bio: 'Skilled percussionist proficient in both drums and tabla, with a talent for blending cultural rhythms.' },
];

export const mentors2024: TeamMember[] = [
  { id: 1, name: 'Hilton', role: 'Former Club Core', image: '/crew/Team2024/Hilton.jpg', bio: 'Experienced vocalist with specialized training in Carnatic music traditions.' },
  { id: 2, name: 'Vishnu', role: 'Former Club Core', image: '/crew/Team2024/Vishnu.jpg', bio: 'Gifted pianist with a natural talent for musical expression.' },
  { id: 3, name: 'Anmol', role: 'Former Club Core', image: '/crew/Team2024/Anmol.jpg', bio: 'Professional guitarist with extensive performance and teaching experience.' },
]; 