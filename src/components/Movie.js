import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

export default function Movie({ id, title, summary, year, medium_cover_image, genres }) {
    return (
        <div className="movie">
            <Link to={`/movie-detail/${id}`}>
                <img src={medium_cover_image} alt={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h4 className="movie_year">{year}</h4>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => (
                            <li className="genres_genre" key={index}>
                                {genre}
                            </li>))}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    )
}
