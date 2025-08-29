import React from "react";
// import "../Movies/Movie.css";  // Import CSS

const movies = [
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },    
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
  {
    poster : "",
    title : "",
    description : "",
  },
];

const MovieCard = ({ poster, title, description }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Movie1 = () => {
  return (
    <div className="movie-container">
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            poster={movie.poster}
            title={movie.title}
            description={movie.description}
          />
          ))
          }
      </div>
    </div>
  );
};

export default Movie1;
