import React from "react";
// import "../Movies/Movie.css";  // Import CSS

const movies = [
  {
    poster : "https://image.tmdb.org/t/p/w500/u7M4LAaFVcwLr3sLsuORHPncTup.jpg",
    title : "Vash (2023)",
    description : "DS4K WEB-DL [Gujarati 2.0] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/4kFKAGcyEAMg6M5OegMLdTLcROn.jpg",
    title : "Vash Level 2 (2025) ",
    description : "V2 HDTC [Hindi (LiNE) & Gujarati (LiNE)] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/rZVwakkugWTDIKjRzTksCIJuJ7s.jpg",
    title : "Fakt Mahilao Maate (2022)",
    description : "WEB-DL [Hindi (DD2.0) & Gujarati] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "data:image/jpeg;base64,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",
    title : "Love Ni Bhavai 2017",
    description : "WEB-DL [Hindi (DD2.0) & Gujarati] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2025/06/19/All-the-Best-Pandya-2025-HDHub4u.Ms.jpg",
    title : "All the Best Pandya (2025)",
    description : "WEB-DL [Gujarati DD5.1] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://1.bp.blogspot.com/-0WDa57-JVzU/WsSuxcdKp9I/AAAAAAAAEZY/wt73OcUNDbciFlv45C2t36RAPAtOotcawCLcBGAs/s1600/s.jpg",
    title : "Shubh Aarambh 2017 ",
    description : "WEB-DL [Gujarati DD5.1] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/5bYxTszrasq4NtLMtXQwVDhIZmN.jpg",
    title : "Hun Iqbal (2023)",
    description : "Gujarati WEB-DL 1080p 720p & 480p [x264/HEVC 10bit] DD2.0 | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/liPrulNapj6nAXXULD41RRr0ig6.jpg",
    title : "Hello Zindagi (2022)",
    description : "Gujarati WEB-DL 1080p 720p & 480p x264 DD2.0 | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/7A3RxFNw2JWrXQr3e1gjrVmluii.jpg",
    title : "Vickida No Varghodo (2022)",
    description : "Gujarati WEB-DL 1080p 720p & 480p [x264/HEVC] DD2.0 | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/hNUkHWbguweR2SAmS8DI3NKTXlV.jpg",
    title : "azaad (Season 1)",
    description : "Gujarati WEB-DL 720p & 480p x264 DD2.0 | Full Series",
  },
   {
    poster : "https://image.tmdb.org/t/p/w400/k3zltzxeK7JpGd3lYH4OwzACHyj.jpg",
    title : "Trisha on the Rocks (2024) ",
    description : "WEB-DL [Hindi (ORG 5.1) & Gujarati] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://c.saavncdn.com/903/Vitthal-Teedi-Gujarati-2021-20210517221234-500x500.jpg",
    title : "Vitthal Teedi: Chapter 1 (Season 1)",
    description : "Gujarati WEB-DL 1080p / 720p / 480p x264 HD [ALL Episodes] | OHO Series",
  },
  {
    poster : "https://catimages.org/images/2025/03/15/Hahacar-2024-HDHub4u.Ms.jpg",
    title : "Hahacar (2024) ",
    description : "WEB-DL [Gujarati 2.0] 1080p 720p & 480p [x264/HEVC] | Full Movie",
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
