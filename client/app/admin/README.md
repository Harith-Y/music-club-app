# Music Club Admin Interface

This admin interface allows you to easily add new gallery items and events to your Music Club application without having to manually update IDs.

## How to Use

1. Navigate to `/admin` in your application
2. Fill out the form for the item you want to add (Gallery Item or Event)
3. Click the "Generate" button
4. Copy the generated code from the result box
5. Open the corresponding data file (gallery.ts or events.ts)
6. Replace the existing array with the new one
7. Save the file and your changes will be reflected in the app

## Adding a Gallery Item

When adding a gallery item, you need to provide:

- **Position**: The 0-based index where you want to insert the item
- **Category**: The category of the item (performances, jams, competitions, covers, team)
- **Title**: The title of the item
- **Image Path**: The path to the image file
- **Type**: Whether it's an image or video
- **Video URL**: (Only for videos) The YouTube embed URL
- **Event**: (Optional) The event associated with the item

## Adding an Event

When adding an event, you need to provide:

- **Position**: The 0-based index where you want to insert the event
- **Title**: The title of the event
- **Date**: The date of the event
- **Time**: The time of the event
- **Location**: The location of the event
- **Description**: A description of the event
- **Image Path**: The path to the image file
- **Category**: The category of the event (Performances, Open Mics, Competitions, Workshops)
- **Registration Link**: (Optional) A link to register for the event
- **YouTube URL**: (Optional) A YouTube embed URL for the event
- **View Bands Link**: (Optional) A link to view bands for the event
- **Gallery Route**: (Optional) A route to the gallery for the event

## Security Note

This admin interface is not protected by authentication. In a production environment, you should add authentication to restrict access to authorized users only. 