import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery) {
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=${this.state.searchQuery}`,
      ).then(response => {
        this.setState({ movies: response.data.results });
      });
    }

    this.setState({ searchQuery: '' });
  };

  render() {
    const { match } = this.props;
    const { movies } = this.state;

    return (
      <>
        <h1 className="Title">Movies</h1>

        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />

          <button type="submit" className="SearchFormButton">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>

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

export default MoviesPage;
