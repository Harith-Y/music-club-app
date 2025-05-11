export interface GalleryItem {
    id: number;
    category: string;
    image: string;
    title: string;
    type: 'image' | 'video';
    videoUrl?: string;
    event?: string;
    order?: number;
  }
  
  // Helper function to generate a new ID
  export function generateNewId(items: GalleryItem[]): number {
    if (items.length === 0) return 1;
    return Math.max(...items.map(item => item.id)) + 1;
  }
  
  // Helper function to insert an item at a specific position
  export function insertGalleryItem(items: GalleryItem[], newItem: Omit<GalleryItem, 'id'>, position: number): GalleryItem[] {
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
  
  export const galleryItems: GalleryItem[] = [
    {
      category: "jams",
      // image: "/events/events2024-25/Unofficial_Open_Mic_April_2025/Media/DJPdoFRSPMj-1.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FUnofficial_Open_Mic_April_2025%2FMedia%2FDJPdoFRSPMj-1.jpg?alt=media&token=263626dc-5435-4309-bfa7-c90dc0634d08",
      title: "Vijay (Vocals)",
      type: 'video' as const,
      videoUrl: "https://www.instagram.com/p/DJPdoFRSPMj/",
      event: "4rth [Unofficial] Open Mic Night",
      id: 82,
      order: 0
    },
    {
      category: "performances",
      // image: "/gallery/gallery2024-25/Team2024-25/Samgatha.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FSamgatha.jpg?alt=media&token=090631a1-da94-4ab5-843e-752a11fc9424",
      title: "Dil Se Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/2NGJ1bPrzUg",
      event: "Art of Noise",
      id: 62,
      order: 1
    },
    {
      category: "performances",
      // image: "/gallery/gallery2024-25/Team2024-25/Samgatha.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FSamgatha.jpg?alt=media&token=090631a1-da94-4ab5-843e-752a11fc9424",
      title: "For Whom the Bell Tolls Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/IpzZjpbhejQ",
      event: "Art of Noise",
      id: 61,
      order: 2
    },
    {
      category: "performances",
      // image: "/gallery/gallery2024-25/Team2024-25/Samgatha.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FSamgatha.jpg?alt=media&token=090631a1-da94-4ab5-843e-752a11fc9424",
      title: "We Will Rock You Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/ERPM28X17FI",
      event: "Art of Noise",
      id: 60,
      order: 3
    },
    {
      category: "performances",
      // image: "/gallery/gallery2024-25/Team2024-25/Samgatha.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FSamgatha.jpg?alt=media&token=090631a1-da94-4ab5-843e-752a11fc9424",
      title: "Nadaan Parindey Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/0KwCNBu5qQs",
      event: "Art of Noise",
      id: 59,
      order: 4
    },
    {
      category: "performances",
      // image: "/gallery/gallery2024-25/Team2024-25/Samgatha.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FSamgatha.jpg?alt=media&token=090631a1-da94-4ab5-843e-752a11fc9424",
      title: "Enter Sandman Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/tOMHFZN7zDM",
      event: "Art of Noise",
      id: 58,
      order: 5
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Art_of_Noise_2025/OpeningArtOfNoise.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FArt_of_Noise_2025%2FOpeningArtOfNoise.jpg?alt=media&token=00d0242b-0201-4275-838a-f31a25fc5c82",
      title: "Opening Ceremony",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/MMoPQU21OfM?si=lfeDcLykyQgmZvQK",
      event: "Art of Noise",
      id: 80,
      order: 6
    },
    {
      category: "covers",
      // image: "/events/events2024-25/Farewell_2025/QQZDdPWx_Ak-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FFarewell_2025%2FQQZDdPWx_Ak-SD.jpg?alt=media&token=88a953bc-7173-48db-a9ca-a50f96238bbe",
      title: "Dil Ibaadat Cover (Room 823)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/QQZDdPWx_Ak",
      event: "",
      id: 57,
      order: 7
    },
    {
      id: 1,
      category: "covers",
      // image: "/events/events2024-25/Farewell_2025/Room-823_Farewell.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FFarewell_2025%2FRoom-823_Farewell.jpg?alt=media&token=334f1ddf-d922-4584-a346-5000c5554981",
      title: "Hua Mein Cover (Room 823)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/RtaddCi6TFo",
      order: 8
    },
    {
      id: 2,
      category: "covers",
      // image: "/events/events2024-25/Farewell_2025/Ankit_Farewell.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FFarewell_2025%2FAnkit_Farewell.jpg?alt=media&token=836b9922-af55-49ee-9bd4-4c34ff57e5c0",
      title: "Bulleya Cover (Ankit's Band)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/esI3k-LUq4Y",
      order: 9
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_204014.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F20250311_204014.jpg?alt=media&token=e1492ef2-6846-471e-9ff6-0f8b8a7d308e",
      title: "Tarun M (Keyboard)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 51,
      order: 10
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_203522.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F20250311_203522.jpg?alt=media&token=6f95e100-7afe-480f-9eb8-fdd0faf6badd",
      title: "(Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 49,
      order: 11
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_204522.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F20250311_204522.jpg?alt=media&token=c5daad3c-a473-4b06-8f62-9d28a567dcc8",
      title: "Abhishek N (Vocals) and Vivek (Guitar)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 53,
      order: 12
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/zQpCUeZNyK0-HD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2FzQpCUeZNyK0-HD.jpg?alt=media&token=ccead909-2a7d-4319-aff3-91f39b8abab8",
      title: "Don'u Don'u Don'u - Soul Rock Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/zQpCUeZNyK0",
      event: "3rd Open Mic Night",
      id: 84,
      order: 13
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_205019.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F20250311_205019.jpg?alt=media&token=adaf8c53-4bab-4399-9464-fea4d13eddb6",
      title: "Asish (Vocals and Guitar)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 54,
      order: 14
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_203008.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F20250311_203008.jpg?alt=media&token=c08839ca-bdaa-4817-892c-f65168fb0a35",
      title: "(Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 55,
      order: 15
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_211059.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F20250311_211059.jpg?alt=media&token=91aa3806-131e-436e-9b72-232f2f75741b",
      title: "Ajitha Arvindh (Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 50,
      order: 16
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_205933.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F20250311_205933.jpg?alt=media&token=1678d778-65ea-4977-a58f-acd03a297700",
      title: "Suranjana (Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 52,
      order: 17
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/IMG-20250312-WA0004.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2FIMG-20250312-WA0004.jpg?alt=media&token=d69ed035-2aa7-4800-8656-1fcdc9bc5389",
      title: "Harith (Keyboard)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/HXZFzyHFFmY",
      event: "3rd Open Mic Night",
      id: 48,
      order: 18
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_March_2025/Media/7YoLSDp0968-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_March_2025%2FMedia%2F7YoLSDp0968-SD.jpg?alt=media&token=2e941a63-dbf6-4343-809a-c6816e752009",
      title: "Dharani and Meera R (Vocals)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/7YoLSDp0968",
      event: "3rd Open Mic Night",
      id: 47,
      order: 19
    },
    {
      category: "covers",
      // image: "/events/events2024-25/Workshop_March_2025/Media/QpGra9txmTQ-HQ.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FWorkshop_March_2025%2FMedia%2FQpGra9txmTQ-HQ.jpg?alt=media&token=c68a9f23-28df-449e-afab-4d6663ef4e94",
      title: "Demons - Band Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/QpGra9txmTQ",
      event: "Workshop: How to form a Band",
      id: 89,
      order: 20
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Republic_Day_2025/RepublicDay2025.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FRepublic_Day_2025%2FRepublicDay2025.jpg?alt=media&token=279f0048-2663-4f8b-b084-892d048ce298",
      title: "Jai Ho Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/-JMQtq8c0C8",
      event: "Republic Day (Club Performance)",
      id: 64,
      order: 21
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Republic_Day_2025/RepublicDay2025.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FRepublic_Day_2025%2FRepublicDay2025.jpg?alt=media&token=279f0048-2663-4f8b-b084-892d048ce298",
      title: "Vande Matharam - Maa Tujhe Salaam Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/eOeejRMA1UE",
      event: "Republic Day (Club Performance)",
      id: 63,
      order: 22
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/Image-627.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2FImage-627.png?alt=media&token=09774aff-fe36-41c3-b6a3-142818b437b0",
      title: "Vijay (Vocals)",
      type: 'video' as const,
      videoUrl: "https://www.instagram.com/p/C_WLbBNqObQ/",
      event: "1st Open Mic Night",
      id: 83,
      order: 23
    },
    {
      category: "team",
      // image: "/gallery/gallery2024-25/Team2024-25/Samgatha.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FSamgatha.jpg?alt=media&token=090631a1-da94-4ab5-843e-752a11fc9424",
      title: "Samgatha x Vashisht '2025",
      type: 'image' as const,
      id: 81,
      order: 24
    },
    {
      id: 3,
      category: "team",
      // image: "/gallery/gallery2024-25/Team2024-25/Republic-Day.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FRepublic-Day.jpg?alt=media&token=b0f595e4-9704-44e4-99d9-fae3dde98837",
      title: "Republic Day",
      type: 'image' as const,
      order: 25
    },
    {
      id: 4,
      category: "performances",
      // image: "/gallery/gallery2024-25/Enter_Sandman.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FEnter_Sandman.png?alt=media&token=1d6207f9-43b4-46d5-9b24-96d0aec0edb7",
      title: "Enter Sandman Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/hpURyv_xhu0",
      order: 26
    },
    {
      id: 5,
      category: "performances",
      // image: "/events/events2024-25/EXTERNAL_Saarang_2025/Saarang2025.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FEXTERNAL_Saarang_2025%2FSaarang2025.jpg?alt=media&token=0d683d01-6695-4112-a81a-985b0f904824",
      title: "Dream On Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/_S_q-sEy6Pg",
      order: 27
    },
    {
      id: 6,
      category: "performances",
      // image: "/events/events2024-25/EXTERNAL_Saarang_2025/Saarang2025.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FEXTERNAL_Saarang_2025%2FSaarang2025.jpg?alt=media&token=0d683d01-6695-4112-a81a-985b0f904824",
      title: "For Whom the Bell Tolls Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/zYfgVTm52_U",
      order: 28
    },
    {
      id: 7,
      category: "covers",
      // image: "/events/events2024-25/EXTERNAL_Saarang_2025/DrumsSolo.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FEXTERNAL_Saarang_2025%2FDrumsSolo.jpg?alt=media&token=838d4ee4-c62d-4178-953b-da37a5e3a251",
      title: "Drums Solo - Dikshant",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/G42Gx7FuPEc",
      order: 29
    },
    {
      id: 8,
      category: "covers",
      // image: "/events/events2024-25/EXTERNAL_Saarang_2025/ShriyaSolo.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FEXTERNAL_Saarang_2025%2FShriyaSolo.jpg?alt=media&token=3d6b6e64-9738-4cd3-9936-45fd8c3c28a8",
      title: "I Wanna Know What Love Is - Shriya Y Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/NtB7KgQwaCc",
      order: 30
    },
    {
      id: 9,
      category: "covers",
      // image: "/events/events2024-25/EXTERNAL_Saarang_2025/KeyboardSolo.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FEXTERNAL_Saarang_2025%2FKeyboardSolo.jpg?alt=media&token=e90cbe4e-5ef3-4dc5-8f92-9390d2eed597",
      title: "Keyboard Solo - Nivedh Biju",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/0bX-TSTKmEE",
      order: 31
    },
    {
      id: 10,
      category: "covers",
      // image: "/events/events2024-25/EXTERNAL_Saarang_2025/MeeraKSolo.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FEXTERNAL_Saarang_2025%2FMeeraKSolo.jpg?alt=media&token=d060f96e-c75b-4e4c-a432-5c9ddda661aa",
      title: "In case you don't Live Forever - Meera K Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/lx6hLpcRMjg",
      order: 32
    },
    {
      id: 11,
      category: "covers",
      // image: "/events/events2024-25/EXTERNAL_Saarang_2025/MeeraRSolo.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FEXTERNAL_Saarang_2025%2FMeeraRSolo.jpg?alt=media&token=a4f13701-0a95-4035-91ac-3c20d0c1443b",
      title: "No One - Meera R Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/GL4wmk8GBeQ",
      order: 33
    },
    {
      id: 12,
      category: "team",
      // image: "/gallery/gallery2024-25/Team2024-25/Saarang.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FSaarang.jpg?alt=media&token=0e9f7591-fa16-4d36-908c-5f1dc582b5f8",
      title: "Saarang 2025",
      type: 'image' as const,
      order: 34
    },
    {
      id: 13,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Harini.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FHarini.jpg?alt=media&token=71432fc5-0bb8-4372-9621-0ec696ee4aa1",
      title: "Harini",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/t46qLSQgBUY",
      order: 35
    },
    {
      id: 14,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Suranjana.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FSuranjana.jpg?alt=media&token=82ce02fc-b43c-4ad8-bc68-830436faaf27",
      title: "Suranjana Mary Paul Santiago",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/vv6BadAlzVs",
      order: 36
    },
    {
      id: 15,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Vijay.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FVijay.jpg?alt=media&token=a8e03fbd-26d4-4500-af7d-675a4ac85ada",
      title: "Vijay",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/31NE44FVR8g",
      order: 37
    },
    {
      id: 16,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Caitlin.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FCaitlin.jpg?alt=media&token=55215e9d-41c6-479c-bb01-02e7468bf888",
      title: "Caitlin",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/DUq0kznKRwU",
      order: 38
    },
    {
      id: 17,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Mayukha.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FMayukha.jpg?alt=media&token=8beeeaf0-1514-4c93-8662-f465b3058168",
      title: "Mayukha",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/_o3urkRycMg",
      order: 39
    },
    {
      id: 18,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Ranjan.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FRanjan.jpg?alt=media&token=bc840d9a-da7d-4555-8275-e211bc688d5b",
      title: "Ranjan",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/zBUYhD8EIyA",
      order: 40
    },
    {
      id: 19,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Benedict.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FBenedict.jpg?alt=media&token=845b7239-6833-4b18-930c-93344fc88bef",
      title: "Benedict I",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/OuMlbzoIhs8",
      order: 41
    },
    {
      id: 20,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/ShashwatSingh.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FShashwatSingh.jpg?alt=media&token=f8e28a42-070d-40ac-98fd-0e8fa61fc2bd",
      title: "Shashwat Singh",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/6LimLLpqOTE",
      order: 42
    },
    {
      id: 21,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Saniya.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FSaniya.jpg?alt=media&token=15b94b74-92b9-42f7-b9ca-a136c40f7fac",
      title: "Katkam Saniya",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/4iDT6WU6MtI",
      order: 43
    },
    {
      id: 22,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Duo.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FDuo.jpg?alt=media&token=59e976d8-fba8-4824-a3a7-6a18cf24aa93",
      title: "Anurag and Grishmank",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/nHTZT4Ky9qU",
      order: 44
    },
    {
      id: 23,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Tarun.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FTarun.jpg?alt=media&token=b1174d0b-bfb1-4905-bd20-93fd72113d38",
      title: "Tarun Mamillapalli",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/woGKn0s-mhc",
      order: 45
    },
    {
      id: 24,
      category: "competitions",
      // image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Benedict2.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMusic_Reel_Challenge_2025%2FSubmissions%2FBenedict2.jpg?alt=media&token=ffa0dfe2-c61b-46ee-8381-15f2f7d4ea27",
      title: "Benedict I",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/4D2zzB3mAVw",
      order: 46
    },
    {
      category: "performances",
      // image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FCVIP_2024%2FCVIP2024.png?alt=media&token=5fb56869-d5d5-4435-ba97-bc4304313427",
      title: "The Chain Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/mZSY_ommAyo",
      event: "CVIP",
      id: 68,
      order: 47
    },
    {
      category: "performances",
      // image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FCVIP_2024%2FCVIP2024.png?alt=media&token=5fb56869-d5d5-4435-ba97-bc4304313427",
      title: "Dream a Little Dream of Me Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/T66xfsmisgc",
      event: "CVIP",
      id: 67,
      order: 48
    },
    {
      category: "performances",
      // image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FCVIP_2024%2FCVIP2024.png?alt=media&token=5fb56869-d5d5-4435-ba97-bc4304313427",
      title: "Skyfall Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/hH1Gp6kmaUQ",
      event: "CVIP (Club Performance)",
      id: 66,
      order: 49
    },
    {
      category: "performances",
      // image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FCVIP_2024%2FCVIP2024.png?alt=media&token=5fb56869-d5d5-4435-ba97-bc4304313427",
      title: "Intehaan Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/vw5Wj1u8rrw",
      event: "CVIP (Club Performance)",
      id: 65,
      order: 50
    },
    {
      id: 25,
      category: "team",
      // image: "/gallery/gallery2024-25/Team2024-25/Meraki-Day1.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FMeraki-Day1.jpg?alt=media&token=2fa756df-4561-4e31-84d7-bb9def68b9ba",
      title: "Meraki Day 1",
      type: 'image' as const,
      order: 51
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_November_2024/Media/IMG-20241109-WA0009.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_November_2024%2FMedia%2FIMG-20241109-WA0009.jpg?alt=media&token=b396573c-5cd1-4a03-bd43-ae42c6c873aa",
      title: "Priyank, Harith and Grishmank (Guitar)",
      type: 'image' as const,
      videoUrl: "",
      event: "2nd Open Mic Night",
      id: 45,
      order: 52
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_November_2024/Media/_kAqrLvT-zM-HQ.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_November_2024%2FMedia%2F_kAqrLvT-zM-HQ.jpg?alt=media&token=2d69083c-0f45-413f-b7eb-08e57fce7d56",
      title: "Caitlin (Vocals) and Harith (Keyboard)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/_kAqrLvT-zM",
      event: "2nd Open Mic Night",
      id: 46,
      order: 53
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FMeraki2024.jpg?alt=media&token=b86059fa-c699-44fc-86f6-086c89b23360",
      title: "Let's Kill Tonight Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/NhMqICsZZfM",
      event: "Meraki (Club Performance)",
      id: 72,
      order: 54
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FMeraki2024.jpg?alt=media&token=b86059fa-c699-44fc-86f6-086c89b23360",
      title: "Muskaanein Jhooti Hai Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/xHauVEB3a48",
      event: "Meraki (Club Performance)",
      id: 71,
      order: 55
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FMeraki2024.jpg?alt=media&token=b86059fa-c699-44fc-86f6-086c89b23360",
      title: "Chandralekha Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/RQd9IN4N_xM",
      event: "Meraki (Club Performance)",
      id: 70,
      order: 56
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FMeraki2024.jpg?alt=media&token=b86059fa-c699-44fc-86f6-086c89b23360",
      title: "Urvasi Urvase X Sheela Ki Jawani Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/2jMVx2vp-gs",
      event: "Meraki (Club Performance)",
      id: 69,
      order: 57
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Meraki_2024/CKFhdkn-H6g-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FCKFhdkn-H6g-SD.jpg?alt=media&token=f9506417-cdcb-497e-b9c3-2575410b9db9",
      title: "Badass Cover (Day 0)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/CKFhdkn-H6g",
      event: "Meraki",
      id: 87,
      order: 58
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Meraki_2024/fLRv9_1ovVw.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FfLRv9_1ovVw-SD.jpg?alt=media&token=1c4b9bb3-bb55-447b-8770-4c402cf32f52",
      title: "Saibo Cover (Day 0)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/fLRv9_1ovVw",
      event: "Meraki",
      id: 98,
      order: 59
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Meraki_2024/TGIAivcPyvM-HQ.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FMeraki_2024%2FTGIAivcPyvM-HQ.jpg?alt=media&token=5f19d544-b62c-4331-b5de-65ece9ef7897",
      title: "Chali Chaliga Cover (Day 0)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/TGIAivcPyvM",
      event: "Meraki",
      id: 86,
      order: 60
    },
    {
      id: 26,
      category: "team",
      // image: "/gallery/gallery2024-25/Team2024-25/Meraki-Day0.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FMeraki-Day0.jpg?alt=media&token=2f1869f6-372c-4c7c-899d-8aad7f8a9700",
      title: "Meraki Day 0",
      type: 'image' as const,
      order: 61
    },
    {
      category: "performances",
      //image: "/events/events2024-25/Onam_2024/xdgsV5wh5xc-SD.jpg",
      image: "http s://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOnam_2024%2FxdgsV5wh5xc-SD.jpg?alt=media&token=17388ae1-f0b2-4cc7-96d5-5a8b8ac232e0",
      title: "Maate Vinadhuga Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/xdgsV5wh5xc",
      event: "Onam (Club Performance)",
      id: 95,
      order: 62
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Onam_2024/9h9L0G2vQS0-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOnam_2024%2F9h9L0G2vQS0-SD.jpg?alt=media&token=c0aebde4-a4b6-4529-badb-5f93e97e2941",
      title: "Lose Yourself Cover (With Drums)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/9h9L0G2vQS0",
      event: "Onam (Club Performance)",
      id: 96,
      order: 63
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Onam_2024/ZGvUCeNrXb4-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOnam_2024%2FZGvUCeNrXb4-SD.jpg?alt=media&token=7fc25446-13c7-44d8-817b-85163787c222",
      title: "Lose Yourself Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/ZGvUCeNrXb4",
      event: "Onam (Club Performance)",
      id: 93,
      order: 64
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Onam_2024/_eBlEah44JQ-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOnam_2024%2F_eBlEah44JQ-SD.jpg?alt=media&token=c22bc3d7-a02c-49d6-9d11-96179ea8456e",
      title: "Pachai Nirame Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/_eBlEah44JQ",
      event: "Onam (Club Performance)",
      id: 97,
      order: 65
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Onam_2024/9SL4rqBX6Vk-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOnam_2024%2F9SL4rqBX6Vk-SD.jpg?alt=media&token=af588391-795c-40f9-9d7b-db7443a9e858",
      title: "Agam - The Boat song Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/9SL4rqBX6Vk",
      event: "Onam (Club Performance)",
      id: 94,
      order: 66
    },
    {
      category: "performances",
      // image: "/gallery/gallery2024-25/Maate_Vinadhuga.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FMaate_Vinadhuga.jpg?alt=media&token=ecf987e4-1b06-4ec4-a8a0-a5413bbd50a4",
      title: "Maate Vinadhuga Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/5P6USwo9HJg",
      event: "",
      id: 85,
      order: 67
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Ganesh_Chaturthi_2024/GaneshChaturthi2024-1.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FGanesh_Chaturthi_2024%2FGaneshChaturthi2024-1.jpg?alt=media&token=b013d533-006d-4501-b19c-12c5d3f740bb",
      title: "Mahaganapathim Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/8aSGtWMdvzw",
      event: "Ganesh Chaturthi (Club Performance)",
      id: 74,
      order: 68
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Ganesh_Chaturthi_2024/GaneshChaturthi2024-2.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FGanesh_Chaturthi_2024%2FGaneshChaturthi2024-2.jpg?alt=media&token=a9692f14-8abd-4478-95c7-04ff6b256b0a",
      title: "Kande Pohe Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/NQi_6k_if-g",
      event: "Ganesh Chaturthi (Club Performance)",
      id: 73,
      order: 69
    },
    {
      id: 27,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_210445.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_210445.jpg?alt=media&token=4f7722e9-c6a7-42a9-9c8c-e77f65ced5c7",
      title: "Nihaal (Flute)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 70
    },
    {
      id: 28,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_210858.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_210858.jpg?alt=media&token=5f3e074b-4310-4dc0-bdd7-b3f036b2102c",
      title: "Jeswin (Vocal)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 71
    },
    {
      id: 29,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_201107.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_201107.jpg?alt=media&token=97c16f31-82b9-4d6f-ac43-db0ffa8243df",
      title: "Anushree (Vocals) and Anuj (Guitar)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 72
    },
    {
      id: 30,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_212547.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_212547.jpg?alt=media&token=6b213021-0fa4-4e46-b1e5-862ca03b4d90",
      title: "Divyaa (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 73
    },
    {
      id: 31,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_205709.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_205709.jpg?alt=media&token=f164b715-f955-49c3-bc48-8587636baeb4",
      title: "Hari Naveen (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 74
    },
    {
      id: 32,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_204918.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_204918.jpg?alt=media&token=89e58a1d-21fb-4975-b016-da726049c693",
      title: "Manoj (Keyboard)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 75
    },
    {
      id: 33,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_203739.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_203739.jpg?alt=media&token=cd9d9fe2-8b76-4eaf-ae7f-b17c18148454",
      title: "Suranjana (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 76
    },
    {
      id: 34,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_201659.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_201659.jpg?alt=media&token=8d0998f5-8b56-4e3b-b84b-c1c1a5999448",
      title: "Sakthi, Ezhil and Co (Vocals)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/lFqX58L6om4",
      event: "1st Open Mic Night",
      order: 77
    },
    {
      id: 35,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_193828.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_193828.jpg?alt=media&token=28ba5eef-e6ca-4964-9322-5697da05f10f",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 78
    },
    {
      id: 36,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_195846.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_195846.jpg?alt=media&token=3eac5827-8685-40b6-a600-a9ad19cfcbf7",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 79
    },
    {
      id: 37,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_203256.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_203256.jpg?alt=media&token=35db4ed4-bde8-49ea-a4f9-a79e03a7893a",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 80
    },
    {
      id: 38,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_204226.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_204226.jpg?alt=media&token=a63c8544-8653-47d1-9f4c-0e0f10b65942",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 81
    },
    {
      id: 39,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_204509.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_204509.jpg?alt=media&token=e33040a9-fcb9-4d9c-9a51-1be8b4456a3b",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 82
    },
    {
      id: 40,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_211416.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_211416.jpg?alt=media&token=5fec6dce-dc98-4cbf-af43-0c8622201013",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 83
    },
    {
      id: 41,
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_200248.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2F20240831_200248.jpg?alt=media&token=a2d1a7e6-58bd-4dce-b5b0-5fe747efbbd1",
      title: "Shashwat (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 84
    },
    {
      category: "jams",
      // image: "/events/events2024-25/Open_Mic_August_2024/Media/VideoCapture_20250423-002558.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOpen_Mic_August_2024%2FMedia%2FVideoCapture_20250423-002558.jpg?alt=media&token=53285304-d710-4617-b6dc-671137133a79",
      title: "Crowd",
      type: 'image' as const,
      videoUrl: "",
      event: "1st Open Mic Night",
      id: 56,
      order: 85
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Blastroduction_2024/Media/Blastro3.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FBlastroduction_2024%2FMedia%2FBlastro3.jpg?alt=media&token=02ad00e8-342e-44b9-afb2-a872fb0d950d",
      title: "I See Red Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/x9975qgh40g",
      event: "Blastroduction (Club Performance)",
      id: 92,
      order: 86
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Blastroduction_2024/Media/Blastro2.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FBlastroduction_2024%2FMedia%2FBlastro2.png?alt=media&token=2422a276-e662-404c-bf1d-ff7d379154a8",
      title: "Aaoge Tum Kabhi Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/-MFdihgVbg8",
      event: "Blastroduction (Club Performance)",
      id: 91,
      order: 87
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Blastroduction_2024/Media/Blastro.png",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FBlastroduction_2024%2FMedia%2FBlastro.png?alt=media&token=681deb47-40db-4bd6-8ffe-9ab420e30dee",
      title: "Adiye Kolluthe Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/zyu6L7JDGNQ",
      event: "Blastroduction (Club Performance)",
      id: 90,
      order: 88
    },
    {
      id: 42,
      category: "performances",
      // image: "/events/events2024-25/Blastroduction_2024/Media/IMG_9793.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FBlastroduction_2024%2FMedia%2FIMG_9793.jpg?alt=media&token=5b94eb6f-f293-44aa-86b2-bd0870891218",
      title: "Stage Set-Up",
      type: 'image' as const,
      event: "Blastroduction (Club Performance)",
      order: 89
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Orientation_2024/Orientation2024-3.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOrientation_2024%2FOrientation2024-3.jpg?alt=media&token=e8409f1b-bd5a-49c4-b0c7-6e15829d7b94",
      title: "Bulleya Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/K36PvD_09bk",
      event: "Orientation (Club Performance)",
      id: 77,
      order: 90
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Orientation_2024/Orientation2024-2.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOrientation_2024%2FOrientation2024-2.jpg?alt=media&token=83e9595a-7e0c-40f1-8b9e-972ffb1c3779",
      title: "Jiye Kyun Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/e9Fdm7klZwc",
      event: "Orientation (Club Performance)",
      id: 76,
      order: 91
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Orientation_2024/Orientation2024-1.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FOrientation_2024%2FOrientation2024-1.jpg?alt=media&token=f99c4da6-a37d-46c9-aae5-4fd6302a1a8c",
      title: "Rolling in the Deep Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/-AlngyopEG0",
      event: "Orientation (Club Performance)",
      id: 75,
      order: 92
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Independence_Day_2024/IndependenceDay2024.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FIndependence_Day_2024%2FIndependenceDay2024.jpg?alt=media&token=d322e0f8-4ae2-4b95-8e86-30ca5d054b8e",
      title: "Utthan Desathin Kural Cover",
      type: 'video' as const,
      videoUrl: "ttps://www.youtube.com/embed/h4mw0A6XL8o",
      event: "Independence Day (Club Performance)",
      id: 79,
      order: 93
    },
    {
      category: "performances",
      // image: "/events/events2024-25/Independence_Day_2024/IndependenceDay2024.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FIndependence_Day_2024%2FIndependenceDay2024.jpg?alt=media&token=d322e0f8-4ae2-4b95-8e86-30ca5d054b8e",
      title: "Vande Matharam - Fighter Theme Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/FcJu8kSG0tA",
      event: "Independence Day (Club Performance)",
      id: 78,
      order: 94
    },
    {
      id: 43,
      category: "performances",
      // image: "/events/events2024-25/Independence_Day_2024/20240815_103444.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Events%2FEvents2024-25%2FIndependence_Day_2024%2F20240815_103444.jpg?alt=media&token=cf069132-2c36-4aa5-86fc-04b82b80158d",
      title: "Independence Day Performance",
      type: 'image' as const,
      order: 95
    },
    {
      id: 44,
      category: "team",
      // image: "/gallery/gallery2024-25/Team2024-25/Independence-Day.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2FTeam2024-25%2FIndependence-Day.jpg?alt=media&token=0fe6c0bf-cd09-4e49-b479-6006739d9aa9",
      title: "Independence Day",
      type: 'image' as const,
      order: 96
    },
    {
      category: "covers",
      // image: "/gallery/gallery2024-25/7Rodpr3ux2g-SD.jpg",
      image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/Gallery%2FGallery2024-25%2F7Rodpr3ux2g-SD.jpg?alt=media&token=e75a5443-88d5-4581-ae6c-dfa472cee873",
      title: "River Flows in You Cover - Saumadeep",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/7Rodpr3ux2g",
      event: "",
      id: 88,
      order: 97
    }
  ].map((item, index) => ({
    ...item,
    order: index,
    type: item.type as 'image' | 'video'
  }));
