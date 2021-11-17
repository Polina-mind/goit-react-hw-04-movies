import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import { fetchMoviesBySearch } from '../services/getData';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    isLoading: false,
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.state?.query) {
      const query = location.state.query;

      this.setState({ searchQuery: query, isLoading: true });

      fetchMoviesBySearch(query)
        .then(moviesBySearch =>
          this.setState({
            movies: moviesBySearch,
            searchQuery: query,
          }),
        )
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  formSubmitHandler = query => {
    if (query) {
      this.setState({ isLoading: true });

      fetchMoviesBySearch(query)
        .then(moviesBySearch =>
          this.setState({
            movies: moviesBySearch,
            searchQuery: query,
          }),
        )
        .finally(() => this.setState({ isLoading: false }));
    }

    if (query === '') {
      this.setState({
        movies: [],
      });
    }
  };

  render() {
    const { movies, searchQuery, isLoading } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <h1 className="Title">Movies</h1>
        <SearchForm
          searchQuery={
            location.state?.query ? location.state.query : searchQuery
          }
          onSubmit={this.formSubmitHandler}
        />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movies.length > 0 && (
            <MoviesList
              movies={movies}
              url={match.url}
              searchQuery={searchQuery}
            />
          )
        )}
      </>
    );
  }
}

export default MoviesPage;
