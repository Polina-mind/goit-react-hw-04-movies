import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MoviesPageView from './MoviesPageView';
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
        <h1 className="Title">Movies</h1>

        <form className="SearchForm" onSubmit={() => this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />

          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>

        {searchQuery && (
          <MoviesPageView
            searchQuery={searchQuery}
            movies={movies}
          ></MoviesPageView>
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
