import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>2025 © <a href="/home" className="brand">EpicMovie.gw</a> | All Rights Reserved.</p>
      </div>

      <div className="footer-right ml-5">
        <a href="/disclaimer">Disclaimer</a>
        <a href="/how-to-download">How To Download?</a>
        <a href="/join-group">Join Our Group!</a>
        <a href="/movie-request">Movie Request Page</a>
      </div>
    </footer>
  )
}

export default Footer
