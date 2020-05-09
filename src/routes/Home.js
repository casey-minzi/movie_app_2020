import React, { useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';

function Home() {

  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const getMovies = () => {
    return dispatch => {
      axios.get("https://yts-proxy.now.sh/list_movies.json")
        .then(res =>
          dispatch({
            type: "UPLOAD_MOVIE_DATA",
            payload: res.data.data.movies
          })
        );
    };
  }

  useEffect(() => {
    dispatch(getMovies());
  }, []);

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