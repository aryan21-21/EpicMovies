  import React from "react";
  import "../Movies/Movie.css";  // Import CSS

  const movies = [
    {
      poster: "https://image.tmdb.org/t/p/w342/kr36awqmziEI5mfUElsHB0pj9zP.jpg",
      title: "Coolie (2025)",
      description:
        "HQ-HDTC [Hindi (CLEAN)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
    },
    {
      poster: "https://image.tmdb.org/t/p/w342/2Yc8Kl2ldPpDzLrG2M5Ddv62FXB.jpg",
      title: "War 2 (2025)",
      description:
        "V2 HQ-HDTC [Hindi (LiNE)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
    },
    {
      poster: "https://image.tmdb.org/t/p/w342/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
      title: "Superman (2025)",
      description:
        "WEB-DL [Hindi (LiNE) & English] 4K 1080p 720p & 480p [x264/10Bit-HEVC] | Full Movie",
    },
    {
      poster: "https://image.tmdb.org/t/p/w342/aBnhdZss43z1ozgJ1cFm9bkQtws.jpg",
      title: "JSK – Janaki V vs State of Kerala (2025)",
      description:
        "WEB-DL [Hindi (DD5.1) & Malayalam] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
    },
    {
      poster: "https://image.tmdb.org/t/p/w342/kTtoAez98Nt6zveNDcEsPCyJNb4.jpg",
      title: "84 Toh Baad (Season 1)",
      description:
        "WEB-DL [Punjabi DD5.1] 1080p 720p & 480p [x264/Esusb] | Full Series",
    },

    {
      poster: "https://image.tmdb.org/t/p/w342/uGTF87VyfjtwwqRlT2apQg5YnEp.jpg",
      title: "Mahavatar Narsimha",
      description:
        "DS4K WEB-DL [Hindi (DD5.1) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
    },
    {
      poster :  "https://catimages.org/images/2025/08/16/Fatal-Seduction-S02-HDHub4u-Poster.jpg",
      title : "Fatal Seduction (Season 2)",
      description : "WEB-DL [Hindi (DD5.1) & English] 1080p 720p & 480p x264 | NF Series",
    },
    {
      poster : "https://image.tmdb.org/t/p/w342/qTLRHRJIQLRtsv9Q1rbUgRlE3A2.jpg",
      title : "Love All(2023)",
      description : " WEB-DL [Hindi DD5.1] 1080p 720p & 480p [x264/HEVC] | Full Movie",
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
      poster : "https://imgshare.info/images/2025/08/13/Screenshot_1.jpg",
      title : "Snow White and the Huntsman (2012)",
      description : "BluRay Dual Audio [Hindi DD 5.1 & English] 1080p 720p & 480p x264 HD | Full Movie",
    },
    {
      poster : "https://imgshare.info/images/2025/08/13/Inglourious.Basterds.2009.196e7f6d8c8371ef.jpg",
      title : "Inglourious Basterds (2009) ",
      description : "BluRay Dual Audio [Hindi DD 5.1 & English] 1080p 720p & 480p x264 HD | Full Movie",
    },
    {
      poster : "https://image.tmdb.org/t/p/w500/pK605FvzNHTHv1M5Kqq7jqHbFK4.jpg",
      title : "Tehran (2025)",
      description : "WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p [x264/HEVC] | Full Movie",
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
      poster : "https://image.tmdb.org/t/p/w400/9DtPtMWZqotqvBlMwHlTxXc6xPz.jpg",
      title : "Grand Masti (2013)",
      description : "WEB-DL [Hindi DD2.0] 1080p 720p & 480p [x264/Esubs] | Full Movie",
    },
    {
      poster : "https://image.tmdb.org/t/p/w400/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
      title : " Weapons (2025) ",
      description : "HDTC [English (Clean)] 1080p 720p & 480p [x264] | Full Movie",
    },
    {
      poster : "https://imgshare.info/images/2025/08/10/The.Souvenir.2019.jpg",
      title : "The Souvenir (2019) ",
      description : "BluRay [Hindi (ORG 5.1) & English] 1080p 720p & 480p [x264] | Full Movie",
    },
    {
      poster : "https://image.tmdb.org/t/p/w500/qr25aBh1Uw7X7uVETpFtetK51ag.jpg",
      title : "Jurassic World: Rebirth (2025)",
      description : "DS4K WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
    },
    {
      poster : "https://imgshare.info/images/2025/08/05/Thunder.Force.2021.jpg",
      title : "Thunder Force (2021)",
      description : "WEB-DL [Hindi DD5.1 & English] Dual Audio 1080p & 720p & 480p x264 ESubs HD | Full Movie",
    },
    {
      poster : "https://imgshare.info/images/2025/08/04/Max.Steel.2016.jpg",
      title : "Max Steel(2016)",
      description : "BluRay [Hindi (ORG 5.1) & English] 1080p 720p & 480p [x264] | Full Movie",
    },
    {
      poster : "https://image.tmdb.org/t/p/w342/icgZb2KRDyrj15oYf1ucdyHM1gI.jpg",
      title : "Materialists",
      description : "WEB-Dl [Hindi (ORG 5.1) & English]  4K 1080p 720p & 480p [x264] | Full Movie",
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
          <p className="movie-des">{description}</p>
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
          ))}
        </div>
      </div>
    );
  };

  export default Movie1;
