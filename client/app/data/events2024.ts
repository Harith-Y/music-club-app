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
    // image: "/events/events2024-25/Unofficial_Open_Mic_April_2025/UnofficialOpenMicApril5.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FUnofficial_Open_Mic_April_2025%2FUnofficialOpenMicApril5.jpg?alt=media&token=03a531c5-cb77-4936-afd6-29ef85410027",
    category: "Open Mics",
    galleryRoute: "/2024events/unofficial_open_mic-april-2025",
    order: 0
  },
  {
    id: 16,
    title: "Art of Noise",
    date: "March 30, 2025",
    time: "6:30 PM",
    location: "Main Stage",
    description: "A groundbreaking showcase of experimental soundscapes and avant-garde electronic compositions.",
    // image: "/events/events2024-25/Art_of_Noise_2025/ArtOfNoise.png",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FArt_of_Noise_2025%2FArtOfNoise.png?alt=media&token=98f2b8d0-2ee6-43a9-960c-17c937bf44c5",
    registrationLink: "https://forms.gle/GrCrQL9VYE1L1nQd8",
    category: "Competitions",
    galleryRoute: "/2024events/art_of_noise-2025",
    order: 1
  },
  {
    id: 15,
    title: "Pixsonic X Voxels",
    date: "March 30, 2025",
    time: "1:00 PM",
    location: "H05",
    description: "A fusion of visual art and sound design, where digital creativity meets musical innovation.",
    // image: "/events/events2024-25/Pixsonic_X_Voxels_2025/PixsonicXVoxels.png",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FPixsonic_X_Voxels_2025%2FPixsonicXVoxels.png?alt=media&token=aab083bf-ffbf-4edc-948d-1653bf95afe5",
    registrationLink: "https://forms.gle/5qR5WMhS2Rs8tWVx7",
    category: "Competitions",
    galleryRoute: "/2024events/pixsonic_x_voxels-2025",
    order: 2
  },
  {
    id: 14,
    title: "3rd Open Mic Night",
    date: "March 11, 2025",
    time: "8:00 PM",
    location: "Music Room",
    description: "A vibrant evening of diverse musical performances and creative expressions.",
    // image: "/events/events2024-25/Open_Mic_March_2025/OpenMicMarch11.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FOpenMicMarch11.jpg?alt=media&token=6423f36f-98e1-415f-996c-bcbc2119debd",
    registrationLink: "https://forms.gle/DU5h1GB93rY7Ek6T9",
    category: "Open Mics",
    galleryRoute: "/2024events/open_mic-march-2025",
    order: 3
  },
  {
    id: 13,
    title: "Workshop: How to form a Band",
    date: "March 5, 2025",
    time: "8:00 PM",
    location: "Music Room",
    description: "A week-long workshop covering different instruments each day: Vocals & Beatboxing, Guitar, Keyboard, Drums, and Mixing - everything you need to form your perfect band.",
    // image: "/events/events2024-25/Workshop_March_2025/WorkshopMarch5.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FWorkshop_March_2025%2FWorkshopMarch5.jpg?alt=media&token=6b2e2990-f858-4bd3-b68a-53ccd2508318",
    registrationLink: "https://forms.gle/hCTKN1Rrw1So8cs37",
    category: "Workshops",
    galleryRoute: "/2024events/workshop_how_to_form_a_band-march-2025",
    order: 4
  },
  {
    id: 12,
    title: "Open Stage Night - 1",
    date: "February 2, 2025",
    time: "8:00 PM",
    location: "Music Room",
    description: "A celebration of artistic diversity featuring music, poetry, storytelling, and spoken word performances.",
    // image: "/events/events2024-25/Open_Mic_February_2025/OpenMicFebruary2.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_February_2025%2FOpenMicFebruary2.jpg?alt=media&token=36c391a9-4e21-4f7c-aa3a-671cc7470d50",
    registrationLink: "https://forms.gle/M7chRkYD8EBmSZ2D7",
    category: "Open Mics",
    galleryRoute: "/2024events/open_stage-feb-2025",
    order: 5
  },
  {
    id: 11,
    title: "Republic Day (Club Performance)",
    date: "January 26, 2025",
    time: "7:00 AM",
    location: "Open Air Theatre",
    description: "Patriotic melodies and cultural performances to celebrate our nation's spirit.",
    // image: "/events/events2024-25/Republic_Day_2025/RepublicDay2025.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FRepublic_Day_2025%2FRepublicDay2025.jpg?alt=media&token=279f0048-2663-4f8b-b084-892d048ce298",
    category: "Performances",
    galleryRoute: "/2024events/republic_day-2025",
    order: 6
  },
  {
    id: 10,
    title: "Music Reel Challenge",
    date: "January 1, 2025",
    time: "All Day",
    location: "Instagram",
    description: "Showcase your musical talent in 60 seconds and get featured on our official Instagram page.",
    // image: "/events/events2024-25/Music_Reel_Challenge_2025/MusicReelChallenge2025.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FMusicReelChallenge2025.jpg?alt=media&token=41f56c8b-427d-447e-a939-cca96b08eac1",
    registrationLink: "https://forms.gle/P7ft2r92SSeoT31o7",
    category: "Competitions",
    galleryRoute: "/2024events/music_reel_challenge-2025",
    order: 7
  },
  {
    id: 9,
    title: "CVIP (Club Performance)",
    date: "December 19, 2024",
    time: "5:00 PM",
    location: "H05",
    description: "A special performance showcasing the club's finest musicians at the CVIP event.",
    // image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FCVIP_2024%2FCVIP2024.png?alt=media&token=5fb56869-d5d5-4435-ba97-bc4304313427",
    category: "Performances",
    galleryRoute: "/2024events/cvip-2024",
    order: 8
  },
  {
    id: 8,
    title: "2nd Open Mic Night",
    date: "November 9, 2024",
    time: "8:00 PM",
    location: "Music Room",
    description: "An evening of fresh talent and musical experimentation in our signature open mic format.",
    // image: "/events/events2024-25/Open_Mic_November_2024/OpenMicNovember9.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_November_2024%2FOpenMicNovember9.jpg?alt=media&token=25b18b77-1494-4235-b315-b393b967c89d",
    registrationLink: "https://forms.gle/UZJm6wCpGrvxMM7EA",
    category: "Open Mics",
    galleryRoute: "/2024events/open_mic-nov-2024",
    order: 9
  },
  {
    id: 7,
    title: "Meraki (Club Performance)",
    date: "October 20, 2024",
    time: "10:00 PM",
    location: "Open Air Theatre",
    description: "A grand musical spectacle under the stars, featuring our most talented performers.",
    // image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FMeraki2024.jpg?alt=media&token=b86059fa-c699-44fc-86f6-086c89b23360",
    category: "Performances",
    galleryRoute: "/2024events/meraki-2024",
    order: 10
  },
  {
    id: 6,
    title: "Spooky Symphonies: Battle of Bands Meraki",
    date: "October 19, 2024",
    time: "6:00 PM",
    location: "Open Air Theatre",
    description: "A thrilling Halloween-themed battle of bands where musical prowess meets creative costumes.",
    // image: "/events/events2024-25/Spooky_Symphonies_2024/SpookySymphonies.png",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FSpooky_Symphonies_2024%2FSpookySymphonies.png?alt=media&token=73ace022-01d2-46cd-9a57-a1ed28c24a83",
    viewBandsLink: "/meraki2024/bands",
    registrationLink: "https://forms.gle/ziAvj19nCU4h6eLj9",
    category: "Competitions",
    order: 11
  },
  {
    title: "Onam (Club Performance)",
    date: "September 22, 2024",
    time: "8:00 PM",
    location: "Ashwatha Hostel",
    description: "Traditional and contemporary musical performances celebrating the harvest festival of Onam.",
    // image: "/events/events2024-25/Onam_2024/Onam2024.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOnam_2024%2FOnam2024.jpg?alt=media&token=4ec2da95-d99c-43f5-80e4-56b85a53b046",
    category: "Performances" as const,
    galleryRoute: "/2024events/onam-2024",
    id: 18,
    order: 12
  },
  {
    id: 5,
    title: "Ganesh Chaturthi (Club Performance)",
    date: "September 7, 2024",
    time: "3:00 PM",
    location: "Ashwatha Hostel",
    description: "Traditional and contemporary musical performances celebrating the festival of Lord Ganesha.",
    // image: "/events/events2024-25/Ganesh_Chaturthi_2024/GaneshChaturthi2024-2.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FGanesh_Chaturthi_2024%2FGaneshChaturthi2024-2.jpg?alt=media&token=a9692f14-8abd-4478-95c7-04ff6b256b0a",
    category: "Performances",
    galleryRoute: "/2024events/ganesh_chaturthi-2024",
    order: 13
  },
  {
    id: 4,
    title: "1st Open Mic Night",
    date: "August 31, 2024",
    time: "8:00 PM",
    location: "Music Room",
    description: "The inaugural open mic night, setting the stage for future musical collaborations.",
    // image: "/events/events2024-25/Open_Mic_August_2024/OpenMicAugust31.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FOpenMicAugust31.jpg?alt=media&token=942a174e-7522-40dd-935d-81e253f402d3",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSelkpTGhxMxEuojAIPusqn7NdhrTgFti8cbEAjVCCBg1OxFHQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAabKzmPnBJRiCtzElxUb8nQcsBTkxguNC1jwqhWJA3QQUkmZPQFvhaO-QpA_aem_TN4C4Nm6qV1njYskj7YLgg",
    category: "Open Mics",
    galleryRoute: "/2024events/open_mic-aug-2024",
    order: 14
  },
  {
    id: 3,
    title: "Blastroduction (Club Performance)",
    date: "August 27, 2024",
    time: "6:00 PM",
    location: "H05",
    description: "A spectacular showcase introducing the Music Club's talent to the institute, featuring our finest performers and diverse musical styles.",
    // image: "/events/events2024-25/Blastroduction_2024/Media/Blastroduction2024.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FBlastroduction_2024%2FMedia%2FBlastroduction2024.jpg?alt=media&token=28fe348b-7c59-4504-a905-a6282195b587",
    category: "Performances",
    galleryRoute: "/2024events/blastroduction-2024",
    order: 15
  },
  {
    id: 2,
    title: "Orientation (Club Performance)",
    date: "August 16, 2024",
    time: "10:30 AM",
    location: "H05",
    description: "A welcoming showcase introducing new students to the musical talent at our institute.",
    // image: "/events/events2024-25/Orientation_2024/Orientation2024-1.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOrientation_2024%2FOrientation2024-1.jpg?alt=media&token=f99c4da6-a37d-46c9-aae5-4fd6302a1a8c",
    category: "Performances",
    galleryRoute: "/2024events/orientation-2024",
    order: 16
  },
  {
    id: 1,
    title: "Independence Day (Club Performance)",
    date: "August 15, 2024",
    time: "7:00 AM",
    location: "Open Air Theatre",
    description: "Patriotic performances and cultural expressions celebrating our nation's independence.",
    // image: "/events/events2024-25/Independence_Day_2024/IndependenceDay2024.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FIndependence_Day_2024%2FIndependenceDay2024.jpg?alt=media&token=d322e0f8-4ae2-4b95-8e86-30ca5d054b8e",
    category: "Performances",
    galleryRoute: "/2024events/independence_day-2024",
    order: 17
  }
].map((item, index) => ({
  ...item,
  order: index,
  category: item.category as 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops'
})); 

export const upcomingEvents: Event[] = [];
