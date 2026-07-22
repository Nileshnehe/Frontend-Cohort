import React from 'react'
import "./card.css"
import img from "../assets/girl.jpg"

const Card = () => {
  return (
    <div className='card-container'>
      
      {/* Image Area */}
      <div className='image-wrapper'>
        <img src={img} alt="Profile" className='profile-image' />
      </div>

      {/* Info Section */}
      <div className='info-wrapper'>
        <div className='name-badge-row'>
          <h2>Sophie Bennett</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#1ebd3a" stroke="#1ebd3a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4" stroke="#ffffff" stroke-width="2.5"/></svg>
        </div>
        
        <p className='bio-text'>
          Product Designer who focuses on simplicity & usability.
        </p>
      </div>

      {/* Stats and Action Footer */}
      <div className='footer-stats-container'>
        <div className='stat-item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="footer-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>312</span>
        </div>
        
        <div className='stat-item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="footer-icon"><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M15 3v5a1 1 0 0 0 1 1h5"/></svg>
          <span>48</span>
        </div>

        <button className='follow-action-btn'>
          Follow 
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="plus-icon"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
      </div>

    </div>
  )
}

export default Card
