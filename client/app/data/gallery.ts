export interface GalleryItem {
    id: number;
    category: string;
    image: string;
    title: string;
    type: 'image' | 'video';
    videoUrl?: string;
    event?: string;
  }
  
  export const galleryItems: GalleryItem[] = [
    { id: 1, category: 'performances', image: '/performances/20240815_103444.jpg', title: 'Independence Day Performance', type: 'image' },
    { id: 2, category: 'jams', image: '/performances/20240831_210445.jpg', title: 'Weekend Jam Session', type: 'image' },
    { id: 3, category: 'performances', image: '/performances/IMG_9793.jpg', title: 'Blastroduction', type: 'image' },
    { id: 4, category: 'jams', image: '/performances/20240831_210858.jpg', title: 'Weekend Jam Session', type: 'image' },
    { id: 5, category: 'performances', image: '/gallery/Enter_SaMusicReelChallenge2025ndman.png', title: 'Enter Sandman', type: 'video', videoUrl: 'https://www.youtube.com/embed/hpURyv_xhu0' },
    { id: 6, category: 'performances', image: '/gallery/Saarang2025/Saarang2025.jpg', title: 'Dream On', type: 'video', videoUrl: 'https://www.youtube.com/embed/_S_q-sEy6Pg' },
    { id: 7, category: 'performances', image: '/gallery/Saarang2025/Saarang2025.jpg', title: 'For Whom the Bell Tolls', type: 'video', videoUrl: 'https://www.youtube.com/embed/zYfgVTm52_U' },
    { id: 8, category: 'performances', image: '/gallery/Saarang2025/DrumsSolo.jpg', title: 'Drums Solo', type: 'video', videoUrl: 'https://www.youtube.com/embed/G42Gx7FuPEc' },
    { id: 9, category: 'performances', image: '/gallery/Saarang2025/ShriyaSolo.jpg', title: 'I Wanna Know What Love Is', type: 'video', videoUrl: 'https://www.youtube.com/embed/NtB7KgQwaCc' },
    { id: 10, category: 'performances', image: '/gallery/Saarang2025/KeyboardSolo.jpg', title: 'Keyboard Solo', type: 'video', videoUrl: 'https://www.youtube.com/embed/0bX-TSTKmEE'},
    { id: 11, category: 'performances', image: '/gallery/Saarang2025/MeeraKSolo.jpg', title: 'In case you don\'t Live Forever', type: 'video', videoUrl: 'https://www.youtube.com/embed/lx6hLpcRMjg' },
    { id: 12, category: 'performances', image: '/gallery/Saarang2025/MeeraRSolo.jpg', title: 'No One', type: 'video', videoUrl: 'https://www.youtube.com/embed/GL4wmk8GBeQ' },

    { id: 13, category: 'jams', image: '/gallery/OpenMicNight-August 31/20240831_201107.jpg', title: 'Anuj and Anushree', type: 'image', event: '1st Open Mic Night' },
    { id: 14, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Harini.jpg', title: 'Harini', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/t46qLSQgBUY' },
    { id: 15, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Suranjana.jpg', title: 'Suranjana Mary Paul Santiago', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/vv6BadAlzVs' },
    { id: 16, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Vijay.jpg', title: 'Vijay', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/31NE44FVR8g' },
    { id: 17, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Caitlin.jpg', title: 'Caitlin', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/DUq0kznKRwU' },
    { id: 18, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Mayukha.jpg', title: 'Mayukha', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/_o3urkRycMg' },
    { id: 19, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Ranjan.jpg', title: 'Ranjan', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/zBUYhD8EIyA' },
    { id: 20, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Benedict.jpg', title: 'Benedict I', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/OuMlbzoIhs8' },
    { id: 21, category: 'competitions', image: '/gallery/MusicReelChallenge2025/ShashwatSingh.jpg', title: 'Shashwat Singh', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/6LimLLpqOTE' },
    { id: 22, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Saniya.jpg', title: 'Katkam Saniya', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/4iDT6WU6MtI' },
    { id: 23, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Duo.jpg', title: 'Anurag and Grishmank', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/nHTZT4Ky9qU' },
    { id: 24, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Tarun.jpg', title: 'Tarun Mamillapalli', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/woGKn0s-mhc' },
    { id: 25, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Benedict2.jpg', title: 'Benedict I', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/4D2zzB3mAVw' },
    
    { id: 26, category: 'covers', image: '/gallery/Farewell2025/Room-823_Farewell.jpg', title: 'Hua Mein', type: 'video', videoUrl: 'https://youtube.com/embed/RtaddCi6TFo' },
    { id: 27, category: 'covers', image: '/gallery/Farewell2025/Ankit_Farewell.jpg', title: 'Bulleya', type: 'video', videoUrl: 'https://youtube.com/embed/esI3k-LUq4Y' },

    // Team Pictures
    { id: 28, category: 'team', image: '/gallery/Team2025/independence_day.jpg', title: 'Independence Day', type: 'image' },
    { id: 29, category: 'team', image: '/gallery/Team2025/merakiday0.jpg', title: 'Meraki Day 0', type: 'image' },
    { id: 30, category: 'team', image: '/gallery/Team2025/merakiday1.jpg', title: 'Meraki Day 1', type: 'image' },
    { id: 31, category: 'team', image: '/gallery/Team2025/repday.jpg', title: 'Republic Day', type: 'image' },
    { id: 32, category: 'team', image: '/gallery/Team2025/saarang.jpg', title: 'Saarang 2025', type: 'image' },
  ];
