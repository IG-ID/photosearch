# Photo Search App - React.js

A modern, full-featured photo search application built with React.js that allows users to discover and download beautiful images from Unsplash.

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Get Unsplash API Key:**
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Create a free account and register an application
   - Copy your Access Key

3. **Configure the app:**
   - Update `.env.local` with your API key:

     ```
     VITE_UNSPLASH_API_KEY=your_api_key_here
     ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

The app will automatically open at `http://localhost:3000`

## ✨ Features

- 🔍 **Real-time Search** - Search for any type of photos using the Unsplash API
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ❤️ **Like System** - Mark your favorite photos
- 💾 **Download** - Download full-resolution images directly
- 🎨 **Beautiful UI** - Modern, gradient design with smooth animations
- ⚡ **Performance** - Fast, optimized with Vite
- 📸 **Trending Photos** - Browse trending images on app load
- ♾️ **Infinite Scroll** - Load more photos on demand

## 🛠️ Technology Stack

- **React 18** - UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS & CSS3** - Styling and animations
- **Axios** - HTTP client for API requests
- **Lucide React** - Beautiful icon library
- **Unsplash API** - Image data source

## 📁 Project Structure

```
src/
├── main.jsx                 # React entry point
├── App.jsx                  # Main application component
├── App.css                  # App styles
├── index.css                # Global styles
└── components/
    ├── Header.jsx           # Header with title and logo
    ├── SearchBar.jsx        # Search input component
    ├── Gallery.jsx          # Photo grid container
    ├── PhotoCard.jsx        # Individual photo card
    ├── LoadingSpinner.jsx   # Loading indicator
```

## 🎯 How It Works

1. **Search** - Enter a query in the search bar (e.g., "mountain", "city", "nature")
2. **Browse** - View results in a beautiful grid layout
3. **Interact** - Like photos, download, or view source on Unsplash
4. **Load More** - Click "Load More" to fetch additional results

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📚 Documentation

See [SETUP.md](./SETUP.md) for detailed setup instructions and troubleshooting.

## 🚀 Deployment

The app can be deployed to: Vercel, Netlify, GitHub Pages, or custom server.

## 📝 API Information

- Uses **Unsplash API** (free tier)
- Free tier allows 50 requests/hour
- Requires valid API key from [Unsplash Developer Dashboard](https://unsplash.com/developers)

## 🐛 Troubleshooting

**No photos showing?**

- Verify your API key in `.env.local`
- Check browser console for errors
- Ensure internet connection is active

## 📄 License

This project is open source and available under the MIT License.
