import { useState } from 'react'
import { Heart, Download, ExternalLink } from 'lucide-react'
import './PhotoCard.css'

export default function PhotoCard({ photo }) {
  const [liked, setLiked] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="photo-card" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      <div className="photo-image-container">
        <img 
          src={photo.urls.small} 
          alt={photo.alt_description || 'Photo'} 
          className="photo-image"
        />
        {showDetails && (
          <div className="photo-overlay">
            <div className="photo-actions">
              <a 
                href={photo.urls.full} 
                download 
                className="action-btn download-btn"
                title="Download"
              >
                <Download size={20} />
              </a>
              <a 
                href={photo.links.html} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn view-btn"
                title="View on Unsplash"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
      
      <div className="photo-info">
        <div className="photographer">
          <img 
            src={photo.user.profile_image.small} 
            alt={photo.user.name}
            className="photographer-avatar"
          />
          <div>
            <p className="photographer-name">{photo.user.name}</p>
            <p className="photographer-username">@{photo.user.username}</p>
          </div>
        </div>
        
        <div className="photo-stats">
          <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={toggleLike}
          >
            <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
            <span>{photo.likes + (liked ? 1 : 0)}</span>
          </button>
          {photo.downloads != null && (
            <span className="view-count">↓ {Math.floor(photo.downloads)}</span>
          )}
        </div>

        {photo.description && (
          <p className="photo-description">{photo.description}</p>
        )}
      </div>
    </div>
  )
}
