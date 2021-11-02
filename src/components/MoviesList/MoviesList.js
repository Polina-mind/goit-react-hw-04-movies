import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MoviesList.css';

const MoviesList = ({ movies, url, location, searchQuery }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${url}/${movie.id}`,
              state: {
                from: location,
                query: searchQuery,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.defaultProps = {
  searchQuery: '',
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string.isRequired,
  // location: PropTypes.object.isRequired,
  searchQuery: PropTypes.string,
};

export default withRouter(MoviesList);
