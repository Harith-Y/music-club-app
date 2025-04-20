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
    { id: 1, category: 'performances', image: '/performances/20240815_103444.jpg', title: 'Independence Day Performance', type: 'image' as const },
    { id: 2, category: 'jams', image: '/performances/20240831_210445.jpg', title: 'Weekend Jam Session', type: 'image' as const },
    { id: 3, category: 'performances', image: '/performances/IMG_9793.jpg', title: 'Blastroduction', type: 'image' as const },
    { id: 4, category: 'jams', image: '/performances/20240831_210858.jpg', title: 'Weekend Jam Session', type: 'image' as const },
    { id: 5, category: 'performances', image: '/gallery/Enter_SaMusicReelChallenge2025ndman.png', title: 'Enter Sandman', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/hpURyv_xhu0' },
    { id: 6, category: 'performances', image: '/gallery/Saarang2025/Saarang2025.jpg', title: 'Dream On', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/_S_q-sEy6Pg' },
    { id: 7, category: 'performances', image: '/gallery/Saarang2025/Saarang2025.jpg', title: 'For Whom the Bell Tolls', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/zYfgVTm52_U' },
    { id: 8, category: 'performances', image: '/gallery/Saarang2025/DrumsSolo.jpg', title: 'Drums Solo', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/G42Gx7FuPEc' },
    { id: 9, category: 'performances', image: '/gallery/Saarang2025/ShriyaSolo.jpg', title: 'I Wanna Know What Love Is', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/NtB7KgQwaCc' },
    { id: 10, category: 'performances', image: '/gallery/Saarang2025/KeyboardSolo.jpg', title: 'Keyboard Solo', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/0bX-TSTKmEE'},
    { id: 11, category: 'performances', image: '/gallery/Saarang2025/MeeraKSolo.jpg', title: 'In case you don\'t Live Forever', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/lx6hLpcRMjg' },
    { id: 12, category: 'performances', image: '/gallery/Saarang2025/MeeraRSolo.jpg', title: 'No One', type: 'video' as const, videoUrl: 'https://www.youtube.com/embed/GL4wmk8GBeQ' },

    { id: 13, category: 'jams', image: '/gallery/OpenMicNight-August 31/20240831_201107.jpg', title: 'Anuj and Anushree', type: 'image' as const, event: '1st Open Mic Night' },
    { id: 14, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Harini.jpg', title: 'Harini', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/t46qLSQgBUY' },
    { id: 15, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Suranjana.jpg', title: 'Suranjana Mary Paul Santiago', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/vv6BadAlzVs' },
    { id: 16, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Vijay.jpg', title: 'Vijay', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/31NE44FVR8g' },
    { id: 17, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Caitlin.jpg', title: 'Caitlin', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/DUq0kznKRwU' },
    { id: 18, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Mayukha.jpg', title: 'Mayukha', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/_o3urkRycMg' },
    { id: 19, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Ranjan.jpg', title: 'Ranjan', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/zBUYhD8EIyA' },
    { id: 20, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Benedict.jpg', title: 'Benedict I', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/OuMlbzoIhs8' },
    { id: 21, category: 'competitions', image: '/gallery/MusicReelChallenge2025/ShashwatSingh.jpg', title: 'Shashwat Singh', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/6LimLLpqOTE' },
    { id: 22, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Saniya.jpg', title: 'Katkam Saniya', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/4iDT6WU6MtI' },
    { id: 23, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Duo.jpg', title: 'Anurag and Grishmank', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/nHTZT4Ky9qU' },
    { id: 24, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Tarun.jpg', title: 'Tarun Mamillapalli', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/woGKn0s-mhc' },
    { id: 25, category: 'competitions', image: '/gallery/MusicReelChallenge2025/Benedict2.jpg', title: 'Benedict I', type: 'video' as const, event: 'Music Reel Challenge', videoUrl: 'https://youtube.com/embed/4D2zzB3mAVw' },
    
    { id: 26, category: 'covers', image: '/gallery/Farewell2025/Room-823_Farewell.jpg', title: 'Hua Mein', type: 'video' as const, videoUrl: 'https://youtube.com/embed/RtaddCi6TFo' },
    { id: 27, category: 'covers', image: '/gallery/Farewell2025/Ankit_Farewell.jpg', title: 'Bulleya', type: 'video' as const, videoUrl: 'https://youtube.com/embed/esI3k-LUq4Y' },

    // Team Pictures
    { id: 28, category: 'team', image: '/gallery/Team2025/independence_day.jpg', title: 'Independence Day', type: 'image' as const },
    { id: 29, category: 'team', image: '/gallery/Team2025/merakiday0.jpg', title: 'Meraki Day 0', type: 'image' as const },
    { id: 30, category: 'team', image: '/gallery/Team2025/merakiday1.jpg', title: 'Meraki Day 1', type: 'image' as const },
    { id: 31, category: 'team', image: '/gallery/Team2025/repday.jpg', title: 'Republic Day', type: 'image' as const },
    { id: 32, category: 'team', image: '/gallery/Team2025/saarang.jpg', title: 'Saarang 2025', type: 'image' as const },
  ].map((item, index) => ({
    ...item,
    order: index
  }));
