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
      id: 1,
      category: "covers",
      image: "/gallery/Farewell2025/Room-823_Farewell.jpg",
      title: "Hua Mein",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/RtaddCi6TFo",
      order: 0
    },
    {
      id: 2,
      category: "covers",
      image: "/gallery/Farewell2025/Ankit_Farewell.jpg",
      title: "Bulleya",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/esI3k-LUq4Y",
      order: 1
    },
    {
      category: "performances",
      image: "/gallery/OpenMicNight-March 11/IMG-20250312-WA0004.jpg",
      title: "Harith (Keyboard)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/HXZFzyHFFmY",
      event: "3rd Open Mic Night",
      id: 48,
      order: 2
    },
    {
      category: "jams",
      image: "/gallery/OpenMicNight-March 11/7YoLSDp0968-SD.jpg",
      title: "Dharani and Meera R (Vocals)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/7YoLSDp0968",
      event: "3rd Open Mic Night",
      id: 47,
      order: 3
    },
    {
      id: 3,
      category: "team",
      image: "/gallery/Team2025/repday.jpg",
      title: "Republic Day",
      type: 'image' as const,
      order: 4
    },
    {
      id: 4,
      category: "performances",
      image: "/gallery/Enter_Sandman.png",
      title: "Enter Sandman",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/hpURyv_xhu0",
      order: 5
    },
    {
      id: 5,
      category: "performances",
      image: "/gallery/Saarang2025/Saarang2025.jpg",
      title: "Dream On",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/_S_q-sEy6Pg",
      order: 6
    },
    {
      id: 6,
      category: "performances",
      image: "/gallery/Saarang2025/Saarang2025.jpg",
      title: "For Whom the Bell Tolls",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/zYfgVTm52_U",
      order: 7
    },
    {
      id: 7,
      category: "performances",
      image: "/gallery/Saarang2025/DrumsSolo.jpg",
      title: "Drums Solo - Dikshant",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/G42Gx7FuPEc",
      order: 8
    },
    {
      id: 8,
      category: "performances",
      image: "/gallery/Saarang2025/ShriyaSolo.jpg",
      title: "I Wanna Know What Love Is - Shriya Y",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/NtB7KgQwaCc",
      order: 9
    },
    {
      id: 9,
      category: "performances",
      image: "/gallery/Saarang2025/KeyboardSolo.jpg",
      title: "Keyboard Solo - Nivedh Biju",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/0bX-TSTKmEE",
      order: 10
    },
    {
      id: 10,
      category: "performances",
      image: "/gallery/Saarang2025/MeeraKSolo.jpg",
      title: "In case you don't Live Forever - Meera K",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/lx6hLpcRMjg",
      order: 11
    },
    {
      id: 11,
      category: "performances",
      image: "/gallery/Saarang2025/MeeraRSolo.jpg",
      title: "No One - Meera R",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/GL4wmk8GBeQ",
      order: 12
    },
    {
      id: 12,
      category: "team",
      image: "/gallery/Team2025/saarang.jpg",
      title: "Saarang 2025",
      type: 'image' as const,
      order: 13
    },
    {
      id: 13,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Harini.jpg",
      title: "Harini",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/t46qLSQgBUY",
      order: 14
    },
    {
      id: 14,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Suranjana.jpg",
      title: "Suranjana Mary Paul Santiago",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/vv6BadAlzVs",
      order: 15
    },
    {
      id: 15,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Vijay.jpg",
      title: "Vijay",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/31NE44FVR8g",
      order: 16
    },
    {
      id: 16,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Caitlin.jpg",
      title: "Caitlin",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/DUq0kznKRwU",
      order: 17
    },
    {
      id: 17,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Mayukha.jpg",
      title: "Mayukha",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/_o3urkRycMg",
      order: 18
    },
    {
      id: 18,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Ranjan.jpg",
      title: "Ranjan",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/zBUYhD8EIyA",
      order: 19
    },
    {
      id: 19,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Benedict.jpg",
      title: "Benedict I",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/OuMlbzoIhs8",
      order: 20
    },
    {
      id: 20,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/ShashwatSingh.jpg",
      title: "Shashwat Singh",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/6LimLLpqOTE",
      order: 21
    },
    {
      id: 21,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Saniya.jpg",
      title: "Katkam Saniya",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/4iDT6WU6MtI",
      order: 22
    },
    {
      id: 22,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Duo.jpg",
      title: "Anurag and Grishmank",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/nHTZT4Ky9qU",
      order: 23
    },
    {
      id: 23,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Tarun.jpg",
      title: "Tarun Mamillapalli",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/woGKn0s-mhc",
      order: 24
    },
    {
      id: 24,
      category: "competitions",
      image: "/gallery/MusicReelChallenge2025/Benedict2.jpg",
      title: "Benedict I",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/4D2zzB3mAVw",
      order: 25
    },
    {
      id: 25,
      category: "team",
      image: "/gallery/Team2025/merakiday1.jpg",
      title: "Meraki Day 1",
      type: 'image' as const,
      order: 26
    },
    {
      category: "jams",
      image: "/gallery/OpenMicNight-November 9/IMG-20241109-WA0009.jpg",
      title: "Priyank, Harith and Grishmank (Guitar)",
      type: 'image' as const,
      videoUrl: "",
      event: "2nd Open Mic Night",
      id: 45,
      order: 27
    },
    {
      category: "jams",
      image: "/gallery/OpenMicNight-November 9/_kAqrLvT-zM-HQ.jpg",
      title: "Caitlin (Vocals) and Harith (Keyboard)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/_kAqrLvT-zM",
      event: "2nd Open Mic Night",
      id: 46,
      order: 28
    },
    {
      id: 26,
      category: "team",
      image: "/gallery/Team2025/merakiday0.jpg",
      title: "Meraki Day 0",
      type: 'image' as const,
      order: 29
    },
    {
      id: 27,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_210445.jpg",
      title: "Nihaal (Flute)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 30
    },
    {
      id: 28,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_210858.jpg",
      title: "Jeswin (Vocal)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 31
    },
    {
      id: 29,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_201107.jpg",
      title: "Anushree (Vocals) and Anuj (Guitar)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 32
    },
    {
      id: 30,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_212547.jpg",
      title: "Divyaa (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 33
    },
    {
      id: 31,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_205709.jpg",
      title: "Hari Naveen (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 34
    },
    {
      id: 32,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_204918.jpg",
      title: "Manoj (Keyboard)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 35
    },
    {
      id: 33,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_203739.jpg",
      title: "Suranjana (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 36
    },
    {
      id: 34,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_201659.jpg",
      title: "Ezhil and Co (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 37
    },
    {
      id: 35,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_200248.jpg",
      title: "Shashwat (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 38
    },
    {
      id: 36,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_193828.jpg",
      title: "(VOcals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 39
    },
    {
      id: 37,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_195846.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 40
    },
    {
      id: 38,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_203256.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 41
    },
    {
      id: 39,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_204226.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 42
    },
    {
      id: 40,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_204509.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 43
    },
    {
      id: 41,
      category: "jams",
      image: "/gallery/OpenMicNight-August 31/20240831_211416.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 44
    },
    {
      id: 42,
      category: "performances",
      image: "/performances/IMG_9793.jpg",
      title: "Blastroduction",
      type: 'image' as const,
      order: 45
    },
    {
      id: 43,
      category: "performances",
      image: "/performances/20240815_103444.jpg",
      title: "Independence Day Performance",
      type: 'image' as const,
      order: 46
    },
    {
      id: 44,
      category: "team",
      image: "/gallery/Team2025/independence_day.jpg",
      title: "Independence Day",
      type: 'image' as const,
      order: 47
    }
  ].map((item, index) => ({
    ...item,
    order: index,
    type: item.type as 'image' | 'video'
  }));
