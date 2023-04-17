import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({ movies }) => {
  return (
    <div  style={{display: "flex", alignContent: "center", justifyContent: "space-around" , flexWrap: "wrap"}}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;