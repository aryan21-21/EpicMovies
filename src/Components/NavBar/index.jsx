import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showGenres, setShowGenres] = useState(false);

  return (
    <nav className="movie-navbar">
      <div className="nav-container">
    
        <div className="nav-links">
          <a href="/home" className='nav-link'>EpicMovie Home <IoHomeOutline></IoHomeOutline></a>
          <a href="/Bollywood" className="nav-link">BollyWood</a>
          <a href="/Hollywood" className="nav-link">HollyWood</a>
          <a href="HindiDubbes" className="nav-link">HindiDubbed</a>
          <a href="/SouthHindi" className="nav-link">SouthHindi</a>
          <a href="/Webseries" className="nav-link">Web series</a>
          <a href="/Adult" className="nav-link">18+</a>
          
        
          <div 
            className="genres-dropdown"
            onMouseEnter={() => setShowGenres(true)}
            onMouseLeave={() => setShowGenres(false)}
          >
            <button className="genres-btn">
              GENRES <IoMdArrowDropdown></IoMdArrowDropdown>
            </button>
            
            {showGenres && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Action</a>
                <a href="#" className="dropdown-item">Comedy</a>
                <a href="#" className="dropdown-item">Drama</a>
                <a href="#" className="dropdown-item">Thriller</a>
                <a href="#" className="dropdown-item">Romance</a>
                <a href="#" className="dropdown-item">Horror</a>
                <a href="#" className="dropdown-item">Sci-Fi</a>
                <a href="#" className="dropdown-item">More...</a>
              </div>
            )}
          </div>
        </div>
        
        <div className="nav-search">
          <input type="text" placeholder="Search movies..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;