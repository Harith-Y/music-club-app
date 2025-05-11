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
  // 2025 gallery items will be added here
  {
    category: "performances",
    // image: "/NoThumbnail.jpg",
    image: "https://firebasestorage.googleapis.com/v0/b/music-club-app-802a6.firebasestorage.app/o/NoThumbnail.jpg?alt=media&token=207d52dc-f14d-4ad0-a9cb-f5016454d32e",
    title: "Stage Set-Up",
    type: 'image' as const,
    event: "Winter Concert (Club Performance)",
    id: 0,
    order: 0
  },
].map((item, index) => ({
  ...item,
  order: index,
  type: item.type as 'image' | 'video'
})); 