import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';

function MovieList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getMovies = async (searchTerm) => { 
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=eed5bdb0`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        setFilteredMovies(data.Search);
        setErrorMessage(''); // Clear any previous errors
      } else {
        setFilteredMovies([]);
        setErrorMessage('Movie not found'); // Display 'Movie not found'
      }
    } catch (error) {
      console.error('Error Loading Movies', error); 
      setFilteredMovies([]);
      setErrorMessage('Error fetching movies. Please try again later.'); // Handle API errors
    }
  };

  useEffect(() => {
    if (searchTerm) {
      getMovies(searchTerm);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              {movie.Title} ({movie.Year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
