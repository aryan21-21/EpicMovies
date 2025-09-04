import React from "react";
import "../Movies/Movie.css";
import MovieCard from "../Movies/MovieCard";
import movies from "../Movies/MovieData"; // ✅ import here

const Home = () => {
  return (
    <div className="movie-container">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            title={movie.title}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
