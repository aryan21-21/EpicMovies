import React from "react";
// import "../Movies/Movie.css";  // Import CSS

const movies = [
  {
    poster : "https://image.tmdb.org/t/p/w400/jg3YdxDNlxay0NWTxgAPif647Hj.jpg",
    title : "My Life with the Walter Boys (Season 1) ",
    description : "WEB-DL [Hindi (DD5.1) & English] 1080p 720p & 480p [x264/ESubs] | NF Series",
  },
  {
    poster: "https://image.tmdb.org/t/p/w342/kTtoAez98Nt6zveNDcEsPCyJNb4.jpg",
    title: "84 Toh Baad (Season 1)",
    description:
      "WEB-DL [Punjabi DD5.1] 1080p 720p & 480p [x264/Esusb] | Full Series",
  },
  {
    poster : "https://catimages.org/images/2025/06/21/The-Great-Indian-Kapil-Show-2025-S03-HDHub4u.Ms.jpg",
    title : "The Great Indian Kapil Show (Season 3) ",
    description : "WEB-DL [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] HD | [NF Series] [EP-8 Added]",
  },
  {
    poster : "https://catimages.org/images/2025/08/07/Salakaar-2025-S01-HDHub4u.Ms.jpg",
    title : "Salakaar (Season 1)",
    description : "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] HD | ALL Episodes [JioHotStar Series]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w342/aamw6JjKwTy6bdviyIcFKekSD6x.jpg",
    title : "Wednesday (Season 2)",
    description : "WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | NF Series | [Part-1 Added]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w342/yuOfb1MgnaGPa4guzV0n1IFYVGN.jpg",
    title : "Eyes of Wakanda (Season 1)",
    description : "WEB-DL [English (DD5.1)] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | JioHotstar Series",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/ocYBlbuQvCFgNFyNrkxXcOgI7hD.jpg",
    title : "Sattamum Needhiyum (Season 1)",
    description : " WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p x264 | Zee5 Series",
  },
  {
    poster : "https://catimages.org/images/2025/08/13/Saare-Jahan-Se-Accha-2025-S01-HDHub4u..Ms.jpg",
    title : "Saare Jahan Se Accha: The Silent Guardians (Season 1) ",
    description : "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] HD | ALL Episodes [NF Series]",
  },
  {
    poster : "https://image.tmdb.org/t/p/original/gcSNS5cy1iOmYawIdJCzoc873rQ.jpg",
    title : "Countdown (Season 1",
    description : "WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | AMZN Series | [EP-10 Added]",
  },
  { 
    poster: "https://image.tmdb.org/t/p/w342/wXVttISNv9GkbTCojifhZXeITG.jpg",
    title: "Andhera (Season 1)",
    description:
      "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] HD | ALL Episodes [PrimeVideo Series]",
  },
  {
    poster : "https://catimages.org/images/2024/12/22/CID-2024-S02-HDHub4u.Tv.jpg",
    title : "CID(Seacon 2)",
    description : "WEB-DL [Hindi DD5.1] Dual Audio 1080p & 720p & 480p x264 ESubs HD | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
    title : "Death Note (Season 1)",
    description : "BluRay [Hindi (DD2.0) & English] 1080p 720p & 480p [x264/Esubs] | [EP-2 Added]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/8Mckh3qJRTzXTQNZtpb133RHmO4.jpg",
    title : "Chief of War (Season 1) ",
    description : " WEB-DL [English DD5.1] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | AppleTV Series | [EP-5 Added]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/xkpkTj6KGsjSaet0VQaq0aTn31D.jpg",
    title : "Delhi Crime (Season 1)",
    description : "WEB-DL [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] | NF Series",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/gCVzLTyHzgLDmZejInUtq4FeirN.jpg",
    title : "Sena: Guardians of the Nation (Season 1)",
    description : "WEB-DL [Hindi DD2.0] 4K 1080p 720p & 480p [x264/HEVC] | PrimeVideo Series",
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
