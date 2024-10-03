import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { imdbID } = useParams(); // Get imdbID from URL params
  const [movie, setMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getMovieDetails = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=eed5bdb0`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovie(data); // Set movie details in state
        setErrorMessage('');
      } else {
        setMovie(null);
        setErrorMessage('Movie not found');
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setErrorMessage('Error fetching movie details. Please try again later.');
    }
  };

  useEffect(() => {
    if (imdbID) {
      getMovieDetails(imdbID);
    }
  }, [imdbID]);

  if (errorMessage) {
    return <h2>{errorMessage}</h2>;
  }

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{movie.Title} ({movie.Year})</h2>
      <p>Director: {movie.Director}</p>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <p>{movie.Plot}</p>
      <p><strong>IMDB ID:</strong> {movie.imdbID}</p>
    </div>
  );
}

export default MovieDetail;
