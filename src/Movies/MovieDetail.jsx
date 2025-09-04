import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../Movies/MovieData"; // ✅ import the same data
import "./MovieDetail.css";
import Button from "../Components/Button"

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2 className="not-found">Movie Not Found</h2>;

  return (
    <div className="movie-detail">
      <Button></Button>
      <Link to="/" className="back-link">⬅ Back</Link>
      <h1>{movie.details}</h1>
      <img src={movie.poster} alt="" className="imges"/>
      <p><b>IMDB:</b> {movie.imdb}</p>
      <p><b>Genre:</b> {movie.genre}</p>
      <p><b>Stars:</b> {movie.stars}</p>
      <p><b>Director:</b> {movie.director}</p>
      <p><b>Language:</b> {movie.language}</p>
      <p><b>Qulity:</b> {movie.qulity}</p>

      
      <h3>Screenshots:</h3>
      <div className="screenshots">
        {movie.screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`screenshot-${index}`}
          />
        ))}
      </div>
      <h3>Downloads:</h3>
      <ul>
        {movie.downloads.map((dl, index) => (
          <li key={index}>
            <a href={dl.link} target="_blank" rel="noopener noreferrer">
              {dl.label}
            </a>
          </li>
        ))}
      </ul>
  
    </div>
  );
}
