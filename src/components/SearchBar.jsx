import { useState } from 'react'
import { Search } from 'lucide-react'
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-container">
        <Search className="search-icon" size={24} />
        <input
          type="text"
          placeholder="Search for photos... (landscapes, nature, cities, etc.)"
          value={query}
          onChange={handleChange}
          className="search-input"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="clear-btn"
          >
            ✕
          </button>
        )}
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
    </form>
  )
}
