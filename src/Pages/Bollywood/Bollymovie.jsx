import React from "react";
// import "../Movies/Movie.css";  // Import CSS

const movies = [
  {
    poster: "https://catimages.org/images/2025/06/21/The-Great-Indian-Kapil-Show-2025-S03-HDHub4u.Ms.jpg",
    title: "The Great Indian Kapil Show (Season 3)",
    description:
      "WEB-DL [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] HD | [NF Series] [EP-9 Added]",
  },
  {
    poster: "https://image.tmdb.org/t/p/w342/2Yc8Kl2ldPpDzLrG2M5Ddv62FXB.jpg",
    title: "War 2 (2025)",
    description:
      "V2 HQ-HDTC [Hindi (LiNE)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster: "https://image.tmdb.org/t/p/w342/uGTF87VyfjtwwqRlT2apQg5YnEp.jpg",
    title: "Mahavatar Narsimha (2025)",
    description:
      "DS4K WEB-DL [Hindi (DD5.1) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
  },
  {
    poster: "https://image.tmdb.org/t/p/w400/qTLRHRJIQLRtsv9Q1rbUgRlE3A2.jpg",
    title: "Love All (2023) ",
    description:
      " [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster: "https://image.tmdb.org/t/p/w342/wXVttISNv9GkbTCojifhZXeITG.jpg",
    title: "Andhera (Season 1)",
    description:
      "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] HD | ALL Episodes [PrimeVideo Series]",
  },

  {
    poster: "https://image.tmdb.org/t/p/w500/pK605FvzNHTHv1M5Kqq7jqHbFK4.jpg",
    title: "Tehran (2025)",
    description:
      "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster :  "https://image.tmdb.org/t/p/w342/gCVzLTyHzgLDmZejInUtq4FeirN.jpg9",
    title : "Sena: Guardians of the Nation (Season 1)   ",
    description : " WEB-DL [Hindi DD2.0] 4K 1080p 720p & 480p [x264/HEVC] | PrimeVideo Series",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/9DtPtMWZqotqvBlMwHlTxXc6xPz.jpg",
    title : "Grand Masti (2013) ",
    description : " WEB-DL [Hindi DD2.0] 4K 1080p 720p & 480p [x264/HEVC] | PrimeVideo Series",
  },
  {
    poster : "https://catimages.org/images/2025/08/12/Court-Kacheri-2025-S01-HDHub4u.Ms.jpg",
    title : "Court Kacheri (Season 1) ",
    description : "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] HD | ALL Episodes [SonyLiv Series]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/n9MjoGmaYagaaETCQP0S6Ch3JLH.jpg",
    title : "Jolly LLB 2 (2017)",
    description : "BluRay [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w342/jytZfJtjJnw7Yn2zW52wcbPYVXQ.jpg",
    title : "Tanvi: The Great (2025)",
    description : "DS4K WEB-DL [Hindi (ORG-DD5.1)] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2025/07/19/Untitled.jpg",
    title : "Nikita Roy (2025)",
    description : "DS4K WEB-DL [Hindi (ORG-DD5.1)] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/ocYBlbuQvCFgNFyNrkxXcOgI7hD.jpg",
    title : "Sattamum Needhiyum (Season 1)",
    description : " WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p x264 | Zee5 Series",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/adYjCJGSNiL7CIaDW3g0Bcg7r2Z.jpg",
    title : "Sitaare Zameen Par (2025) ",
    description : "DS4K WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w342/z98O8Eqk3JDlCfUhXok1kwz24xl.jpg",
    title : "Saiyaara (2025) ",
    description : "V2 HQ-HDTC [Hindi (ORG-DD2.0)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/oX45CctMTeARkISgtnso3TAvZaC.jpg",
    title : "Andaaz 2 (2025)",
    description : "HDTC [Hindi (LiNE)] 1080p 720p & 480p [x264/HC-ESub] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/dofvavrizF7KnF6Jl6g6yMp7y1B.jpg",
    title : "Udaipur Files: A Tailor’s Murder Story (2025) ",
    description : " HDTC [Hindi (LiNE)] 1080p 720p & 480p [x264] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/n0LdZvEqZjnSQSHzzwryFBYjXk1.jpg",
    title : "Super 30 (2019)",
    description : " BluRay [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2025/08/13/Saare-Jahan-Se-Accha-2025-S01-HDHub4u..Ms.jpg",
    title : "Saare Jahan Se Accha: The Silent Guardians (Season 1) ",
    description : "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] HD | ALL Episodes [NF Series]",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/iSVYJE0Hz4g0SEAGKXA84yhcfPT.jpg",
    title : "Ramaiya Vastavaiya (2013)",
    description : "WEB-DL [Hindi DD5.1] 1080p 720p & 480p [x264/HC-Esub] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/k47tmhqiUsmD6UoyoimHVQAjHx9.jpg",
    title : "Son of Sardaar 2 (2025)",
    description : "HQ-HDTC [Hindi (ORG-DD2.0)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/zhMI6I0kSLnewTMwE0A8Tz3Cj2f.jpg",
    title : "Kal Ho Naa Ho (2003) ",
    description : "BluRay [Hindi DD5.1] 1080p 720p & 480p [x264/Esub] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/s3o23GbRXvHPPRm50kqQjjjCoKP.jpg",
    title : "Dhadak 2 (2025)",
    description : "HQ-HDTC [Hindi (ORG-DD2.0)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w400/vPTYtKuV8X5uUd3SqnzO14W6Dti.jpgs",
    title : "Sultan (2016)",
    description : "BluRay [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w500/qaGwsUWbE4NU9w4u4UqomgvK6fw.jpg",
    title : "Aankhon Ki Gustaakhiyan (2025) ",
    description : "DS4K WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2024/12/22/CID-2024-S02-HDHub4u.Tv.jpg",
    title : "CID(Seacon 2)",
    description : "WEB-DL [Hindi DD5.1] Dual Audio 1080p & 720p & 480p x264 ESubs HD | Full Movie",
  },
  {
    poster : "https://catimages.org/images/2025/08/09/Zora-HDHub4u-Poster.jpg",
    title : "Zora(2025)",
    description : "[Hindi(Line)]1080p 720p &480p [x264] Full Movie",
  },
  {
    poster : "https://image.tmdb.org/t/p/w342/hMX0GJKQsdKbiGjLmj1rY9465aN.jpg",
    title : "Sarzameen(2025)",
    description : "DS4K WEB-DL [Hindi (DD5.1)] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
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
