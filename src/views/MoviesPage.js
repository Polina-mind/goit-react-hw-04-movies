import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import { fetchMoviesBySearch } from '../services/getData';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.state && location.state.query) {
      const query = location.state.query;

      fetchMoviesBySearch(query).then(moviesBySearch =>
        this.setState({
          movies: moviesBySearch,
          searchQuery: query,
        }),
      );
    }
  }

  formSubmitHandler = query => {
    if (query) {
      fetchMoviesBySearch(query).then(moviesBySearch =>
        this.setState({
          movies: moviesBySearch,
          searchQuery: query,
        }),
      );
    }
  };

  render() {
    const { movies, searchQuery } = this.state;
    const { match } = this.props;

    return (
      <>
        <h1 className="Title">Movies</h1>

        <SearchForm onSubmit={this.formSubmitHandler} />

        {movies.length > 0 && (
          <MoviesList
            movies={movies}
            url={match.url}
            searchQuery={searchQuery}
          />
        )}
      </>
    );
  }
}

export default MoviesPage;
