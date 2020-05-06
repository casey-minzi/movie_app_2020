import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies }
      } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovies(movies);
  }

  useEffect(() => {
    getMovies();
  }, [movies]);

  return (
    <div className="App">
      {movies.length === 0 ?
        <span className="loader">is Loading...</span> :
        <div className="movies">
          {movies.map(movie => <Movie {...movie} key={movie.id} />)}
        </div>
      }
    </div>
  );

}

export default App;
