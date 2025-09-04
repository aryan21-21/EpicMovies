import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ id, poster, title, description }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        {/* Movie Poster */}
        <img src={poster} alt={title} />

        {/* Info Section */}
        <div className="movie-info-card">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
