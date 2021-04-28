import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Axios from 'axios';

class MoviesPageView extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  async componentDidMount() {
    console.log(this.state.searchQuery);

    if (this.state.searchQuery) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4ba31ae74c8b6119033f94598087ffb2&query=${this.state.searchQuery}`,
      );

      this.setState({ movies: response.data.results });
      console.log(response.data.results);
    }
  }

  render() {
    const { match } = this.props;
    const { movies } = this.state;

    return (
      <>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPageView;
