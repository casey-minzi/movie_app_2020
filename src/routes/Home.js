import React, { useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';

function Home() {

  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const getMovies = async () => {
    const {
      data: {
        data: { movies }
      } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    dispatch({ type: 'UPLOAD_MOVIE_DATA', payload: movies })
  }

  useEffect(() => {
    getMovies();
  });

  return (
    <div className="Home">
      {movies.length === 0 ?
        <span className="loader">is Loading...</span> :
        <div className="movies">
          {movies.map(movie => <Movie {...movie} key={movie.id} />)}
        </div>
      }
    </div>
  );

}

export default Home;