import React from "react";

const MovieCard = ({ poster, title, description }) => {
  return (
    <div className="w-64 bg-black rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      {/* Movie Poster */}
      <img
        src={poster}
        alt={title}
        className="w-full h-96 object-cover"
      />

      {/* Info Section */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
