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
      image: "/events/events2024-25/Unofficial_Open_Mic_April_2025/Media/DJPdoFRSPMj-1.jpg",
      title: "Vijay (Vocals)",
      type: 'video' as const,
      videoUrl: "https://www.instagram.com/p/DJPdoFRSPMj/",
      event: "4rth [Unofficial] Open Mic Night",
      id: 82,
      order: 0
    },
    {
      category: "performances",
      image: "/gallery/gallery2024-25/Team_2024-25/Samgatha.jpg",
      title: "Dil Se Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/2NGJ1bPrzUg",
      event: "Art of Noise",
      id: 62,
      order: 1
    },
    {
      category: "performances",
      image: "/gallery/gallery2024-25/Team_2024-25/Samgatha.jpg",
      title: "For Whom the Bell Tolls Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/IpzZjpbhejQ",
      event: "Art of Noise",
      id: 61,
      order: 2
    },
    {
      category: "performances",
      image: "/gallery/gallery2024-25/Team_2024-25/Samgatha.jpg",
      title: "We Will Rock You Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/ERPM28X17FI",
      event: "Art of Noise",
      id: 60,
      order: 3
    },
    {
      category: "performances",
      image: "/gallery/gallery2024-25/Team_2024-25/Samgatha.jpg",
      title: "Nadaan Parindey Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/0KwCNBu5qQs",
      event: "Art of Noise",
      id: 59,
      order: 4
    },
    {
      category: "performances",
      image: "/gallery/gallery2024-25/Team_2024-25/Samgatha.jpg",
      title: "Enter Sandman Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/tOMHFZN7zDM",
      event: "Art of Noise",
      id: 58,
      order: 5
    },
    {
      category: "performances",
      image: "/events/events2024-25/Art_of_Noise_2025/OpeningArtOfNoise.jpg",
      title: "Opening Ceremony",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/MMoPQU21OfM?si=lfeDcLykyQgmZvQK",
      event: "Art of Noise",
      id: 80,
      order: 6
    },
    {
      category: "covers",
      image: "/events/events2024-25/Farewell_2025/QQZDdPWx_Ak-SD.jpg",
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
      image: "/events/events2024-25/Farewell_2025/Room-823_Farewell.jpg",
      title: "Hua Mein Cover (Room 823)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/RtaddCi6TFo",
      order: 8
    },
    {
      id: 2,
      category: "covers",
      image: "/events/events2024-25/Farewell_2025/Ankit_Farewell.jpg",
      title: "Bulleya Cover (Ankit's Band)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/esI3k-LUq4Y",
      order: 9
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_204014.jpg",
      title: "Tarun M (Keyboard)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 51,
      order: 10
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_203522.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 49,
      order: 11
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_204522.jpg",
      title: "Abhishek N (Vocals) and Vivek (Guitar)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 53,
      order: 12
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/zQpCUeZNyK0-HD.jpg",
      title: "Don'u Don'u Don'u - Soul Rock Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/zQpCUeZNyK0",
      event: "3rd Open Mic Night",
      id: 84,
      order: 13
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_205019.jpg",
      title: "Asish (Vocals and Guitar)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 54,
      order: 14
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_203008.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 55,
      order: 15
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_211059.jpg",
      title: "Ajitha Arvindh (Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 50,
      order: 16
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/20250311_205933.jpg",
      title: "Suranjana (Vocals)",
      type: 'image' as const,
      videoUrl: "",
      event: "3rd Open Mic Night",
      id: 52,
      order: 17
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/IMG-20250312-WA0004.jpg",
      title: "Harith (Keyboard)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/HXZFzyHFFmY",
      event: "3rd Open Mic Night",
      id: 48,
      order: 18
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_March_2025/Media/7YoLSDp0968-SD.jpg",
      title: "Dharani and Meera R (Vocals)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/7YoLSDp0968",
      event: "3rd Open Mic Night",
      id: 47,
      order: 19
    },
    {
      category: "covers",
      image: "/events/events2024-25/Workshop_March_2025/QpGra9txmTQ-HQ.jpg",
      title: "Demons - Band Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/QpGra9txmTQ",
      event: "Workshop: How to form a Band",
      id: 89,
      order: 20
    },
    {
      category: "performances",
      image: "/events/events2024-25/Republic_Day_2025/RepublicDay2025.jpg",
      title: "Jai Ho Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/-JMQtq8c0C8",
      event: "Republic Day (Club Performance)",
      id: 64,
      order: 21
    },
    {
      category: "performances",
      image: "/events/events2024-25/Republic_Day_2025/RepublicDay2025.jpg",
      title: "Vande Matharam - Maa Tujhe Salaam Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/eOeejRMA1UE",
      event: "Republic Day (Club Performance)",
      id: 63,
      order: 22
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/Image-627.png",
      title: "Vijay (Vocals)",
      type: 'video' as const,
      videoUrl: "https://www.instagram.com/p/C_WLbBNqObQ/",
      event: "1st Open Mic Night",
      id: 83,
      order: 23
    },
    {
      category: "team",
      image: "/gallery/gallery2024-25/Team_2024-25/Samgatha.jpg",
      title: "Samgatha x Vashisht '2025",
      type: 'image' as const,
      id: 81,
      order: 24
    },
    {
      id: 3,
      category: "team",
      image: "/gallery/gallery2024-25/Team_2024-25/repday.jpg",
      title: "Republic Day",
      type: 'image' as const,
      order: 25
    },
    {
      id: 4,
      category: "performances",
      image: "/gallery/gallery2024-25/Enter_Sandman.png",
      title: "Enter Sandman Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/hpURyv_xhu0",
      order: 26
    },
    {
      id: 5,
      category: "performances",
      image: "/events/events2024-25/EXTERNAL_Saarang_2025/Saarang2025.jpg",
      title: "Dream On Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/_S_q-sEy6Pg",
      order: 27
    },
    {
      id: 6,
      category: "performances",
      image: "/events/events2024-25/EXTERNAL_Saarang_2025/Saarang2025.jpg",
      title: "For Whom the Bell Tolls Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/zYfgVTm52_U",
      order: 28
    },
    {
      id: 7,
      category: "covers",
      image: "/events/events2024-25/EXTERNAL_Saarang_2025/DrumsSolo.jpg",
      title: "Drums Solo - Dikshant",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/G42Gx7FuPEc",
      order: 29
    },
    {
      id: 8,
      category: "covers",
      image: "/events/events2024-25/EXTERNAL_Saarang_2025/ShriyaSolo.jpg",
      title: "I Wanna Know What Love Is - Shriya Y Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/NtB7KgQwaCc",
      order: 30
    },
    {
      id: 9,
      category: "covers",
      image: "/events/events2024-25/EXTERNAL_Saarang_2025/KeyboardSolo.jpg",
      title: "Keyboard Solo - Nivedh Biju",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/0bX-TSTKmEE",
      order: 31
    },
    {
      id: 10,
      category: "covers",
      image: "/events/events2024-25/EXTERNAL_Saarang_2025/MeeraKSolo.jpg",
      title: "In case you don't Live Forever - Meera K Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/lx6hLpcRMjg",
      order: 32
    },
    {
      id: 11,
      category: "covers",
      image: "/events/events2024-25/EXTERNAL_Saarang_2025/MeeraRSolo.jpg",
      title: "No One - Meera R Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/GL4wmk8GBeQ",
      order: 33
    },
    {
      id: 12,
      category: "team",
      image: "/gallery/gallery2024-25/Team_2024-25/saarang.jpg",
      title: "Saarang 2025",
      type: 'image' as const,
      order: 34
    },
    {
      id: 13,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Harini.jpg",
      title: "Harini",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/t46qLSQgBUY",
      order: 35
    },
    {
      id: 14,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Suranjana.jpg",
      title: "Suranjana Mary Paul Santiago",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/vv6BadAlzVs",
      order: 36
    },
    {
      id: 15,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Vijay.jpg",
      title: "Vijay",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/31NE44FVR8g",
      order: 37
    },
    {
      id: 16,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Caitlin.jpg",
      title: "Caitlin",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/DUq0kznKRwU",
      order: 38
    },
    {
      id: 17,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Mayukha.jpg",
      title: "Mayukha",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/_o3urkRycMg",
      order: 39
    },
    {
      id: 18,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Ranjan.jpg",
      title: "Ranjan",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/zBUYhD8EIyA",
      order: 40
    },
    {
      id: 19,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Benedict.jpg",
      title: "Benedict I",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/OuMlbzoIhs8",
      order: 41
    },
    {
      id: 20,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/ShashwatSingh.jpg",
      title: "Shashwat Singh",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/6LimLLpqOTE",
      order: 42
    },
    {
      id: 21,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Saniya.jpg",
      title: "Katkam Saniya",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/4iDT6WU6MtI",
      order: 43
    },
    {
      id: 22,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Duo.jpg",
      title: "Anurag and Grishmank",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/nHTZT4Ky9qU",
      order: 44
    },
    {
      id: 23,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Tarun.jpg",
      title: "Tarun Mamillapalli",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/woGKn0s-mhc",
      order: 45
    },
    {
      id: 24,
      category: "competitions",
      image: "/events/events2024-25/Music_Reel_Challenge_2025/Submissions/Benedict2.jpg",
      title: "Benedict I",
      type: 'video' as const,
      event: "Music Reel Challenge",
      videoUrl: "https://youtube.com/embed/4D2zzB3mAVw",
      order: 46
    },
    {
      category: "performances",
      image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
      title: "The Chain Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/mZSY_ommAyo",
      event: "CVIP",
      id: 68,
      order: 47
    },
    {
      category: "performances",
      image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
      title: "Dream a Little Dream of Me Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/T66xfsmisgc",
      event: "CVIP",
      id: 67,
      order: 48
    },
    {
      category: "performances",
      image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
      title: "Skyfall Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/hH1Gp6kmaUQ",
      event: "CVIP (Club Performance)",
      id: 66,
      order: 49
    },
    {
      category: "performances",
      image: "/events/events2024-25/CVIP_2024/CVIP2024.png",
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
      image: "/gallery/gallery2024-25/Team_2024-25/merakiday1.jpg",
      title: "Meraki Day 1",
      type: 'image' as const,
      order: 51
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_November_2024/Media/IMG-20241109-WA0009.jpg",
      title: "Priyank, Harith and Grishmank (Guitar)",
      type: 'image' as const,
      videoUrl: "",
      event: "2nd Open Mic Night",
      id: 45,
      order: 52
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_November_2024/Media/_kAqrLvT-zM-HQ.jpg",
      title: "Caitlin (Vocals) and Harith (Keyboard)",
      type: 'video' as const,
      videoUrl: "https://youtube.com/embed/_kAqrLvT-zM",
      event: "2nd Open Mic Night",
      id: 46,
      order: 53
    },
    {
      category: "performances",
      image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      title: "Let's Kill Tonight Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/NhMqICsZZfM",
      event: "Meraki (Club Performance)",
      id: 72,
      order: 54
    },
    {
      category: "performances",
      image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      title: "Muskaanein Jhooti Hai Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/xHauVEB3a48",
      event: "Meraki (Club Performance)",
      id: 71,
      order: 55
    },
    {
      category: "performances",
      image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      title: "Chandralekha Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/RQd9IN4N_xM",
      event: "Meraki (Club Performance)",
      id: 70,
      order: 56
    },
    {
      category: "performances",
      image: "/events/events2024-25/Meraki_2024/Meraki2024.jpg",
      title: "Urvasi Urvase X Sheela Ki Jawani Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/2jMVx2vp-gs",
      event: "Meraki (Club Performance)",
      id: 69,
      order: 57
    },
    {
      category: "performances",
      image: "/events/events2024-25/Meraki_2024/CKFhdkn-H6g-SD.jpg",
      title: "Badass Cover (Day 0)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/CKFhdkn-H6g",
      event: "Meraki",
      id: 87,
      order: 58
    },
    {
      category: "performances",
      image: "/events/events2024-25/Meraki_2024/fLRv9_1ovVw.jpg",
      title: "Saibo Cover (Day 0)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/fLRv9_1ovVw",
      event: "Meraki",
      id: 98,
      order: 59
    },
    {
      category: "performances",
      image: "/events/events2024-25/Meraki_2024/TGIAivcPyvM-HQ.jpg",
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
      image: "/gallery/gallery2024-25/Team_2024-25/merakiday0.jpg",
      title: "Meraki Day 0",
      type: 'image' as const,
      order: 61
    },
    {
      category: "performances",
      image: "/events/events2024-25/Onam_2024/xdgsV5wh5xc-SD.jpg",
      title: "Maate Vinadhuga Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/xdgsV5wh5xc",
      event: "Onam (Club Performance)",
      id: 95,
      order: 62
    },
    {
      category: "performances",
      image: "/events/events2024-25/Onam_2024/9h9L0G2vQS0-SD.jpg",
      title: "Lose Yourself Cover (With Drums)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/9h9L0G2vQS0",
      event: "Onam (Club Performance)",
      id: 96,
      order: 63
    },
    {
      category: "performances",
      image: "/events/events2024-25/Onam_2024/ZGvUCeNrXb4-SD.jpg",
      title: "Lose Yourself Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/ZGvUCeNrXb4",
      event: "Onam (Club Performance)",
      id: 93,
      order: 64
    },
    {
      category: "performances",
      image: "/events/events2024-25/Onam_2024/_eBlEah44JQ-SD.jpg",
      title: "Pachai Nirame Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/_eBlEah44JQ",
      event: "Onam (Club Performance)",
      id: 97,
      order: 65
    },
    {
      category: "performances",
      image: "/events/events2024-25/Onam_2024/9SL4rqBX6Vk-SD.jpg",
      title: "Agam - The Boat song Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/9SL4rqBX6Vk",
      event: "Onam (Club Performance)",
      id: 94,
      order: 66
    },
    {
      category: "performances",
      image: "/gallery/gallery2024-25/Maate_Vinadhuga.jpg",
      title: "Maate Vinadhuga Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/5P6USwo9HJg",
      event: "",
      id: 85,
      order: 67
    },
    {
      category: "performances",
      image: "/events/events2024-25/Ganesh_Chaturthi_2024/GaneshChaturthi2024-1.jpg",
      title: "Mahaganapathim Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/8aSGtWMdvzw",
      event: "Ganesh Chaturthi (Club Performance)",
      id: 74,
      order: 68
    },
    {
      category: "performances",
      image: "/events/events2024-25/Ganesh_Chaturthi_2024/GaneshChaturthi2024-2.jpg",
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
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_210445.jpg",
      title: "Nihaal (Flute)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 70
    },
    {
      id: 28,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_210858.jpg",
      title: "Jeswin (Vocal)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 71
    },
    {
      id: 29,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_201107.jpg",
      title: "Anushree (Vocals) and Anuj (Guitar)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 72
    },
    {
      id: 30,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_212547.jpg",
      title: "Divyaa (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 73
    },
    {
      id: 31,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_205709.jpg",
      title: "Hari Naveen (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 74
    },
    {
      id: 32,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_204918.jpg",
      title: "Manoj (Keyboard)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 75
    },
    {
      id: 33,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_203739.jpg",
      title: "Suranjana (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 76
    },
    {
      id: 34,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_201659.jpg",
      title: "Sakthi, Ezhil and Co (Vocals)",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/lFqX58L6om4",
      event: "1st Open Mic Night",
      order: 77
    },
    {
      id: 35,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_193828.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 78
    },
    {
      id: 36,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_195846.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 79
    },
    {
      id: 37,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_203256.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 80
    },
    {
      id: 38,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_204226.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 81
    },
    {
      id: 39,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_204509.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 82
    },
    {
      id: 40,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_211416.jpg",
      title: "(Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 83
    },
    {
      id: 41,
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/20240831_200248.jpg",
      title: "Shashwat (Vocals)",
      type: 'image' as const,
      event: "1st Open Mic Night",
      order: 84
    },
    {
      category: "jams",
      image: "/events/events2024-25/Open_Mic_August_2024/Media/VideoCapture_20250423-002558.jpg",
      title: "Crowd",
      type: 'image' as const,
      videoUrl: "",
      event: "1st Open Mic Night",
      id: 56,
      order: 85
    },
    {
      category: "performances",
      image: "/events/events2024-25/Blastroduction_2024/Media/Blastro3.jpg",
      title: "I See Red Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/x9975qgh40g",
      event: "Blastroduction (Club Performance)",
      id: 92,
      order: 86
    },
    {
      category: "performances",
      image: "/events/events2024-25/Blastroduction_2024/Media/Blastro2.png",
      title: "Aaoge Tum Kabhi Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/-MFdihgVbg8",
      event: "Blastroduction (Club Performance)",
      id: 91,
      order: 87
    },
    {
      category: "performances",
      image: "/events/events2024-25/Blastroduction_2024/Media/Blastro.png",
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
      image: "/events/events2024-25/Blastroduction_2024/Media/IMG_9793.jpg",
      title: "Stage Set-Up",
      type: 'image' as const,
      event: "Blastroduction (Club Performance)",
      order: 89
    },
    {
      category: "performances",
      image: "/events/events2024-25/Orientation_2024/Orientation2024-3.jpg",
      title: "Bulleya Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/K36PvD_09bk",
      event: "Orientation (Club Performance)",
      id: 77,
      order: 90
    },
    {
      category: "performances",
      image: "/events/events2024-25/Orientation_2024/Orientation2024-2.jpg",
      title: "Jiye Kyun Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/e9Fdm7klZwc",
      event: "Orientation (Club Performance)",
      id: 76,
      order: 91
    },
    {
      category: "performances",
      image: "/events/events2024-25/Orientation_2024/Orientation2024-1.jpg",
      title: "Rolling in the Deep Cover",
      type: 'video' as const,
      videoUrl: "https://www.youtube.com/embed/-AlngyopEG0",
      event: "Orientation (Club Performance)",
      id: 75,
      order: 92
    },
    {
      category: "performances",
      image: "/events/events2024-25/Independence_Day_2024/IndependenceDay2024.jpg",
      title: "Utthan Desathin Kural Cover",
      type: 'video' as const,
      videoUrl: "ttps://www.youtube.com/embed/h4mw0A6XL8o",
      event: "Independence Day (Club Performance)",
      id: 79,
      order: 93
    },
    {
      category: "performances",
      image: "/events/events2024-25/Independence_Day_2024/IndependenceDay2024.jpg",
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
      image: "/events/events2024-25/Independence_Day_2024/20240815_103444.jpg",
      title: "Independence Day Performance",
      type: 'image' as const,
      order: 95
    },
    {
      id: 44,
      category: "team",
      image: "/gallery/gallery2024-25/Team_2024-25/independence_day.jpg",
      title: "Independence Day",
      type: 'image' as const,
      order: 96
    },
    {
      category: "covers",
      image: "/gallery/gallery2024-25/7Rodpr3ux2g-SD.jpg",
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
