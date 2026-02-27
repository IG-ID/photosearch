# Photo Search App - Setup Guide

## Overview

This is a React.js photo search application that allows users to search and browse high-quality images from Unsplash.

## Features

- 🔍 Real-time photo search powered by Unsplash API
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 💾 Download photos directly
- ❤️ Like/favorite system
- 📱 Mobile-friendly design
- ⚡ Fast and smooth interactions

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Get Unsplash API Key:**
   - Go to [Unsplash Developers](https://unsplash.com/developers)
   - Sign up for a free account
   - Create a new application to get your API key
   - Copy your Access Key

3. **Configure API Key:**
   - Rename `.env.example` to `.env.local` (or update the existing `.env.local`)
   - Replace `your_unsplash_api_key_here` with your actual Unsplash API key

   ```env
   VITE_UNSPLASH_API_KEY=your_actual_api_key_here
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx              # Main app component
├── App.css              # App styles
├── index.css            # Global styles
└── components/
    ├── Header.jsx       # Page header
    ├── Header.css
    ├── SearchBar.jsx    # Search input component
    ├── SearchBar.css
    ├── Gallery.jsx      # Photo grid container
    ├── Gallery.css
    ├── PhotoCard.jsx    # Individual photo card
    ├── PhotoCard.css
    ├── LoadingSpinner.jsx
    └── LoadingSpinner.css
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP requests
- **Lucide React** - Icon library
- **Unsplash API** - Photo source

## Features Explained

### Search

- Search for any type of photos (landscapes, nature, cities, etc.)
- Results update in real-time
- Shows trending photos on initial load

### Photo Card

- View photographer information
- Like/unlike photos
- Download full-resolution images
- View on Unsplash link
- Photo details and statistics

### Responsive Design

- Optimized for desktop, tablet, and mobile
- Touch-friendly interface
- Smooth animations and transitions

### Load More

- Pagination support
- Load additional photos on demand
- Maintains search context

## API Usage

The app uses the free tier of Unsplash API, which allows:

- 50 requests per hour for demo applications
- 5000 requests per hour with proper authentication

## Troubleshooting

### No photos appearing?

- Check if your API key is correct in `.env.local`
- Verify internet connection
- Check browser console for error messages

### API rate limit exceeded?

- Wait for the hourly quota to reset
- Consider upgrading your Unsplash application

### Styling issues?

- Clear browser cache
- Run `npm install` again
- Restart the dev server

## Future Enhancements

- ✨ User authentication
- 📚 Favorites collection
- 🔖 Bookmarks and collections
- 🎨 Image filters
- 📊 Image statistics
- 🌙 Dark mode toggle
- 🔄 Infinite scroll
- 💬 Comments and ratings

## License

This project is open source and available under the MIT License.

## Support

For issues with the Unsplash API, visit: <https://unsplash.com/developers>
