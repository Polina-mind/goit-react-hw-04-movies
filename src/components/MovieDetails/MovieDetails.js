import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';

const MovieDetails = ({
  title,
  poster_path,
  overview,
  genres,
  release_date,
  popularity,
}) => {
  return (
    <div className="FilmInfo">
      <img
        src={`https://image.tmdb.org/t/p/w154${poster_path}`}
        alt={title}
        width="200"
        className="Poster"
      />

      <div>
        <h2 className="TitleName">
          {title} ({release_date})
        </h2>

        <p className="TitleName">Popularity: {popularity}</p>

        <h3 className="TitleName">Overview</h3>
        <p className="Overview">{overview}</p>

        <h3 className="TitleName">Genres</h3>
        {genres.map(genre => (
          <li key={genre.name} className="Genre">
            {genre.name}
          </li>
        ))}
      </div>
    </div>
  );
};

MovieDetails.defaultProps = {
  overview: '',
  release_date: '',
  poster_path: '',
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  release_date: PropTypes.string,
  popularity: PropTypes.number.isRequired,
};

export default MovieDetails;
