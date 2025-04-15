export interface GalleryItem {
    id: number;
    category: string;
    image: string;
    title: string;
  }
  
  export const galleryItems: GalleryItem[] = [
    { id: 1, category: 'performances', image: '/performances/20240815_103444.jpg', title: 'Independence Day Performance' },
    { id: 2, category: 'jams', image: '/performances/20240831_210445.jpg', title: 'Weekend Jam Session' },
    { id: 3, category: 'performances', image: '/performances/IMG_9793.JPG', title: 'Blastroduction' },
    { id: 4, category: 'jams', image: '/performances/20240831_210858.jpg', title: 'Weekend Jam Session' },
    { id: 5, category: 'workshops', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'Guitar Workshop' },
    { id: 6, category: 'workshops', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'Vocal Training Workshop' },
    { id: 7, category: 'team', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'Music Club Team 2024' },
    { id: 8, category: 'team', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'Band Practice Session' },
    { id: 9, category: 'team', image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'Music Club Core Team' },
    { id: 10, category: 'team', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'Team Meeting' },
    { id: 11, category: 'team', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'Music Club Leadership' }
  ];