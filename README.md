# Music Club - IIITDM Kancheepuram

This is the official website for the Music Club of IIITDM Kancheepuram, built with [Next.js](https://nextjs.org/) and modern web technologies.

## Features

### Core Features
- 🎵 **Interactive Homepage** with animated sections and modern UI
- 📱 **Responsive Design** that works seamlessly across all devices
- 🎨 **Modern UI/UX** with smooth animations and transitions
- 🌓 **Dark Mode** support with automatic system preference detection

### Sections
1. **Hero Section**
   - Dynamic background with gradient effects
   - Call-to-action buttons for events and membership

2. **About Section**
   - Club history and mission
   - Key features and activities:
     - Regular Jam Sessions
     - Instrument Training
     - Vocal Workshops
     - Live Performances

3. **Gallery Section**
   - Filterable photo gallery
   - Categories: Performances, Workshops, Jam Sessions
   - Smooth animations and transitions
   - Lightbox image viewer

4. **Events Section**
   - Upcoming and past events
   - Event details including date, time, and location
   - Registration links for events
   - Event categories and filtering

5. **Contact Section**
   - Contact form with validation
   - Social media links
   - Club location and contact information

6. **Team Pages**
   - Dedicated pages for 2024 and 2025 teams
   - Team member profiles
   - Role-based organization

### Technical Features
- 🔥 **Next.js 13+** with App Router
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for animations
- 📧 **Contact Form** with Firebase Functions backend
- 🔒 **Form Validation** and error handling
- 🌐 **SEO Optimization** with Next.js metadata
- 🚀 **Performance Optimized** with image optimization
- 🔄 **Real-time Updates** for events and content

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
music-club-app/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   ├── styles/           # Global styles
│   └── public/           # Static assets
├── server/               # Firebase Functions backend
│   └── src/             # Server-side code
└── README.md            # Project documentation
```

## Dependencies

### Frontend
- Next.js 13+
- React 18
- Tailwind CSS
- Framer Motion
- React Icons
- React Slick

### Backend
- Firebase Functions
- Firebase Admin SDK
- Nodemailer

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)

## Deployment

The application is deployed on Vercel for the frontend and Firebase for the backend functions. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
