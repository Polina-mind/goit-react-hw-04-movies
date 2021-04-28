import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  async componentDidMount() {
    // console.log(this.state.searchQuery);

    if (this.state.searchQuery) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4ba31ae74c8b6119033f94598087ffb2&query=${this.state.searchQuery}`,
      );

      this.setState({ movies: response.data.results });
      console.log(response.data.results);
    }
  }

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    this.setState({ searchQuery: '' });
    console.log(this.state.searchQuery);
  };

  render() {
    const { match } = this.props;
    const { movies, searchQuery } = this.state;
    console.log(searchQuery);

    return (
      <>
        <h1>Movies</h1>

        <form className="SearchForm" onSubmit={() => this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />
        </form>

        {searchQuery && movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

MoviesPage.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MoviesPage;
