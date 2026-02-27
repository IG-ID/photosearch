import { Camera } from 'lucide-react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Camera size={32} />
          <h1>PhotoSearch</h1>
        </div>
        <p className="subtitle">Discover beautiful images from around the world</p>
      </div>
    </header>
  )
}
