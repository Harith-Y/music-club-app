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
    { id: 5, category: 'performances', image: '/gallery/Enter_Sandman.png', title: 'Enter Sandman', type: 'video', videoUrl: 'https://www.youtube.com/embed/hpURyv_xhu0' },

    { id: 6, category: 'jams', image: '/gallery/OpenMicNight-August 31/20240831_201107.jpg', title: 'Anuj and Anushree', type: 'image', event: '1st Open Mic Night' },
    { id: 7, category: 'competitions', image: '/gallery/MusicReelChallenge/Harini.jpg', title: 'Harini', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/t46qLSQgBUY' },
    { id: 8, category: 'competitions', image: '/gallery/MusicReelChallenge/Suranjana.jpg', title: 'Suranjana Mary Paul Santiago', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/vv6BadAlzVs' },
    { id: 9, category: 'competitions', image: '/gallery/MusicReelChallenge/Vijay.jpg', title: 'Vijay', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/31NE44FVR8g' },
    { id: 10, category: 'competitions', image: '/gallery/MusicReelChallenge/Caitlin.jpg', title: 'Caitlin', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/DUq0kznKRwU' },
    { id: 11, category: 'competitions', image: '/gallery/MusicReelChallenge/Mayukha.jpg', title: 'Mayukha', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/_o3urkRycMg' },
    { id: 12, category: 'competitions', image: '/gallery/MusicReelChallenge/Ranjan.jpg', title: 'Ranjan', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/zBUYhD8EIyA' },
    { id: 13, category: 'competitions', image: '/gallery/MusicReelChallenge/Benedict.jpg', title: 'Benedict I', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/OuMlbzoIhs8' },
    { id: 14, category: 'competitions', image: '/gallery/MusicReelChallenge/ShashwatSingh.jpg', title: 'Shashwat Singh', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/6LimLLpqOTE' },
    { id: 15, category: 'competitions', image: '/gallery/MusicReelChallenge/Saniya.jpg', title: 'Katkam Saniya', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/4iDT6WU6MtI' },
    { id: 16, category: 'competitions', image: '/gallery/MusicReelChallenge/Duo.jpg', title: 'Anurag and Grishmank', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/nHTZT4Ky9qU' },
    { id: 17, category: 'competitions', image: '/gallery/MusicReelChallenge/Tarun.jpg', title: 'Tarun Mamillapalli', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/woGKn0s-mhc' },
    { id: 18, category: 'competitions', image: '/gallery/MusicReelChallenge/Benedict2.jpg', title: 'Benedict I', type: 'video', event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/4D2zzB3mAVw' },
    
    // Team Pictures
    { id: 19, category: 'team', image: '/gallery/team/independence_day.jpg', title: 'Independence Day', type: 'image' },
    { id: 20, category: 'team', image: '/gallery/team/merakiday0.jpg', title: 'Meraki Day 0', type: 'image' },
    { id: 21, category: 'team', image: '/gallery/team/merakiday1.jpg', title: 'Meraki Day 1', type: 'image' },
    { id: 22, category: 'team', image: '/gallery/team/repday.jpg', title: 'Republic Day', type: 'image' },
    { id: 23, category: 'team', image: '/gallery/team/saarang.jpg', title: 'Saarang 2025', type: 'image' },
  ];
