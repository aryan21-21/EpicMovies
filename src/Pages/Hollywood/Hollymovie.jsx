import React from "react";

const movies = [
      {
        poster  : "https://image.tmdb.org/t/p/w500/1I0ORYrbqZxtKmuwsoRIaajUvBg.jpg",
        title : "Thunderbolts* (2025)",
        description : "BluRay [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
      },
      {
        poster  : "https://imgshare.info/images/2025/08/27/The.Boss.Baby.2017.jpg",
        title : "The Boss Baby (2017) ",
        description : "BluRay Dual Audio [Hindi ORG5.1 & English] 1080p 720p 480p x264 HD | Full Movie",
      },
      {
        poster  : "https://image.tmdb.org/t/p/w500/5DJbIWxIotQYUnRrRGhSxjxmvye.jpg",
        title : "The Bad Guys 2 (2025)",
        description : "DS4K WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
      },
      {
        poster:"https://imgshare.info/images/2025/08/27/Blade-Runner-1982.jpg",
        title : "Blade Runner (1982) ",
        description : "BluRay Dual Audio [Hindi DD 2.0 & English] 1080p 720p & 480p x264 HD | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        title: "Deadpool & Wolverine (2024)",
        description: "IMAX WEB-DL [English + Hindi] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        title: "Dune: Part Two (2024)",
        description: "BluRay [English + Hindi] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
        title: "Kung Fu Panda 4 (2024)",
        description: "WEB-DL [English + Hindi] 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
        title: "Godzilla x Kong: The New Empire (2024)",
        description: "HDRip [English + Hindi] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
        title: "The Beekeeper (2024)",
        description: "WEB-DL [English + Hindi] 1080p 720p & 480p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/dbhN0rEVTefOOgtuqEQwp4tXr0X.jpg",
        title: "Inside Out 2 (2024)",
        description: "WEBRip [English + Hindi] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
        title: "Furiosa: A Mad Max Saga (2024)",
        description: "HDRip [English + Hindi] 4K 1080p 720p & 480p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        title: "Venom: The Last Dance (2024)",
        description: "WEB-DL [English + Hindi] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
        title: "Kingdom of the Planet of the Apes (2024)",
        description: "BluRay [English + Hindi] 4K 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/qekky2LbtT1wtbD5MDgQvjfZQ24.jpg",
        title: "Bad Boys: Ride or Die (2024)",
        description: "HDRip [English + Hindi] 1080p 720p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        title: "Civil War (2024)",
        description: "BluRay [English + Hindi] 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        title: "Aquaman and the Lost Kingdom (2023)",
        description: "WEBRip [English + Hindi] 1080p 720p & 480p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w400/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        title: "Wonka (2023)",
        description: "BluRay [English + Hindi] 1080p 720p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        title: "Avatar: The Way of Water (2022)",
        description: "BluRay [English + Hindi] 4K 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
        title: "The Marvels (2023)",
        description: "WEB-DL [English + Hindi] 1080p 720p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/fGe1ej335XbqN1j9teoDpofpbLX.jpg",
        title: "Mission: Impossible – Dead Reckoning Part One (2023)",
        description: "HDRip [English + Hindi] 1080p 720p & 480p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/wUp0bUXaveR40ikBhDgWwNTijuD.jpg",
        title: "The Batman (2022)",
        description: "BluRay [English + Hindi] 4K 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
        title: "Spider-Man: No Way Home (2021)",
        description: "BluRay [English + Hindi] 4K 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        title: "Avengers: Endgame (2019)",
        description: "BluRay [English + Hindi] 4K 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        title: "Avengers: Infinity War (2018)",
        description: "BluRay [English + Hindi] 4K 1080p 720p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
        title: "Doctor Strange in the Multiverse of Madness (2022)",
        description: "HDRip [English + Hindi] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
        title: "Eternals (2021)",
        description: "WEB-DL [English + Hindi] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/qK7Ssnrfvrt65F66A1thvehfQg2.jpg",
        title: "Black Adam (2022)",
        description: "HDRip [English + Hindi] 1080p 720p Dual Audio [x264] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
        title: "Fast X (2023)",
        description: "WEBRip [English + Hindi] 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
        title: "Guardians of the Galaxy Vol. 3 (2023)",
        description: "BluRay [English + Hindi] 4K 1080p 720p Dual Audio [x264/HEVC] | Full Movie",
      },
      {
        poster: "https://image.tmdb.org/t/p/w500/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        title: "John Wick: Chapter 4 (2023)",
        description: "WEB-DL [English + Hindi] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
      }
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
