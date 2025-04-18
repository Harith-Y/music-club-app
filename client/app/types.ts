export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: 'image' | 'video';
  image: string;
  videoUrl?: string;
  event?: string;
} 