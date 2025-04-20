import { GalleryItem, insertGalleryItem } from '../data/gallery';
import { Event, insertEvent } from '../data/events';

/**
 * Example of how to insert a new gallery item at a specific position
 * @param items The current gallery items array
 * @param newItem The new item to insert (without an ID)
 * @param position The position to insert the item at (0-based index)
 * @returns A new array with the item inserted at the specified position
 */
export function addGalleryItemAtPosition(
  items: GalleryItem[],
  newItem: Omit<GalleryItem, 'id'>,
  position: number
): GalleryItem[] {
  return insertGalleryItem(items, newItem, position);
}

/**
 * Example of how to insert a new event at a specific position
 * @param items The current events array
 * @param newItem The new event to insert (without an ID)
 * @param position The position to insert the event at (0-based index)
 * @returns A new array with the event inserted at the specified position
 */
export function addEventAtPosition(
  items: Event[],
  newItem: Omit<Event, 'id'>,
  position: number
): Event[] {
  return insertEvent(items, newItem, position);
}

/**
 * Example usage:
 * 
 * // To add a new gallery item at position 5:
 * const newGalleryItem = {
 *   category: 'performances',
 *   image: '/path/to/image.jpg',
 *   title: 'New Performance',
 *   type: 'image' as const
 * };
 * 
 * const updatedGalleryItems = addGalleryItemAtPosition(galleryItems, newGalleryItem, 5);
 * 
 * // To add a new event at position 3:
 * const newEvent = {
 *   title: 'New Concert',
 *   date: 'June 1, 2025',
 *   time: '7:00 PM',
 *   location: 'Main Hall',
 *   description: 'A new concert description',
 *   image: '/path/to/image.jpg',
 *   category: 'Performances' as const
 * };
 * 
 * const updatedEvents = addEventAtPosition(pastEvents, newEvent, 3);
 */ 