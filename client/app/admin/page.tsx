'use client';

import { useState, useEffect } from 'react';
import { addGalleryItemAtPosition, addEventAtPosition } from '../utils/data-helpers';
import { galleryItems } from '../data/gallery';
import { pastEvents } from '../data/events';
import { GalleryItem } from '../data/gallery';
import { Event } from '../data/events';

export default function AdminPage() {
  // Use useEffect to ensure client-side rendering
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Gallery form state
  const [galleryPosition, setGalleryPosition] = useState(0);
  const [newGalleryItem, setNewGalleryItem] = useState<Omit<GalleryItem, 'id'>>({
    category: 'performances',
    image: '',
    title: '',
    type: 'image',
    videoUrl: '',
    event: ''
  });
  
  // Event form state
  const [eventPosition, setEventPosition] = useState(0);
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: '',
    category: 'Performances',
    registrationLink: '',
    youtubeUrl: '',
    viewBandsLink: '',
    galleryRoute: ''
  });
  
  // Results state
  const [galleryResult, setGalleryResult] = useState<string>('');
  const [eventResult, setEventResult] = useState<string>('');
  const [copyStatus, setCopyStatus] = useState<{gallery: boolean, event: boolean}>({gallery: false, event: false});
  
  // Handle copying code to clipboard
  const copyToClipboard = (text: string, type: 'gallery' | 'event') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus(prev => ({...prev, [type]: true}));
      setTimeout(() => {
        setCopyStatus(prev => ({...prev, [type]: false}));
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };
  
  // Handle adding a new gallery item
  const handleAddGalleryItem = () => {
    try {
      const updatedItems = addGalleryItemAtPosition(
        galleryItems, 
        newGalleryItem, 
        galleryPosition
      );
      
      // Format the result for easy copying
      const formattedResult = JSON.stringify(updatedItems, null, 2)
        .replace(/"id":/g, 'id:')
        .replace(/"category":/g, 'category:')
        .replace(/"image":/g, 'image:')
        .replace(/"title":/g, 'title:')
        .replace(/"type":/g, 'type:')
        .replace(/"videoUrl":/g, 'videoUrl:')
        .replace(/"event":/g, 'event:')
        .replace(/"order":/g, 'order:')
        .replace(/type: 'image'/g, "type: 'image' as const")
        .replace(/type: 'video'/g, "type: 'video' as const");
      
      setGalleryResult(formattedResult);
    } catch (error) {
      setGalleryResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };
  
  // Handle adding a new event
  const handleAddEvent = () => {
    try {
      const updatedEvents = addEventAtPosition(
        pastEvents, 
        newEvent, 
        eventPosition
      );
      
      // Format the result for easy copying
      const formattedResult = JSON.stringify(updatedEvents, null, 2)
        .replace(/"id":/g, 'id:')
        .replace(/"title":/g, 'title:')
        .replace(/"date":/g, 'date:')
        .replace(/"time":/g, 'time:')
        .replace(/"location":/g, 'location:')
        .replace(/"description":/g, 'description:')
        .replace(/"image":/g, 'image:')
        .replace(/"category":/g, 'category:')
        .replace(/"registrationLink":/g, 'registrationLink:')
        .replace(/"youtubeUrl":/g, 'youtubeUrl:')
        .replace(/"viewBandsLink":/g, 'viewBandsLink:')
        .replace(/"galleryRoute":/g, 'galleryRoute:')
        .replace(/"order":/g, 'order:')
        .replace(/category: 'Performances'/g, "category: 'Performances' as const")
        .replace(/category: 'Open Mics'/g, "category: 'Open Mics' as const")
        .replace(/category: 'Competitions'/g, "category: 'Competitions' as const")
        .replace(/category: 'Workshops'/g, "category: 'Workshops' as const");
      
      setEventResult(formattedResult);
    } catch (error) {
      setEventResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };
  
  // If not on client, show loading state
  if (!isClient) {
    return <div className="p-4 text-gray-900 dark:text-white">Loading...</div>;
  }
  
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Music Club Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gallery Item Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Gallery Item</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Position (0-based index):</label>
            <input 
              type="number" 
              value={galleryPosition} 
              onChange={(e) => setGalleryPosition(parseInt(e.target.value))}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Category:</label>
            <select 
              value={newGalleryItem.category} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, category: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            >
              <option value="performances">Performances</option>
              <option value="jams">Jams</option>
              <option value="competitions">Competitions</option>
              <option value="covers">Covers</option>
              <option value="team">Team</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Title:</label>
            <input 
              type="text" 
              value={newGalleryItem.title} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, title: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Image Path:</label>
            <input 
              type="text" 
              value={newGalleryItem.image} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, image: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Type:</label>
            <select 
              value={newGalleryItem.type} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, type: e.target.value as 'image' | 'video'})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
          
          {newGalleryItem.type === 'video' && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Video URL:</label>
              <input 
                type="text" 
                value={newGalleryItem.videoUrl} 
                onChange={(e) => setNewGalleryItem({...newGalleryItem, videoUrl: e.target.value})}
                className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Event (optional):</label>
            <input 
              type="text" 
              value={newGalleryItem.event} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, event: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <button 
            onClick={handleAddGalleryItem}
            className="btn-primary w-full"
          >
            Generate Gallery Item
          </button>
          
          {galleryResult && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Result (copy and replace in gallery.ts):</h3>
                <button 
                  onClick={() => copyToClipboard(galleryResult, 'gallery')}
                  className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {copyStatus.gallery ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded text-xs overflow-auto max-h-60 text-gray-900 dark:text-white">
                {galleryResult}
              </pre>
            </div>
          )}
        </div>
        
        {/* Event Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Event</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Position (0-based index):</label>
            <input 
              type="number" 
              value={eventPosition} 
              onChange={(e) => setEventPosition(parseInt(e.target.value))}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Title:</label>
            <input 
              type="text" 
              value={newEvent.title} 
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Date:</label>
            <input 
              type="text" 
              value={newEvent.date} 
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Time:</label>
            <input 
              type="text" 
              value={newEvent.time} 
              onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Location:</label>
            <input 
              type="text" 
              value={newEvent.location} 
              onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Description:</label>
            <textarea 
              value={newEvent.description} 
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              rows={3}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Image Path:</label>
            <input 
              type="text" 
              value={newEvent.image} 
              onChange={(e) => setNewEvent({...newEvent, image: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Category:</label>
            <select 
              value={newEvent.category} 
              onChange={(e) => setNewEvent({...newEvent, category: e.target.value as 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops'})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            >
              <option value="Performances">Performances</option>
              <option value="Open Mics">Open Mics</option>
              <option value="Competitions">Competitions</option>
              <option value="Workshops">Workshops</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Registration Link (optional):</label>
            <input 
              type="text" 
              value={newEvent.registrationLink} 
              onChange={(e) => setNewEvent({...newEvent, registrationLink: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">YouTube URL (optional):</label>
            <input 
              type="text" 
              value={newEvent.youtubeUrl} 
              onChange={(e) => setNewEvent({...newEvent, youtubeUrl: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">View Bands Link (optional):</label>
            <input 
              type="text" 
              value={newEvent.viewBandsLink} 
              onChange={(e) => setNewEvent({...newEvent, viewBandsLink: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Gallery Route (optional):</label>
            <input 
              type="text" 
              value={newEvent.galleryRoute} 
              onChange={(e) => setNewEvent({...newEvent, galleryRoute: e.target.value})}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
          
          <button 
            onClick={handleAddEvent}
            className="btn-primary w-full"
          >
            Generate Event
          </button>
          
          {eventResult && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Result (copy and replace in events.ts):</h3>
                <button 
                  onClick={() => copyToClipboard(eventResult, 'event')}
                  className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {copyStatus.event ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded text-xs overflow-auto max-h-60 text-gray-900 dark:text-white">
                {eventResult}
              </pre>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How to Use This Tool</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Fill out the form for the item you want to add (Gallery Item or Event)</li>
          <li>Click the "Generate" button</li>
          <li>Click the "Copy" button to copy the generated code</li>
          <li>Open the corresponding data file (gallery.ts or events.ts)</li>
          <li>Replace the existing array with the new one</li>
          <li>Save the file and your changes will be reflected in the app</li>
        </ol>
      </div>
    </div>
  );
} 