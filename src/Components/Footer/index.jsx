import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>2025 © <a href="/home" className="brand">EpicMovie.gw</a> | All Rights Reserved.</p>
      </div>

      <div className="footer-right ml-5">
        <a href="/Disclaimer">Disclaimer</a>
        <a href="/Download">How To Download?</a>
        <a href="/Group">Join Our Group!</a>
        <a href="/Request">Movie Request Page</a>
      </div>
    </footer>
  ) 
}

export default Footer
