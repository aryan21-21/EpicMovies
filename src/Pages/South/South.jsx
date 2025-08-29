import React from "react";
// import "../Movies/Movie.css";  // Import CSS

const movies = [
  {
    poster : "https://catimages.org/images/2025/08/25/Rangasthalam-2018-HDHub4u.Ms.jpg",
    title : "Rangasthalam (2018) ",
    description : "UNCUT DS4K WEB-DL [Hindi (DD2.0) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/6x0wmp2LlLqhEbd8XKjJpTHdHsT.jpg",
    title : "Kingdom (2025)",
    description : "WEB-DL [Hindi (DD5.1) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie [Saamrajya]",
  },
    {
    poster : "https://image.tmdb.org/t/p/w500/njq3p81KoTVd0lWqGeudId7WwUn.jpg",
    title : "3BHK (2025)",
    description : "WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/4brbrKAseKfprfp98j2i6HfQTkv.jpg",
    title : "Maareesan (2025)",
    description : "WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/jfN2iQLfhvziz9YlR9WbB4VVQvk.jpg",
    title : "Thalaivan Thalaivii (2025)",
    description : " WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2025/08/20/Untitled.jpg",
    title : "Soothravakyam (2025) ",
    description : "WEB-DL [Hindi (DD2.0) & Malayalam] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/5KIH7zTSx83VByR3jpK6tzgeyBo.jpg",
    title : "Hari Hara Veera Mallu (2025) ",
    description : "WEB-DL [Hindi (DD5.1) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/sZYvTWAGaB31GlgRtCf2uJrcOXd.jpg",
    title : "Lal Salaam (2024)",
    description : "WEB-DL [Hindi (2.0)] 1080p 720p & 480p [x264/HEVC] | Full Movies",
  },
  {
    poster: "https://image.tmdb.org/t/p/w342/aBnhdZss43z1ozgJ1cFm9bkQtws.jpg",
    title: "JSK – Janaki V vs State of Kerala (2025)",
    description:
      "WEB-DL [Hindi (DD5.1) & Malayalam] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster: "https://image.tmdb.org/t/p/w342/kr36awqmziEI5mfUElsHB0pj9zP.jpg",
    title: "Coolie (2025)",
    description:
      "HQ-HDTC [Hindi (CLEAN)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/ocYBlbuQvCFgNFyNrkxXcOgI7hD.jpg",
    title : "Sattamum Needhiyum (Season 1)",
    description : " WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p x264 | Zee5 Series",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/vkuvf6tx5cyJbW2t4WnfY80cPXp.jpg",
    title : "Hit List (2024)",
    description : "UNCUT WEB-DL [Hindi (DD5.1) & Tamil] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/8aaviVu2EIHLMqwKiKRO4UwMmRu.jpg",
    title : "The Door (2025)",
    description : " UNCUT WEB-DL [Hindi (DD2.0) & Tamil] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2025/07/22/Kannappa-Hindi-Dubbed-HDrip-Full-Movie-HDHub4u03955696056baada.jpg",
    title : "Kannappa (2025) ",
    description : "DS4K WEB-DL [Telugu (DD5.1) & Tamil-Malayalam (DD2.0)] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/qAHlMRxTBsFRQ5KEEPWLWYfdaOV.jpg",
    title : "RX 100 (2018) ",
    description : "UNCUT WEB-DL [Hindi (DD5.1) & Telugu] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
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
