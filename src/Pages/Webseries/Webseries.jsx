import React from "react";
// import "../Movies/Movie.css";  // Import CSS

const movies = [
  {
    poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    title: "Stranger Things (2016– )",
    description: "Sci-fi thriller with kids battling supernatural forces."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
    title: "Breaking Bad (2008–2013)",
    description: "A chemistry teacher becomes a drug kingpin."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/vHt0LKcS3vY4gRcwF2fJm5TRxTo.jpg",
    title: "The Witcher (2019– )",
    description: "Geralt, a monster hunter, navigates a dangerous world."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/obLBdhLxheKg8Li1qO11r2SwmYO.jpg",
    title: "Friends (1994–2004)",
    description: "Six friends navigate life and love in New York City."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/ndAvF4JLsliGreX87jAc9Gdjmj8.jpg",
    title: "Peaky Blinders (2013–2022)",
    description: "Crime family ruling Birmingham in the early 1900s."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
    title: "Money Heist (La Casa de Papel) (2017–2021)",
    description: "Mastermind orchestrates epic heists in Spain."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
    title: "Narcos (2015–2017)",
    description: "The rise of Pablo Escobar and the drug wars in Colombia."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/sqv2wOS0Dh4nQ8S3KzY9F9HhP0m.jpg",
    title: "Dark (2017–2020)",
    description: "Time travel mysteries in a small German town."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg",
    title: "The Mandalorian (2019– )",
    description: "A lone bounty hunter protects a mysterious alien."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/jpB8gFFVEfMCfWwXJkM8Q7t0rEM.jpg",
    title: "Better Call Saul (2015–2022)",
    description: "A lawyer's descent leading up to Breaking Bad events."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/8x4f5qEJXbwiYdG21tM4L9xG6rM.jpg",
    title: "House of the Dragon (2022– )",
    description: "Targaryen civil war in the Game of Thrones universe."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
    title: "The Boys (2019– )",
    description: "Anti-superheroes fight corrupt Supes in modern world."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/vkA6Gm7L0jIw7xohGpLXD8Lbi8X.jpg",
    title: "Prison Break (2005–2017)",
    description: "Ingenious escapes and conspiracies unfold."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg",
    title: "Sherlock (2010–2017)",
    description: "Modern adaptation of the famed detective’s cases."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/1SgXj2eA4e2EyJ4nqk3zkquslZL.jpg",
    title: "Squid Game (2021– )",
    description: "Survival game with deadly stakes and massive reward."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg",
    title: "Westworld (2016–2022)",
    description: "AI-hosted park’s dark truths unravel."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/l4lF5dzy8W4DdyRG3NcAyozAhDC.jpg",
    title: "Vikings (2013–2020)",
    description: "The legendary saga of Ragnar Lothbrok and more."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/xU6pMN5FWUHIaC7v8K8HL7hnI82.jpg",
    title: "The Walking Dead (2010–2022)",
    description: "Survivors battle the undead and morality’s collapse."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/wQmpswAz0bV1B0Z6WvHBl92GB7D.jpg",
    title: "Lucifer (2016–2021)",
    description: "The Devil assists in solving crimes in L.A."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    title: "The Umbrella Academy (2019–2023)",
    description: "Adopted superpowered siblings reunite to save the world."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg",
    title: "Lost (2004–2010)",
    description: "Plane crash survivors unravel island mysteries."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg",
    title: "House of Cards (2013–2018)",
    description: "A ruthless politician climbs to power in D.C."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/eqrYjEfzMu7D1KoEjUesboNlsOF.jpg",
    title: "Dexter (2006–2013)",
    description: "A forensic killer hunts other murderers in Miami."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/3ILMlmC30QUnYkY3XEBOyJ82Dqu.jpg",
    title: "Arrow (2012–2020)",
    description: "A vigilante hero fights crime as Green Arrow."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/1r3oPjn4YqZHF6z3hH6hyZz65em.jpg",
    title: "The Flash (2014–2023)",
    description: "Barry Allen battles villains as the Fastest Man Alive."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/qaGwsUWbE4NU9w4u4UqomgvK6fw.jpg",
    title: "Aankhon Ki Gustaakhiyan (2025)",
    description: "Hindi drama web series, fresh and impactful."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/n0LdZvEqZjnSQSHzzwryFBYjXk1.jpg",
    title: "Super 30 (2019)",
    description: "Inspiring professor coaching underprivileged students."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/adYjCJGSNiL7CIaDW3g0Bcg7r2Z.jpg",
    title: "Sitaare Zameen Par (2025)",
    description: "Touching family drama series."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/zhMI6I0kSLnewTMwE0A8Tz3Cj2f.jpg",
    title: "Tanvi: The Great (2025)",
    description: "Biographical drama web series."
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/k47tmhqiUsmD6UoyoimHVQAjHx9.jpg",
    title: "Son of Sardaar 2 (2025)",
    description: "Action-comedy blend with a playful tone."
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
