import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css'

function App() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY || 'your_api_key_here'

  useEffect(() => {
    // Fetch trending photos on initial load
    fetchPhotos('trending')
  }, [])

  const fetchPhotos = async (query = 'nature', page = 1) => {
    setLoading(true)
    setError('')
    try {
      const endpoint = query === 'trending' 
        ? `https://api.unsplash.com/photos?per_page=20&page=${page}&order_by=likes`
        : `https://api.unsplash.com/search/photos?query=${query}&per_page=20&page=${page}`
      
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`
        }
      })

      const results = query === 'trending' ? response.data : response.data.results
      
      if (page === 1) {
        setPhotos(results)
      } else {
        setPhotos(prev => [...prev, ...results])
      }
      
      if (results.length === 0) {
        setError('No photos found. Try a different search.')
      }
    } catch (err) {
      console.error('Error fetching photos:', err)
      setError('Failed to fetch photos. Please check your API key.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim()) {
      fetchPhotos(query, 1)
    } else {
      fetchPhotos('trending', 1)
    }
  }

  const handleLoadMore = () => {
    const page = Math.ceil(photos.length / 20) + 1
    fetchPhotos(searchQuery || 'trending', page)
  }

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <div className="error-message">{error}</div>}
      {loading && photos.length === 0 && <LoadingSpinner />}
      <Gallery photos={photos} />
      {photos.length > 0 && (
        <button className="load-more-btn" onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  )
}

export default App
