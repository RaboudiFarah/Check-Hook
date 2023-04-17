import React from "react";


function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;

