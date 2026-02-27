import PhotoCard from './PhotoCard'
import './Gallery.css'

export default function Gallery({ photos }) {
  if (photos.length === 0) {
    return (
      <div className="gallery-empty">
        <p>No photos to display. Try searching for something!</p>
      </div>
    )
  }

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  )
}
