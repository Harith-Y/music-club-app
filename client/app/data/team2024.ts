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
  { 
    id: 1, 
    name: 'Nivedh Biju', 
    role: 'Pianist', 
    // image: '/crew/Team2024/Nivedh.png', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FNivedh.png?alt=media&token=c686dc3e-fd6a-4a46-892e-bf2401b0cef8",
    bio: 'Accomplished classical pianist with extensive performance experience and a deep understanding of musical theory.' 
  },
  { 
    id: 2, 
    name: 'Kshitij Singh', 
    role: 'Guitarist', 
    // image: '/crew/Team2024/Kshitij.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FKshitij.jpg?alt=media&token=0d4f0e1a-802d-47c6-b40d-5c28dbe0d503",
    bio: 'Versatile musician excelling in both guitar and drums, with a passion for creating innovative fusion compositions.' 
  },
  { 
    id: 3, 
    name: 'Rikitha Ravi', 
    role: 'Vocalist', 
    // image: '/crew/Team2024/Rikitha.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FRikitha.jpg?alt=media&token=8c48bb8d-2b24-42c5-9538-2c32ed850842",
    bio: 'Dedicated vocalist with specialized training in Carnatic music and a gift for emotive expression.' 
  }
];

export const coordinators2024: TeamMember[] = [
  { 
    id: 1, 
    name: 'DJ Sharon', 
    role: 'Coordinator', 
    // image: '/crew/Team2024/DJ.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FDJ.jpg?alt=media&token=3a9bc340-0555-48eb-a4ea-b3d483463f65",
    bio: 'Skilled beatboxer and professional music producer with expertise in sound mixing and production.' 
  },
  { 
    id: 2, 
    name: 'Dikshant Ubale', 
    role: 'Coordinator', 
    // image: '/crew/Team2024/Dikshant.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FDikshant.jpg?alt=media&token=68504698-f5c3-4e20-bb81-bfb18f803527",
    bio: 'Experienced drummer with exceptional event management skills and organizational expertise.' 
  },
  { 
    id: 3, 
    name: 'Harith Y', 
    role: 'Coordinator', 
    // image: '/crew/Team2024/Harith.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FHarith.jpg?alt=media&token=9483fc87-5eb4-4362-9011-66098e8f6573",
    bio: 'Multi-instrumentalist proficient, with additional expertise in composition and video editing.' 
  },
  { 
    id: 4, 
    name: 'Meera K', 
    role: 'Coordinator', 
    // image: '/crew/Team2024/MeeraK.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FMeeraK.jpg?alt=media&token=67aab4f9-9e60-4ca9-8527-99825af021b3",
    bio: 'Classically trained vocalist with a passion for social media and digital engagement.' 
  },
  { 
    id: 5, 
    name: 'Meera R', 
    role: 'Coordinator', 
    // image: '/crew/Team2024/MeeraR.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FMeeraR.jpg?alt=media&token=a73a5e93-c90d-4107-bb81-88d3c7e5a572",
    bio: 'Professional vocalist with a creative edge in graphic design and visual arts.' 
  },
  { 
    id: 6, 
    name: 'Shriya Y', 
    role: 'Coordinator', 
    // image: '/crew/Team2024/Shriya.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FShriya.jpg?alt=media&token=f28ab535-2161-481c-8756-2fbfae51de76",
    bio: 'Multi-talented artist combining vocal prowess, songwriting skills, and guitar expertise.' 
  }
];

export const crew2024: TeamMember[] = [
  { 
    id: 1, 
    name: 'Omkar Anand Iyer', 
    role: 'Lead Guitarist', 
    // image: '/crew/Team2024/Omkar.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FOmkar.jpg?alt=media&token=f7efe848-5b97-4439-bbc4-bffb98b3b408",
    bio: 'Masterful guitarist with exceptional command over both electric and acoustic styles.' 
  },
  { 
    id: 2, 
    name: 'Harini', 
    role: 'Vocalist', 
    // image: '/crew/Team2024/Harini.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FHarini.jpg?alt=media&token=810a2258-2745-4ea6-9ee4-2c959e2fdb8b",
    bio: 'Versatile vocalist with a captivating voice and proficiency across multiple musical genres.' 
  },
  { 
    id: 3, 
    name: 'Adi Khera', 
    role: 'Bassist', 
    // image: '/crew/Team2024/Adi.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FAdi.jpg?alt=media&token=a118994c-df83-4e7b-ad84-c7b9e31d67af",
    bio: 'Groove-oriented musician with expertise in guitar, drawing from a rich jazz background.' 
  },
  { 
    id: 4, 
    name: 'Tarun Mamillapalli', 
    role: 'Keyboardist', 
    // image: '/crew/Team2024/Tarun.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FTarun.jpg?alt=media&token=0bc3b24e-9f6c-4f4e-a633-c0f23c531901",
    bio: 'Classically trained pianist with a natural talent for improvisation and creative expression.' 
  },
  { 
    id: 5, 
    name: 'Bhadresh L', 
    role: 'Vocalist', 
    // image: '/crew/Team2024/Bhadresh.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FBhadresh.jpg?alt=media&token=55bd1e38-1221-4bce-a9d5-6aa88bb11d2e",
    bio: 'Dynamic vocalist with extensive experience performing in various band settings.' 
  },
  { 
    id: 6, 
    name: 'Yashas', 
    role: 'Percussionist', 
    // image: '/crew/Team2024/Yashas.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FYashas.jpg?alt=media&token=d9ea7e3e-0d4f-4e68-bdfd-507fd1022772",
    bio: 'Skilled percussionist proficient in both drums and tabla, with a talent for blending cultural rhythms.' 
  }
];

export const mentors2024: TeamMember[] = [
  { 
    id: 1, 
    name: 'Hilton', 
    role: 'Former Club Core', 
    // image: '/crew/Team2024/Hilton.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FHilton.jpg?alt=media&token=95822754-9f1d-4838-9509-0d7be2560d0a",
    bio: 'Experienced vocalist with specialized training in Carnatic music traditions.' 
  },
  { 
    id: 2, 
    name: 'Vishnu', 
    role: 'Former Club Core', 
    // image: '/crew/Team2024/Vishnu.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FVishnu.jpg?alt=media&token=8c580207-d12e-4aeb-897b-d821f45f428e",
    bio: 'Gifted pianist with a natural talent for musical expression.' 
  },
  { 
    id: 3, 
    name: 'Anmol', 
    role: 'Former Club Core', 
    // image: '/crew/Team2024/Anmol.jpg', 
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Crew%2FTeam2024%2FAnmol.jpg?alt=media&token=d45f6d3c-9bf6-434c-8e1b-b34cb26d8d77",
    bio: 'Professional guitarist with extensive performance and teaching experience.' 
  }
]; 
