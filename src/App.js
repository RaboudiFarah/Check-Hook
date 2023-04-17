import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Header from './Components/Header';
import Filter from './Components/Filter';
import './App.css';

const App = () => {
  // Define the initial list of movies using useState hook
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Mulan ',
    
      posterURL: 'https://static.posters.cz/image/750/affiches-et-posters/mulan-be-legendary-i87682.jpg',
      rating: 10,
    },
    {
      id: 2,
      title: 'Split',
      posterURL: 'https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUHtaVzfJlFS7ZohZJOIrj8xeDs1MSA2pwZxgB/jpg',
      rating: 7.2,
    },
    {
      id: 3,
      title: 'Five feet Apart',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNzVmMjJlN2MtNWQ4Ny00Zjc2LWJjYTgtYjJiNGM5MTM1ZTlkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
      rating: 3.0,
    },
  ]);

  // Define state variables for title and rating filters using useState hook
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  // Define a function to handle adding a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Define functions to handle title and rating filters
  const handleTitleFilterChange = (title) => {
    setTitleFilter(title);
  };

  const handleRatingFilterChange = (rating) => {
    setRatingFilter(rating);
  };

  // Apply filters to the list of movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="app">
      <h1>My Movie List</h1>
      <Header/>
  
      {/* Filter component */}
      <Filter
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
  
      {/* Movie list */}
      <MovieList movies={filteredMovies} />
  
      {/* Add movie form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newMovie = {
            id: Date.now(),
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            posterURL: e.target.elements.posterURL.value,
            rating: parseFloat(e.target.elements.rating.value),
          };
          handleAddMovie(newMovie);
          e.target.reset();
        }}
      >
        <h3>Add a Movie</h3>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        
        <label>
          Poster URL:
          <input type="text" name="posterURL" />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" min="0" max="10" step="0.1" />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
      }
      export default App;