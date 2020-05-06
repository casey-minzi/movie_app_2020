import React from 'react';
import './Movie.css';

export default function Movie({ title, summary, year, medium_cover_image, genres }) {
    return (
        <div className="movie">
            <img src={medium_cover_image} alt={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h4 className="movie_year">{year}</h4>
                <ul className="movie_genre">
                    {genres.map((genre, index) => (
                        <li className="genres_genre" key={index}>
                            {genre}
                        </li>))}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    )
}
