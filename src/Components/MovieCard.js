import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.title}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-info">
          <h4>{movie.title}</h4>
          <span>{movie.rating}/10</span>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
