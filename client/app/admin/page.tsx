'use client';

import { useState } from 'react';
import { addGalleryItemAtPosition, addEventAtPosition } from '../utils/data-helpers';
import { galleryItems } from '../data/gallery';
import { pastEvents } from '../data/events';
import { GalleryItem } from '../data/gallery';
import { Event } from '../data/events';

export default function AdminPage() {
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
        .replace(/"/g, "'");
      
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
        .replace(/"/g, "'");
      
      setEventResult(formattedResult);
    } catch (error) {
      setEventResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };
  
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Music Club Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gallery Item Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Gallery Item</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Position (0-based index):</label>
            <input 
              type="number" 
              value={galleryPosition} 
              onChange={(e) => setGalleryPosition(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category:</label>
            <select 
              value={newGalleryItem.category} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, category: e.target.value})}
              className="w-full p-2 border rounded"
            >
              <option value="performances">Performances</option>
              <option value="jams">Jams</option>
              <option value="competitions">Competitions</option>
              <option value="covers">Covers</option>
              <option value="team">Team</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title:</label>
            <input 
              type="text" 
              value={newGalleryItem.title} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, title: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image Path:</label>
            <input 
              type="text" 
              value={newGalleryItem.image} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, image: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Type:</label>
            <select 
              value={newGalleryItem.type} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, type: e.target.value as 'image' | 'video'})}
              className="w-full p-2 border rounded"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
          
          {newGalleryItem.type === 'video' && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Video URL:</label>
              <input 
                type="text" 
                value={newGalleryItem.videoUrl} 
                onChange={(e) => setNewGalleryItem({...newGalleryItem, videoUrl: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Event (optional):</label>
            <input 
              type="text" 
              value={newGalleryItem.event} 
              onChange={(e) => setNewGalleryItem({...newGalleryItem, event: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <button 
            onClick={handleAddGalleryItem}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate Gallery Item
          </button>
          
          {galleryResult && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-1">Result (copy and replace in gallery.ts):</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-60">
                {galleryResult}
              </pre>
            </div>
          )}
        </div>
        
        {/* Event Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Position (0-based index):</label>
            <input 
              type="number" 
              value={eventPosition} 
              onChange={(e) => setEventPosition(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title:</label>
            <input 
              type="text" 
              value={newEvent.title} 
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Date:</label>
            <input 
              type="text" 
              value={newEvent.date} 
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Time:</label>
            <input 
              type="text" 
              value={newEvent.time} 
              onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Location:</label>
            <input 
              type="text" 
              value={newEvent.location} 
              onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description:</label>
            <textarea 
              value={newEvent.description} 
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image Path:</label>
            <input 
              type="text" 
              value={newEvent.image} 
              onChange={(e) => setNewEvent({...newEvent, image: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category:</label>
            <select 
              value={newEvent.category} 
              onChange={(e) => setNewEvent({...newEvent, category: e.target.value as 'Performances' | 'Open Mics' | 'Competitions' | 'Workshops'})}
              className="w-full p-2 border rounded"
            >
              <option value="Performances">Performances</option>
              <option value="Open Mics">Open Mics</option>
              <option value="Competitions">Competitions</option>
              <option value="Workshops">Workshops</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Registration Link (optional):</label>
            <input 
              type="text" 
              value={newEvent.registrationLink} 
              onChange={(e) => setNewEvent({...newEvent, registrationLink: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">YouTube URL (optional):</label>
            <input 
              type="text" 
              value={newEvent.youtubeUrl} 
              onChange={(e) => setNewEvent({...newEvent, youtubeUrl: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">View Bands Link (optional):</label>
            <input 
              type="text" 
              value={newEvent.viewBandsLink} 
              onChange={(e) => setNewEvent({...newEvent, viewBandsLink: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Gallery Route (optional):</label>
            <input 
              type="text" 
              value={newEvent.galleryRoute} 
              onChange={(e) => setNewEvent({...newEvent, galleryRoute: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <button 
            onClick={handleAddEvent}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Generate Event
          </button>
          
          {eventResult && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-1">Result (copy and replace in events.ts):</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-60">
                {eventResult}
              </pre>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h2 className="text-lg font-semibold mb-2">How to Use This Tool</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Fill out the form for the item you want to add (Gallery Item or Event)</li>
          <li>Click the "Generate" button</li>
          <li>Copy the generated code from the result box</li>
          <li>Open the corresponding data file (gallery.ts or events.ts)</li>
          <li>Replace the existing array with the new one</li>
          <li>Save the file and your changes will be reflected in the app</li>
        </ol>
      </div>
    </div>
  );
} 