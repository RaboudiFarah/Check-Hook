import React from 'react';
import { useParams ,Link } from 'react-router-dom';



const MovieDescription = ({ movies }) => {
  // Get the title parameter from the URL using the useParams hook
  const { title } = useParams();

  // Find the movie in the list of movies that matches the title parameter
  const movie = movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());

  // If no movie is found, display a message
 if (!movie) {
    return <p>Movie not found</p>;
  }

  // Otherwise, display the movie details
  return (
    <div>
    <Link to="/">
    <button>Back to home </button></Link>
     <iframe width="560" height="315" src={movie.trailerURL} title={movie.title} allowFullScreen></iframe>
      <p>{movie.description}</p>
     
      
    </div>
  );
};

export default MovieDescription;







