import React from "react";
// import "../Movies/Movie.css";  // Import CSS

const movies = [
  {
    poster : "https://image.tmdb.org/t/p/w500/njq3p81KoTVd0lWqGeudId7WwUn.jpg",
    title : "3BHK (2025)",
    description : "WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/9LCpHFXZgkqp2AWiYq0mGbfZauk.jpg",
    title : "Shadow Force (2025)",
    description : "BluRay [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/jg3YdxDNlxay0NWTxgAPif647Hj.jpg",
    title : "My Life with the Walter Boys (Season 1) ",
    description : "WEB-DL [Hindi (DD5.1) & English] 1080p 720p & 480p [x264/ESubs] | NF Series",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/4kFKAGcyEAMg6M5OegMLdTLcROn.jpg",
    title : "Vash Level 2 (2025) ",
    description : "V2 HDTC [Hindi (LiNE) & Gujarati (LiNE)] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/5lUmWTGkEcYnXujixXn31o9q2T0.jpg",
    title : "Ne Zha 2 (2025) ",
    description : "WEB-DL [Hindi (DD5.1) & Chinese] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg",
    title : "I Know What You Did Last Summer (2025)",
    description : "WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/5DJbIWxIotQYUnRrRGhSxjxmvye.jpg",
    title : "The Bad Guys 2 (2025)",
    description : "DS4K WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg",
    title : "The Terminal List: Dark Wolf (Season 1)",
    description : " WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | PrimeVideo Series | | [EP 1-3 Added]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/1I0ORYrbqZxtKmuwsoRIaajUvBg.jpg",
    title : "Thunderbolts* (2025)",
    description : "BluRay [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/df99KX4saul55rPGEJdcj4hL95G.jpg",
    title : "Alien: Earth (Season 1) ",
    description : "WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | FX Series | [EP-4 Added]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/6x0wmp2LlLqhEbd8XKjJpTHdHsT.jpg",
    title : "Kingdom (2025)",
    description : "WEB-DL [Hindi (DD5.1) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie [Saamrajya]",
  },
  {
    poster : "https://image.tmdb.org/t/p/original/qTNIxDIzKjLLuS17fxdXjcKAlW7.jpg",
    title : "SAKAMOTO DAYS (Season 1) ",
    description : "WEB-DL [Hindi (DD5.1) & English] 1080p 720p & 480p [x264/ESub] | NF Series | [EP-18 Added]",
  },
  {
    poster : "https://catimages.org/images/2025/08/25/Rangasthalam-2018-HDHub4u.Ms.jpg",
    title : "Rangasthalam (2018) ",
    description : "UNCUT DS4K WEB-DL [Hindi (DD2.0) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2025/08/03/Beyond-the-Bar-2025-S01-HDHub4u.Ms.jpg",
    title : "Beyond the Bar (Season 1) ",
    description : "WEB-DL [Hindi (DD2.0) & English] 1080p 720p & 480p [x264/ESub] | NF Series | [EP-8 Added]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg",
    title : "Peacemaker (Season 2)",
    description : "WEB-DL [Hindi (DD2.0) & English] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | HBO Series | [EP-1 Added]",
   },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },    
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
  // {
  //   poster : "",
  //   title : "",
  //   description : "",
  // },
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
